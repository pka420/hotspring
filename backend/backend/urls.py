from django.urls import path
from .api import TicketMasterAPI, GeoLocationAPI, \
            FavouritesAPI, KeywordSuggestionsAPI

urlpatterns = [
    path('ticketmaster', TicketMasterAPI.as_view(), name="ticketmaster"),
    path('keyword-suggestions/', KeywordSuggestionsAPI.as_view(), name="keywordSuggestions"),
    path('geo-location', GeoLocationAPI.as_view(), name="geoLocation"),
    path('favourites', FavouritesAPI.as_view(), name="favourites"),
]
