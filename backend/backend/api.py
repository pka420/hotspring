from django.utils import timezone
from django.views.generic.detail import DetailView
from django.http import HttpResponse, JsonResponse
from django.conf import settings
import json
import os
import requests

ticketmaster_url = "https://app.ticketmaster.com/discovery/v2/"

class TicketMasterAPI(DetailView):
    def get(self, request):
        data = {}
        for item, value in query_params.items():
            data[item] = value

        print(data)

        print(settings.CONSUMER_KEY)
        url = ticketmaster_url + "/discovery/v2/events"

        url += "?apikey=" + settings.CONSUMER_KEY
        return HttpResponse("Hello, world. You're at the polls index.")


class KeywordSuggestionsAPI(DetailView):
    def get(self, request):
        keyword = request.GET.get("keyword")
        print(keyword)
        if keyword is None:
            return HttpResponse("Error", status=400)
        print(settings.CONSUMER_KEY)
        url = ticketmaster_url + "suggest?apikey=" + settings.CONSUMER_KEY + "&keyword=" + keyword
        print(url)
        resp = requests.get(url)
        if resp.status_code != 200:
            print(resp.status_code)
            print(resp.json())
            return HttpResponse("Error", status=500)

        # find list of attractions from json response
        data = resp.json()
        attractions = [ each["name"] for each in data["_embedded"]["attractions"] ]
        print(attractions)
        return JsonResponse(attractions, safe=False)


class GeoLocationAPI(DetailView):
    def get(self, request):
        remote_addr = request.META['REMOTE_ADDR']
        print(remote_addr)
        print(settings.IPINFO_TOKEN)
        url = "https://ipinfo.io/" + remote_addr + "?token=" + settings.IPINFO_TOKEN

        resp = requests.get(url)
        if resp.status_code != 200:
            # This means something went wrong.
            print(resp.status_code)
            return HttpResponse("Error", status=500)

        print(resp.json())
        return JsonResponse(resp.json())

class FavouritesAPI(DetailView):
    def get(self, request ):
        return HttpResponse("Hello, world. You're at the polls index.")



