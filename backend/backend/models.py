from django.db import models

class Favourites(models.Model):
    event_id = models.CharField(max_length=100, primary_key=True)
    date = models.DateTimeField(null=True)
    name = models.CharField(max_length=100, blank=True)
    category = models.CharField(max_length=100, blank=True)
    venue = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.name


