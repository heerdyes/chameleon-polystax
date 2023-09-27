from django.http import HttpResponse
from django.http import JsonResponse
from django.template import loader
from .models import *
import json


def homepage(rq):
    tmpl = loader.get_template('showcase/index.html')
    return HttpResponse(tmpl.render({}, rq))


def getphones(rq):
    allphones = Smartphone.objects.all()
    plst = []

    for phone in allphones:
        pd = {
            'brand': phone.brandname,
            'os': phone.opersys,
            'price': phone.price
        }
        plst.append(pd)

    result = {
        'phonedata': plst
    }
    return JsonResponse(result)


def addphone(rq):
    print('---> adding phone...')
    phone = json.loads(rq.body)
    print(phone)
    p0 = Smartphone(brandname=phone['brand'],
                    opersys=phone['os'],
                    price=phone['price'])
    p0.save()
    return JsonResponse(phone)


def getlaptops(rq):
    laptops = Laptop.objects.all()
    plst = []

    for laptop in laptops:
        pd = {
            'brand': laptop.brandname,
            'os': laptop.opersys,
            'price': laptop.price
        }
        plst.append(pd)

    result = {
        'laptopdata': plst
    }
    return JsonResponse(result)
