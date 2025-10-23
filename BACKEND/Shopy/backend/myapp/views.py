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
    

class CartAPI(APIView):

    def get(self,request):
        # print(request.user)
        allcart = Cart.objects.all()
        ser = Cartserializer(allcart,many=True) 
        return Response({"data":ser.data})
    def post(self,request):
        print(request.data)
        data = request.data
       
        # user = request.user 
       

        print(request.data)
        # print(checkprod)

        # data["user"]=user.id
        # product = request.data.get("product")
        # print(product)


        # checkprod = Cart.objects.filter(product_id = product).exists()
        # print(checkprod)
        # if checkprod:
        #     return Response ({"msg":"already exist"})
        ser = Cartserializer(data=request.data)
        if not ser.is_valid():
            return Response({"error":ser.errors,"msg":"something went wrong"})
        ser.save()
        return Response({"data":ser.data})
    
    # def delete(self,request,pk):
    #     print(request.data)
    #     user = request.user
    #     try:
    #         cartdel = Cart.objects.get(product_id=pk ,user=user)
    #         cartdel.delete()
    #         return Response({"msg":"deleted"})
    #     except Cart.DoesNotExist:
    #         return Response({"msg":"not avalable"})   