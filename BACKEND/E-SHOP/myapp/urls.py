from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from myapp.views import *

urlpatterns = [
    path("",home,name="home"),
    path("shop/",shop,name="shop"),
    path("account/",account,name="account"),
    path("cart/",cart,name="cart"),

    path("register_user/",register_user,name="register_user"),
    path("login_user/",login_user ,name="login_user"),
    path("logout_user/",logout_user,name="logout_user"),
    
    # path("login-register/",login_register,name="login-register"),




]
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,document_root = settings.STATIC_ROOT)