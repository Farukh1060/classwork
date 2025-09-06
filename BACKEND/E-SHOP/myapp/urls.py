from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from myapp.views import *

urlpatterns = [
    path("",home,name="home"),
    path("shop/",shop,name="shop"),
    path("account/",account,name="account"),

    path("register_user/",register_user,name="register_user"),
    path("login_user/",login_user ,name="login_user"),
    path("logout_user/",logout_user,name="logout_user"),

    path("category/",category,name="category"),
    path("product/",product,name="product"),
    
    path("cart/",cart,name="cart"),
    # path("login-register/",login_register,name="login-register"),




]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,document_root = settings.MEDIA_ROOT)