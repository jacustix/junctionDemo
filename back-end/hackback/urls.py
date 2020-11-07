from django.urls import path

from . import views

urlpatterns = [
    # ex: /hackback/
    path('', views.index, name='index'),
    # ex: /hackback/5/
    path('<int:number>/', views.restaurants, name='detail'),
    # ex: /hackback/all
    path('all', views.restaurants_json, name='detail'),
    # ex: /hackback/postuserdata
    path('postuserdata', views.save_user_data, name='kgkgkg')
]