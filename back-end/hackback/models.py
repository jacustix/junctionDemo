from django.db import models
from jsonfield import JSONField


class Restaurant(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        managed = False
        db_table = "restaurants"

    def __str__(self):
        return self.name


class Userdata(models.Model):
    info = JSONField()

    class Meta:
        managed = False
        db_table = "userdata"

    @classmethod
    def create(cls, info_json):
        userdata = cls(info=info_json)
        return userdata


Restaurant.objects = Restaurant.objects.using('rest')
