from django.db import models

# Create your models here.
class user(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    phoneNumber = models.CharField(max_length=100)
    def __str__(self):
        return self.name

class product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    def __str__(self):
        return self.name