from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from rest_framework.decorators import APIView ,api_view
from rest_framework.response import Response
from myapp.models import *
from myapp.serializer import *

from rest_framework.permissions import IsAuthenticated,BasePermission,AllowAny
from rest_framework_simplejwt.authentication import JWTAuthentication

import razorpay

# Create your views here.
def index(request):
    return HttpResponse("hi")

class isStafUser(BasePermission):
    def has_permission(self, request, view):
       return request.user and request.user.is_authenticated and request.user.is_staff

class UserRegistrationApi(APIView):
    def post(self,request):
        ser = userserializer(data=request.data)
        if not ser.is_valid():
            return Response({"error":ser.errors,"message":"something went wrong"})
        ser.save()
        return Response(ser.data)

class CategoryApi(APIView):
    authentication_classes=[JWTAuthentication]

    def get_permissions(self):
        if self.request.method in ["POST","PUT","DELETE"]:
            return [IsAuthenticated(),isStafUser()]
        return[AllowAny()]

 
    
    def get(self,request,pk=0):
        if pk==0:
            allcategory = Catageory.objects.all()
            ser = Categoryserializer(allcategory,many = True)

            return Response({"data":ser.data})
        else:
            category = Catageory.objects.get(pk = pk)
            ser = Categoryserializer(category)
            return Response({"data":ser.data})
    
    def post(self, request):
        try:
            ser = Categoryserializer(data = request.data)
            if not ser.is_valid():
                return Response({"error":ser.errors})
            ser.save()
            return Response({"data":ser.data,"message":"cate added"})
        except Exception as e:
                return Response({"error":e,"message":"something went wrong"})

    def put(self,request,pk)    :
        try:
            category = Catageory.objects.get(pk = pk)
            ser = Categoryserializer(category,data =request.data)

            if not ser.is_valid():
                return Response({"error":ser.errors})
            ser.save()
            return Response({"data":ser.data,"mess":"update"})
        except Exception as e:
            return Response({"error":e})  
        
    def delete(self,request,pk):
        try:
            category = Catageory.objects.get(pk=pk)
            category.delete()
            return Response({"msg":"deleted"})
        except Exception as e:
            return Response({"error":str(e),"msg":"something went wrong"})
        
class ProductApi(APIView):

    authentication_classes=[JWTAuthentication]

    def get_permissions(self):
        if self.request.method in ["POST","PUT","DELETE"]:
            return [IsAuthenticated(),isStafUser()]
        return[AllowAny()]


    def get(self,request,pk=0):
        if pk==0:
            allproduct = Product.objects.all()
            ser = Categoryserializer(allproduct,many = True)

            return Response({"data":ser.data})
        else:
            try:
                product = Product.objects.get(pk = pk)
            except Exception as e:
                return Response({"error":str(e),"msg":"id not found"})
            print(product)
            ser = ProductSerializer(product)
            return Response({"data":ser.data})
    
    def post(self, request):
        try:
            ser = ProductSerializer(data = request.data)
            if not ser.is_valid():
                return Response({"error":ser.errors})
            ser.save()
            return Response({"data":ser.data,"message":"cate added"})
        except Exception as e:
                return Response({"error":e,"message":"something went wrong"})

    def put(self,request,pk)    :
        try:
            product = Product.objects.get(pk = pk)
            ser = ProductSerializer(product,data =request.data)

            if not ser.is_valid():
                return Response({"error":ser.errors})
            ser.save()
            return Response({"data":ser.data,"mess":"update"})
        except Exception as e:
            return Response({"error":e})  
        
    def delete(self,request,pk):
        try:
            product = Product.objects.get(pk=pk)
            product.delete()
            return Response({"msg":"deleted"})
        except Exception as e:
            return Response({"error":str(e),"msg":"something went wrong"})
        
class ProductByCategoryAPI(APIView):
    def get(self,request,pk):
        # print("req",request.data)
        # print(pk)
        try:
            products = Product.objects.filter(catageory_id=pk)
            ser = ProductSerializer(products,many=True)
            # if not ser.is_valid():
            # no need to 
            #     return Response({"error":ser.errors,"msg":"something went wrong"})
            
            # print("pro",products)
            return Response(ser.data)
        except Exception as e:
            return Response({"error":str(e),"msg":"something went wrong"})
        
class CartAPI(APIView):

    def get(self,request):
        # print(request.user)
        allcart = Cart.objects.filter(user = request.user)
        ser = Cartserializer(allcart,many=True) 
        return Response({"data":ser.data})
    def post(self,request):
        print(request.user)
        data = request.data
        user = request.user

        data["user"]=user.id
        product = request.data.get("product")
        print(product)


        checkprod = Cart.objects.filter(user=user,product_id = product).exists()
        print(checkprod)
        if checkprod:
            return Response ({"msg":"already exist"})
        ser = Cartserializer(data=request.data)
        if not ser.is_valid():
            return Response({"error":ser.errors,"msg":"something went wrong"})
        ser.save()
        return Response({"data":ser.data})
    
    def delete(self,request,pk):
        print(request.data)
        user = request.user
        try:
            cartdel = Cart.objects.get(product_id=pk ,user=user)
            cartdel.delete()
            return Response({"msg":"deleted"})
        except Cart.DoesNotExist:
            return Response({"msg":"not avalable"})
        

        
class updateqty(APIView):
    def put(self,request,pk):
        data = request.data
        user = request.user
        data["user"] = user.id

        try:

            product = Cart.objects.get(user=user,pk = pk)
            # print(product.quantity)
            data["quantity"] = product.quantity + request.data.get("quantity")
            print(request.data)
            ser = Cartserializer(product,data = request.data,partial=True)
            if not ser.is_valid():
                return Response({"msg":"somthing went wrong"})
            ser.save()
            return Response({"data":ser.data,"msg":"update successfully"})
        except Exception as e:
            return Response({"error":str(e)})
        
def payment(request):
    
    client = razorpay.Client(auth=("rzp_test_hb96I5bWTDSL2g", "IhUR3vRN9EeSBmrcFMJad2gg"))
    data = { "amount": 500, "currency": "INR", "receipt": "order_rcptid_11" }
    payment = client.order.create(data=data) 
    print(payment)
    return JsonResponse("hi")
# class orderAPI(APIView):
