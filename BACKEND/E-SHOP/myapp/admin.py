from django.contrib import admin
from myapp.models import *


class adminCategory(admin.ModelAdmin):
    list_display = ("categoryName","categoryDesc","categoryImage")
    search_fields=("categoryName",)

class adminProduct(admin.ModelAdmin):
    list_display = ("Name",)
    search_fields=("Name",)

class adminPayment(admin.ModelAdmin):
    list_display = ("orderId","amount","status")
    search_fields=("orderId",)

class adminCart(admin.ModelAdmin):
    list_display = ("user","get_product_name","quantity")
    search_fields=("user",)

    def get_product_name(self, obj):
        # print(obj)
        return obj.product.Name  # or any other field
    get_product_name.short_description = "Product Name"

class adminOrder(admin.ModelAdmin):
    list_display = ("user","total_price",)
    search_fields=("user","total_price")

class adminOrderItem(admin.ModelAdmin):
    list_display = ("get_order_name","quantity",)
    search_fields=("usorderer",)

    def get_order_name(self, obj):
        # print(obj)
        return obj.product.Name  # or any other field
    get_order_name.short_description = "order items"


# Register your models here.
admin.site.register(Category,adminCategory)
admin.site.register(Product,adminProduct)
admin.site.register(Cart,adminCart)
admin.site.register(Payment,adminPayment)
admin.site.register(Order,adminOrder)
admin.site.register(OrderItem,adminOrderItem)
