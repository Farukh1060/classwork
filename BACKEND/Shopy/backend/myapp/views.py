from django.shortcuts import render,HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import APIView
from myapp.models import *
from myapp.serializer import *

# Create your views here.
def index(request):
    return HttpResponse("hii")


class CategoryApi(APIView):

 
    
    def get(self,request,pk=0):
        if pk==0:
            allcategory = Catageory.objects.all()
            print(allcategory)
            ser = Categoryserializer(allcategory,many = True)

            return Response({"data":ser.data})
        else:
            category = Catageory.objects.get(pk = pk)
            ser = Categoryserializer(category)
            return Response({"data":ser.data})
class ProductApi(APIView):

    def get(self,request,pk=0):
        if pk==0:
            allproduct = Product.objects.all()
            ser = ProductSerializer(allproduct,many = True)
            # print(ser.data)
            return Response({"data":ser.data})
        else:
            try:
                product = Product.objects.get(pk = pk)
            except Exception as e:
                return Response({"error":str(e),"msg":"id not found"})
            # print(product)
            ser = ProductSerializer(product)
            return Response({"data":ser.data})
    

   