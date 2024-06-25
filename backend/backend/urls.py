from django.urls import path
from .api import TicketMasterAPI, GeoLocationAPI, \
            GetFavouritesAPI, CreateFavouritesAPI, \
            KeywordSuggestionsAPI, DeleteFavouritesAPI

urlpatterns = [
    path('events', TicketMasterAPI.as_view(), name="ticketmaster"),
    path('keyword-suggestions', KeywordSuggestionsAPI.as_view(), name="keywordSuggestions"),
    path('geo-location', GeoLocationAPI.as_view(), name="geoLocation"),
    path('favourites', GetFavouritesAPI.as_view(), name="favourites"),
    path('create-favourites', CreateFavouritesAPI.as_view(), name="create-favourites"),
    path('delete-favourites/<event_id>', DeleteFavouritesAPI.as_view(), name="delete-favourites"),
]
