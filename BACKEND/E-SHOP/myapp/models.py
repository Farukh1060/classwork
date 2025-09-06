from django.db import models

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
