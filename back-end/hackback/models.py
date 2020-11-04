from django.db import models


class Restaurant(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        managed = False
        db_table = "restaurants"

    def __str__(self):
        return self.name


Restaurant.objects = Restaurant.objects.using('rest')
