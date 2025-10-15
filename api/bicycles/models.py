from django.db import models

# Create your models here.
class Bicycle(models.Model):
    name = models.CharField(max_length=100)
    lat = models.FloatField()
    lng = models.FloatField()
    is_available = models.BooleanField(default=True)

    def __str__(self):
        return self.name
