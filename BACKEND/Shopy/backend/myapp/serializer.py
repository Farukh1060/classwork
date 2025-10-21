from rest_framework import serializers
from myapp.models import *


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