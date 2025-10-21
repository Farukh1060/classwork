
from django.urls import path,include
from myapp.views import *
from myproject import settings
from django.conf.urls.static import static

urlpatterns = [
    path("category/",CategoryApi.as_view(),name="category"),
    path("product/",ProductApi.as_view(),name="product-list"),
]
urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT
)