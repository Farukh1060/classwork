from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Catageory(models.Model):
    name = models.CharField(max_length=20,unique=True)
    description = models.CharField(max_length=30)
    catageory_image = models.ImageField(upload_to="catag_img",null=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    name=models.CharField(max_length=20)
    description = models.TextField()
    price = models.FloatField()
    stock = models.PositiveIntegerField(default=0)
    image = models.ImageField(upload_to="product_img",null=True,blank=True)
    catageory = models.ForeignKey(Catageory,on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    


class Cart(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username

    