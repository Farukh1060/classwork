from django.shortcuts import render ,redirect
from django.http import HttpResponse,JsonResponse

from django.contrib.auth.decorators import login_required

from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout

from myapp.models import *
import razorpay
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt

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
        # print(request.user.id)
        total=0
        for item in allcartitem:
           total += (item.product.price * item.quantity)
        
        return render(request,"cart.html",{"allcartitem":allcartitem,"total":total})  
      else:
        
         return redirect("login-register.html") 
    except Exception as e:
       return JsonResponse({"error":str(e)})
    
from decimal import Decimal
def changeqty(request):
  #  print(request.GET.get("qty"))
  #  print(request.GET.get("cid"))
  #  print(request.user)

   qty =int(request.GET.get("qty"))
   cid =request.GET.get("cid")

   user = request.user
   if user.is_authenticated:
      allcartitem = Cart.objects.filter(user=user)
      cart = Cart.objects.get(user=user,pk=cid)
      # print(allcart.__dict__)
      cart.quantity=qty
      cart.save()

      # print(type(cart.quantity))
      # print(type(cart.product.price))
      subtotal = (cart.quantity) * cart.product.price

      total=0
      for item in allcartitem:
         total += (item.product.price * item.quantity)
      
      return JsonResponse({"subtotal":subtotal,"total":total})
   return HttpResponse("quantity change")
   
    
def delete(request):
   cid = request.GET["cid"]
   user = request.user
   cart = Cart.objects.get(user=user,pk=cid)
   cart.delete()
   return HttpResponse("cart deleted")


client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))
def payment(request):

   # local order
   mycart = Cart.objects.filter(user=request.user)
   # print(mycart[0].__dict__)

   myorder = Order.objects.create(user = request.user,total_price=0)
   total_price = 0
   for items in mycart:
      total_price += items.quantity * items.product.price
      # print(items.product)
      OrderItem.objects.create(order = myorder,product=items.product,quantity = items.quantity,price = items.product.price)
   myorder.total_price = total_price
   myorder.save()   
   mycart.delete()


   # razorpay
   DATA = {
      "amount": total_price *100,
      "currency": "INR",
      "receipt": "receipt#1",
      "notes": {
         "key1": "value3",
         "key2": "value2"
      }
   }
   order = client.order.create(data=DATA)  #This hits Razorpay's API to create an order on their server.
   # print("pay",order["id"])
   # save to ds

   payment = Payment.objects.create(orderId = order["id"],amount = order["amount"],status = order["status"])
   return JsonResponse(order)



@csrf_exempt
def verify_payment(request):
    if request.method == "POST":
        data = request.POST
        try:
            params_dict = {
                'razorpay_order_id': data['razorpay_order_id'],
                'razorpay_payment_id': data['razorpay_payment_id'],
                'razorpay_signature': data['razorpay_signature']
            }

            client.utility.verify_payment_signature(params_dict)
            payment = Payment.objects.get(orderId =data['razorpay_order_id'] )
            payment.paymentId = data['razorpay_payment_id']
            payment.signature = data['razorpay_signature']
            payment.status = "paid"
            payment.save()
            
            # print("verify",payment)
            # print(payment.__dict__)


            return JsonResponse({'status': 'Payment Verified'})
        except razorpay.errors.SignatureVerificationError:
            print("fail")
            payment = Payment.objects.get(orderId =data['razorpay_order_id'] )
            payment.status = "Failed"
            payment.save()
            return JsonResponse({'status': 'Payment Failed'}, status=400)
