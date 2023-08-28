from django.urls import path
from . import views


urlpatterns = [
  path("", views.index, name="index"),
  path("showbios", views.showbios, name="showbios"),
  path("savebio", views.savebio, name="savebio"),
]

