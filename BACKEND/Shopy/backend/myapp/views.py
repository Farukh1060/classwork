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
    
   