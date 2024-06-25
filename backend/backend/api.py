from django.utils import timezone
from django.views.generic.detail import DetailView
from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView
from django.http import HttpResponse, JsonResponse
from django.conf import settings
import json
import os
import requests
from .models import Favourites
from .serializers import FavouritesSerializer


ticketmaster_url = "https://app.ticketmaster.com/discovery/v2/"
google_maps_url = "https://maps.googleapis.com/maps/api/geocode/json"

unit = "miles"
params_list = ["location", "distance", "category", "keyword"]

category_map = {
        "music" : "KZFzniwnSyZfZ7v7nJ",
        "sports" : "KZFzniwnSyZfZ7v7nE",
        "arts&theatre" : "KZFzniwnSyZfZ7v7na",
        "film" : "KZFzniwnSyZfZ7v7nn",
        "miscellaneous" : "KZFzniwnSyZfZ7v7n1"
}

def convert_category_to_id(category):
    try:
        return category_map[category.lower()]
    except KeyError:
        return category_map["miscellaneous"]

class TicketMasterAPI(DetailView):
    def get(self, request):
        data = {}
        for key in request.GET:
            data[key] = request.GET[key]
        if not all(param in data.keys() for param in params_list):
            return HttpResponse("Error missing params", status=400)

        category = convert_category_to_id(data["category"])

        try:
            distance = int(data["distance"])
        except ValueError:
            return HttpResponse("Error parsing distance", status=400)

        maps_url = google_maps_url + "?address=" + data["location"] + "&key=" + settings.GOOGLE_MAPS_API_KEY

        resp = requests.get(maps_url)
        if resp.status_code < 200 or resp.status_code >= 300:
            return HttpResponse("Error interpreting your location", status=500)

        try:
            print(resp.json())
            location = resp.json()["results"][0]["geometry"]["location"]
            geoPoint = str(location["lat"]) + "," + str(location["lng"])
        except Exception as e:
            return HttpResponse("Error interpreting your location", status=400)

        url = ticketmaster_url + "events"
        url += "?geoPoint=" + geoPoint
        url += "&radius=" + str(distance)
        url += "&unit=" + unit
        url += "&category=" + category
        url += "&keyword=" + data["keyword"].replace(" ", "+")
        url += "&apikey=" + settings.CONSUMER_KEY

        print(url)

        resp = requests.get(url)
        if resp.status_code < 200 or resp.status_code >= 300:
            return HttpResponse("Error calling ticketmaster.", status=500)

        try:
            events = resp.json()
            favourites = Favourites.objects.all()
            for event in events["_embedded"]["events"]:
                event["favourite"] = False
                for fav in favourites:
                    if fav.event_id == event["id"]:
                        event["favourite"] = True
                        break
        except Exception as e:
            return HttpResponse("No Events Found", status=404)

        return JsonResponse(events)


class KeywordSuggestionsAPI(DetailView):
    def get(self, request):
        keyword = request.GET.get("keyword")
        if keyword is None:
            return HttpResponse("Error", status=400)
        url = ticketmaster_url + "suggest?apikey=" + settings.CONSUMER_KEY + "&keyword=" + keyword
        resp = requests.get(url)
        if resp.status_code != 200:
            return HttpResponse("Error calling ticketmaster suggest api", status=500)

        # find list of attractions from json response
        data = resp.json()
        attractions = [ each["name"] for each in data["_embedded"]["attractions"] ]
        return JsonResponse(attractions, safe=False)


class GeoLocationAPI(DetailView):
    def get(self, request):
        remote_addr = request.META['REMOTE_ADDR']
        print(remote_addr)
        url = "https://ipinfo.io/" + remote_addr + "?token=" + settings.IPINFO_TOKEN

        resp = requests.get(url)
        if resp.status_code < 200 or resp.status_code >= 300:
            return HttpResponse("Error calling ipinfo", status=500)

        return JsonResponse(resp.json())

class GetFavouritesAPI(ListAPIView):
    serializer_class = FavouritesSerializer

    def get_queryset(self):
        favourites = Favourites.objects.all()
        return favourites

class CreateFavouritesAPI(CreateAPIView):
    serializer_class = FavouritesSerializer

    def post(self, request):
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return HttpResponse("Error parsing json", status=400)
        serializer = FavouritesSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)



class DeleteFavouritesAPI(DestroyAPIView):
    serializer_class = FavouritesSerializer
    queryset = Favourites.objects.all()
    lookup_field = "event_id"

    def perform_destroy(self, instance):
        instance.delete()



