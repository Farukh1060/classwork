from django.contrib import admin
from myapp.models import *

class Productadmin(admin.ModelAdmin):
    list_display=["name"]
    

class CategoryAdmin(admin.ModelAdmin):
    list_display=["name"]





# Register your models here.

admin.site.register(Product,Productadmin)
admin.site.register(Category,CategoryAdmin)
admin.site.register(Cart)
admin.site.register(Order)
admin.site.register(Order_item)
