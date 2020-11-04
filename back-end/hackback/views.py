from django.http import HttpResponse, JsonResponse
from django.core import serializers
from .models import Restaurant


def index(request):
    return HttpResponse("Hello, welcome in our Junction backend system.")


def restaurants(request, number):
    maxi = Restaurant.objects.exclude(name__exact="").count()
    if number > maxi:
        return HttpResponse("There are no such many restaurants.")
    else:
        list_of_restaurants = Restaurant.objects.exclude(name__exact="").order_by('name')[:number]
        output = "<b>Alphabetically {} first restaurants:<br></b>".format(min(number, maxi))
        output += '<br>'.join([q.name for q in list_of_restaurants])
        return HttpResponse(output)


def restaurants_json(request):
    data = serializers.serialize("json", Restaurant.objects.all())
    return JsonResponse(data, safe=False)
