from django.db import models


class Smartphone(models.Model):
    brandname = models.CharField(max_length=40)
    opersys = models.CharField(max_length=30)
    price = models.FloatField()

    def __str__(self):
        return '%s: %s, %f'%(self.brandname, self.opersys, self.price)

class Laptop(models.Model):
    brandname = models.CharField(max_length=80)
    opersys = models.CharField(max_length=50)
    price = models.FloatField()

    def __str__(self):
        return '%s: %s, %f'%(self.brandname, self.opersys, self.price)
