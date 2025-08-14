from django.shortcuts import render
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.models import User

from rest_framework.decorators import api_view,APIView
from rest_framework.response import Response
from rest_framework import status
from myapp.serializer import *
from myapp.models import *

from rest_framework.permissions import AllowAny 


# Create your views here.

def home(request):
    return render(request, 'index.html')


# create view for accounts

def accounts(request):
    return render(request, 'accounts.html')


# cart

def cart(request):
    return render(request, 'cart.html')


# checkout

def checkout(request):
    return render(request, 'checkout.html')


# details

def details(request):
    return render(request, 'details.html')

# login-regiter

def login_register(request):
    return render(request, 'login-register.html')

# shop

def shop(request):
    return render(request,'shop.html')

def register_user(request):
    # User registration logic here
    if request.method == "POST":
        data = request.POST
        username = request.POST.get("username")
        email = request.POST.get("email")
        password = request.POST.get("password")
        if username and email and password:
            user = User.objects.create_user(username=username,email=email,password=password)
            user.save()
            return render(request, 'login-register.html',{"msg":"registration sucessfully"})
    return render(request, 'login-register.html')

def login_user(request):
    # User login logic here
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(request,username=username,password=password)

        if user is not None:
            login(request ,user)    
            return render(request,"index.html",{"msg":"login succesuffy"})
        else:
            return render(request,"login-register.html",{"msg":"invalide password"})

    return render(request, 'login-register.html')


def logout_user(request):
    logout(request)
    return render(request,"login-register.html",{"msg":"logout successfully"})



class CategoriesAPI(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        # print(request)
        categories = Category.objects.all()
        # print("hi",categories)
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)


class ProductAPI(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    # def post(self, request):
    #     serializer = ProductSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # def put(self, request, pk):
    #     product = Product.objects.get(pk=pk)
    #     serializer = ProductSerializer(product, data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # def delete(self, request, pk):
    #     product = Product.objects.get(pk=pk)
    #     product.delete()
    #     return Response(status=status.HTTP_204_NO_CONTENT)


class addtocartAPI(APIView):
    permission_classes = [AllowAny]
    def get(self,request):
        pid = request.GET["pid"]
        cart = Cart.objects.get(id=pid)
        print(cart)
        ser = CartSerializer(data = cart,many=True)
        # print(request.GET["pid"])

        if not ser.is_valid():
            print(ser.data)
            return Response({"error":ser.errors})
        
        return Response(ser.data)
   


