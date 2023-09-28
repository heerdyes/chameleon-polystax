from django.urls import path
from . import views

urlpatterns = [
    path('', views.homepage),
    path('getphones', views.getphones),
    path('addphone', views.addphone),
    path('getlaptops', views.getlaptops),
    path('deletephone/<int:phid>', views.deletephone),
]
