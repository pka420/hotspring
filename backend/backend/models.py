from django.db import models

class Favourites(models.Model):
    name = models.CharField(max_length=100)
    date = models.DateTimeField()
    location = models.CharField(max_length=100)
    description = models.TextField()
    url = models.URLField(max_length=200)

    def __str__(self):
        return self.name


