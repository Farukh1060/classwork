from django.shortcuts import render,HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import APIView,api_view,permission_classes
from myapp.models import *
from myapp.serializer import *
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status 
from django.http import JsonResponse

from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate,login,logout


import razorpay
from myproject import settings

# Create your views here.
def index(request):
    return HttpResponse("hii")
 
@api_view(["POST"])

def UserRegisterApi(request):

   try:
     if request.method == "POST":
        # print(request.POST)
        username = request.POST.get("username")
        email = request.POST.get("email")
        password = request.POST.get("password")

        checkuser = User.objects.filter(username =username).exists()
        if checkuser:
            return JsonResponse({"msg":"user already exist"})
        
        if username and email and password:
          user =  User.objects.create_user(username=username,email=email,password=password)
          user.save()
          return JsonResponse({"msg":"user register successfully"}) 
     
     
     return JsonResponse({"msg":"all feild is require"})
   
   except Exception as e:
    return JsonResponse({"msg":str(e)})
   
@api_view(["GET"])  
@permission_classes([IsAuthenticated])
def LogInUser(request):
    # print(request.user)
    user = request.user
    data = {
        "msg": "Login successful",
        "user": {
            "id": user.id,
            "username": user.username,
            "email": user.email,
        }
    }
    return JsonResponse(data)

def LogOutUser(request):
#    print(request.data)
   logout(request)
   return JsonResponse({"msg":"logout succefully"})


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
    permission_classes = [IsAuthenticated]

    def get(self,request):
        user = request.user
        # print("user",user)
        cart = Cart.objects.filter(user = user )
        # print(cart[0].subtotal)

        ser = Cartserializer(cart,many=True) 
        total = sum(item.subtotal or 0 for item in cart)

        return Response({"data":ser.data,"total":total})
    def post(self,request):
        # print("user",request.user)
        data = request.data
        # print(data)
        productId = data.get("product")
        user = request.user 
        # print(user.username)
        data["user"]=user.id


        checkprod = Cart.objects.filter(product_id = productId,user = user).exists()
        # print(checkprod)
        if checkprod:
            return Response ({"msg":"already exist"})
        ser = Cartserializer(data=request.data)
        if not ser.is_valid():
            return Response({"error":ser.errors,"msg":"something went wrong"})
        ser.save()
        return Response(ser.data)
    
    def delete(self,request,id):

        # print(request.data)
        # print("view",id)
        user = request.user
        try:
            cartdel = Cart.objects.get(id=id ,user=user)
            cartdel.delete()
            return Response(id)
        except Cart.DoesNotExist:
            return Response({"msg":"not avalable"})   


class updateqty(APIView):
    def put(self,request,pk):
        # print("hrrrrr",pk)
        data = request.data.copy()
        quantity = request.data.get("quantity")
      
        user = request.user
        # print(user)
        # data["user"] = user.id

        try:

            cart = Cart.objects.get(pk = pk)
            data["quantity"] = int(quantity)

            subtotal = int (quantity) * int(cart.product.price ) 
            data["subTotall"]= int(subtotal)
            # print(subtotal)
            # print(data)
        
            # print(request.data)
            ser = Cartserializer(cart,data = data,partial=True)
            # print(ser)
            if not ser.is_valid():
                return Response({"msg":ser.errors})
            ser.save()
            return Response({"data":ser.data,"msg":"update successfully"})
        except Exception as e:
            return Response({"error":str(e)})
       

from rest_framework import status

class CreateRazorpayOrder(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user

        # 1️⃣ Calculate total amount from user’s cart
        cart_items = Cart.objects.filter(user=user)
        total_amount = sum(item.quantity * item.product.price for item in cart_items)
        amount_in_paise = total_amount * 100  # Razorpay expects amount in paise

        # 2️⃣ Create Razorpay client
        client = razorpay.Client(
            auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET)
        )

        # 3️⃣ Create order on Razorpay
        order = client.order.create({
            "amount": amount_in_paise,
            "currency": "INR",
            "payment_capture": 1
        })

        return Response({
            "order_id": order["id"],
            "amount": total_amount,
            "currency": "INR",
            "key": settings.RAZORPAY_KEY_ID,
        })

class VerifyRazorpayPayment(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        data = request.data
        client = razorpay.Client(
            auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET)
        )

        try:
            client.utility.verify_payment_signature({
                'razorpay_order_id': data['razorpay_order_id'],
                'razorpay_payment_id': data['razorpay_payment_id'],
                'razorpay_signature': data['razorpay_signature']
            })
            # ✅ Signature verified successfully
            Cart.objects.filter(user=request.user).delete()

            return Response({"status": "Payment Successful"}, status=status.HTTP_200_OK)
        except razorpay.errors.SignatureVerificationError:
            return Response({"error": "Invalid Signature"}, status=status.HTTP_400_BAD_REQUEST)
