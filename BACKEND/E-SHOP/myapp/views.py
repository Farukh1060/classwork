from django.shortcuts import render 
from django.http import HttpResponse

# Create your views here.

def home(request):
    return render(request, "index.html")


def shop(request):
    return render(request, "shop.html")

def account(request):
    return render(request,"accounts.html")

def logout_user(request):
    return render(request,"login-register.html")

def login_user(request):
    return render(request,"login-register.html")

def register_user(request):
    return render(request,"login-register.html")

def login_register(request):
    return render(request,"login-register.html")

def cart(request):
    return render(request,"cart.html")