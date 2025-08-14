
from django.urls import path
from myapp.views import *
from django.conf import settings
from django.conf.urls.static import static
from myapp.views import *
from rest_framework_simplejwt.views import(
    TokenObtainPairView,
    TokenRefreshView
)


urlpatterns = [
    path("",index,name="index"),

    path("register",UserRegistrationApi.as_view(), name = "user_registration"),

    path("category",CategoryApi.as_view(),name="category-list"),
    path("category/<int:pk>",CategoryApi.as_view(),name="category-list"),

    path("product",ProductApi.as_view(),name="product-list"),
    path("product/<int:pk>",ProductApi.as_view(),name="product-list"),

    path("product/category/<int:pk>",ProductByCategoryAPI.as_view(),name="productbycategory"),

    path("cart",CartAPI.as_view(),name="cart_list"),
    path("cart/<int:pk>/",CartAPI.as_view()),

    path("cart/quantity/<int:pk>",updateqty.as_view(),name="changeqty"),

    path("token/", TokenObtainPairView.as_view(),name="Token_Obtain_PairView"),
    path("token/refresh", TokenRefreshView.as_view(),name="token_refresh"),



]
urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT
)