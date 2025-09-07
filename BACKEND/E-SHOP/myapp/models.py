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
    price = models.DecimalField(max_digits=10, decimal_places=2,default=0)
    stock = models.PositiveIntegerField(default=0)
    Catg = models.ForeignKey(Category,on_delete=models.CASCADE)

class Cart(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    def subtotal(self):
        return self.quantity*self.product.price