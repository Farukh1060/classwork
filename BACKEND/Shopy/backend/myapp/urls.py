
from django.urls import path,include
from myapp.views import *
from myproject import settings
from django.conf.urls.static import static

from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView

urlpatterns = [
    path("UserRegister/",UserRegisterApi,name="UserRegisterApi"),
    path("LogInUser/",LogInUser,name="LogInUser"),
    path("LogOutUser/",LogOutUser,name="LogOutUser"),
    path("category/",CategoryApi.as_view(),name="category"),
    path("product/",ProductApi.as_view(),name="product-list"),
    path("cart/",CartAPI.as_view(),name="cart_list"),
    path("cart/<int:id>",CartAPI.as_view(),name="cart_list"),
    path("cart/quantity/<int:pk>",updateqty.as_view(),name="changeqty"),
    
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path("api/create-order/", CreateRazorpayOrder.as_view(), name="create-order"),
    path("api/verify-payment/", VerifyRazorpayPayment.as_view(), name="verify-payment"),

]
urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT
)