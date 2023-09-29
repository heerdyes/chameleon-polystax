from django.db import models


class Smartphone(models.Model):
    brandname = models.CharField(max_length=40)
    opersys = models.CharField(max_length=30)
    price = models.FloatField()

    def __str__(self):
        return '%s: %s, %f'%(self.brandname, self.opersys, self.price)

class Laptop(models.Model):
    brandname = models.CharField(max_length=80)
    modelname = models.CharField(max_length=100)
    screensize = models.FloatField()
    colour = models.CharField(max_length=50)
    cpumodel = models.CharField(max_length=50)
    raminst = models.IntegerField()
    specialfeature = models.CharField(max_length=40)
    opersys = models.CharField(max_length=50)
    gpustyle = models.CharField(max_length=30)
    gpu = models.CharField(max_length=50)
    price = models.FloatField()

    def __str__(self):
        return '%s: %s, %f'%(self.brandname, self.opersys, self.price)
