from rest_framework import serializers
from myapp.models import *
from django.contrib.auth.models import User

class userserializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("username","password","email")
        extra_kwargs = {"password":{"write_only":True}}
    
    def create(self, validated_data):
        user =User.objects.create_user(**validated_data)
        return user

class Categoryserializer(serializers.ModelSerializer):
    class Meta:
        model = Catageory
        fields = "__all__"

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep["catageory"]= Categoryserializer(instance.catageory).data
        return rep
    

class Cartserializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields ="__all__"
    def to_representation(self, instance):
        rep = super().to_representation(instance)
        # rep["user"]=userserializer(instance.user).data
        rep["product"]=ProductSerializer(instance.product).data
        return rep
    
class Orderserializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ["id","user","total_price","created_at"]
        
    def to_representation(self, instance):
      rep = super().to_representation(instance)
    #   print(instance)
      rep["user"] =userserializer(instance.user).data
      rep["myorder"] =Order_itemserializer(instance.myorder.all(),many = True).data
      return rep
    
      
class Order_itemserializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = "__all__"
    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep["product"] = ProductSerializer(instance.product).data
        return rep