from django.db import models

# Create your models here.
class Catageory(models.Model):
    name = models.CharField(max_length=20,unique=True)
    description = models.CharField(max_length=30)
    catageory_image = models.ImageField(upload_to="catag_img",null=True)

    def __str__(self):
        return self.name 