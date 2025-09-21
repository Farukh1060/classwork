from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Category(models.Model):
    categoryName = models.CharField(max_length=25)
    categoryDesc = models.TextField(max_length=100)
    categoryImage = models.ImageField(upload_to="category/",null=True)

    def __str__(self):
        return self.categoryName
    

class Product(models.Model):
    Name = models.CharField(max_length=25)
    Desc = models.TextField(max_length=100)
    Image = models.ImageField(upload_to="product/",null=True)
    price = models.FloatField()
    stock = models.PositiveIntegerField(default=0)
    Catg = models.ForeignKey(Category,on_delete=models.CASCADE)
    def __str__(self):
        return self.Name

class Cart(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    def subtotal(self):
        return self.quantity*self.product.price
    
class Order(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    total_price = models.FloatField()
    is_paid = models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now=True)

    
    

class OrderItem(models.Model):
    order = models.ForeignKey(Order,on_delete=models.CASCADE)
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    price = models.FloatField()

         
    

# store payment detail in db

class Payment(models.Model):
    orderId = models.CharField(max_length=100,unique=True)
    paymentId = models.CharField(max_length=100,blank=True,null=True)
    signature = models.CharField(max_length=255,blank=True,null=True)
    amount = models.IntegerField()
    status = models.CharField(max_length=50,default="created")
    created_at = models.DateTimeField(auto_now_add=True)