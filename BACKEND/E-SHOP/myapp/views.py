from django.shortcuts import render 
from django.http import HttpResponse

from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout

# Create your views here.

def home(request):
    return render(request, "index.html")


def shop(request):
    return render(request, "shop.html")

def account(request):
    return render(request,"accounts.html")

def logout_user(request):
    return render(request,"login-register.html")

# def login_register(request):
#     return render(request,"login-register.html")


def register_user(request):

   try:
     if request.method == "POST":
        # print(request.POST)
        username = request.POST.get("username")
        email = request.POST.get("email")
        password = request.POST.get("password")
        
        if username and email and password:
          user =  User.objects.create_user(username=username,email=email,password=password)
          user.save()
          return render(request,"login-register.html",{"msg":"user register successfully"})
     
     
     return render(request,"login-register.html",{"msg":"all feild is require"})
   
   except Exception as e:
    return render(request,"login-register.html",{"msg":str(e)})

def login_user(request):
    if request.method == "POST":
       print(request.POST)
       username = request.POST.get("username")
       password = request.POST.get("password")
       user = authenticate(request,username=username,password=password)

       if user is not None:
          login(request,user)
          return render(request,"index.html")

       
    return render(request,"login-register.html")

def logout_user(request):
    logout(request)
    return render(request,"login-register.html")

def catageory(request):
   
   return render(request,"index.html")

def cart(request):
    return render(request,"cart.html")