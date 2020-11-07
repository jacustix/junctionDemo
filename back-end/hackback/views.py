from django.http import HttpResponse, JsonResponse, HttpResponseServerError
from django.core import serializers
from .models import Restaurant, Userdata
import json


def index(request):
    return HttpResponse("Hello, welcome in our Junction backend system.")


def restaurants(request, number):
    maxi = Restaurant.objects.exclude(name__exact="").count()
    if number > maxi:
        return HttpResponse("There are no such many restaurants.")
    else:
        list_of_restaurants = Restaurant.objects.exclude(name__exact="").order_by('name')[:number]
        data = serializers.serialize("json", list_of_restaurants)
        return JsonResponse(data, safe=False)


def restaurants_json(request):
    data = serializers.serialize("json", Restaurant.objects.all())
    return JsonResponse(data, safe=False)


def save_user_data(request):
    if request.method == 'POST':
        json_data = json.loads(request.body)
        # try:
        #     data = json_data['data']
        #     # Userdata.create(data)
        # except KeyError:
        #     HttpResponseServerError("Malformed data!")
        HttpResponse("Got json data")
    else:
        HttpResponse("????????")