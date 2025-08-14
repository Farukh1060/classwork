from rest_framework import serializers
from myapp.models import *


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
    
    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep['category'] = CategorySerializer(instance.category).data
        return rep

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = "__all__"
    def to_representation(self, instance):
        rep= super().to_representation(instance)
        rep["product"]=ProductSerializer(instance.product).data
        return rep



class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

    def to_internal_value(self, data):
        rep = super().to_internal_value(data)
        rep['user'] = User.objects.get(id=data['user'])
        rep['product'] = Product.objects.get(id=data['product'])
        return rep
    

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order_item
        fields = '__all__'

        def to_representation(self, instance):
            rep = super().to_representation(instance)
            rep['order'] = OrderSerializer(instance.order).data
            rep['product'] = ProductSerializer(instance.product).data
            return rep

    

    
        

   