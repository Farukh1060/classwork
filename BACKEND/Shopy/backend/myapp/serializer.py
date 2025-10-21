from rest_framework import serializers
from myapp.models import *


class Categoryserializer(serializers.ModelSerializer):
    class Meta:
        model = Catageory
        fields = "__all__"