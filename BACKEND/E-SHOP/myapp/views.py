from django.shortcuts import render ,redirect
from django.http import HttpResponse,JsonResponse

from django.contrib.auth.decorators import login_required

from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout

from myapp.models import *

# Create your views here.

def home(request):
    return render(request, "index.html")


def shop(request):
    return render(request, "shop.html")

def account(request):
    return render(request,"accounts.html")

def logout_user(request):
    return render(request,"login-register.html")




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

       
    return render(request,"login-re`gister.html")

def logout_user(request):
    logout(request)
    return render(request,"login-register.html")

def category(request):
   try:
      allcategory = Category.objects.values()
    #   print(allcategory)
      return JsonResponse({"allcategory":list(allcategory)})
   except Exception as e :
     return JsonResponse({"error":str(e)})
   
def product(request):
   try:
      allproduct = Product.objects.values("Catg", "Catg_id", "Desc", "Image", "Name", "id", "price", "stock","Catg__categoryName")
      # print(allproduct)
      return JsonResponse({"allproduct":list(allproduct)})
   except Exception as e :
     return JsonResponse({"error":str(e)})
   

def addtocart(request):
  try:
  #  print("pid",request.GET.get("pid"))

   pid = request.GET.get("pid")
   user = request.user
  #  print(user)

   if user.is_anonymous:
    return HttpResponse(user)
   else:
    product=Product.objects.get(pk = pid)
    #  print(product.__dict__)

    cart = Cart.objects.all()

    cartitem,created = cart.get_or_create(user=user,product = product)
    #  print(cartitrem)
    #  print(created)

    if created:
      return HttpResponse("New cart created.")
    else:
       return HttpResponse("Cart already existed.")
   
  except Exception as e:
     print("error",e)
     return JsonResponse({"error":str(e)})
     


   
def login_register(request):
  return render(request,"login-register.html")


@login_required(login_url="/login_register/")
def cart(request):
    user = request.user
    try:
        
      if user.is_authenticated:
        allcartitem = Cart.objects.filter(user=user)

        # print(allcartitem[0].__dict__)
        # print("hi")
        # print(request.user.id)
    

        return render(request,"cart.html",{"allcartitem":allcartitem})  
      else:
         print('rdd')
         return redirect("login-register.html") 
    except Exception as e:
       return JsonResponse({"error":str(e)})
    
