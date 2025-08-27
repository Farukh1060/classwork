from django.contrib import admin
from myapp.models import *
# Register your models here.

admin.site.register(Catageory)
admin.site.register(Product)
admin.site.register(Cart)
admin.site.register(Order)
admin.site.register(OrderItem)