from django.contrib import admin
from django.urls import path

from myapp.views import *

urlpatterns = [
    path("",index,name="index"),
    # path("",home,name="home"),
]
