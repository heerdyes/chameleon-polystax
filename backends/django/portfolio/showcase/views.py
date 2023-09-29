from django.http import HttpResponse
from django.http import JsonResponse
from django.template import loader
from .models import *
from django.core.exceptions import PermissionDenied
import json


def homepage(rq):
    tmpl = loader.get_template('showcase/index.html')
    return HttpResponse(tmpl.render({}, rq))


def getphones(rq):
    allphones = Smartphone.objects.all()
    plst = []

    for phone in allphones:
        pd = {
            'id': phone.id,
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
    if rq.method != 'POST':
        raise PermissionDenied()
    print('---> adding phone...')
    phone = json.loads(rq.body)
    print(phone)
    p0 = Smartphone(brandname=phone['brand'],
                    opersys=phone['os'],
                    price=phone['price'])
    p0.save()
    p0json = {
        'id': p0.id,
        'brand': p0.brandname,
        'os': p0.opersys,
        'price': p0.price
    }
    return JsonResponse(p0json)


def deletephone(rq, phid):
    rsp = {'success': True, 'error': ''}
    try:
        print('phid = ', phid)
        targetphone = Smartphone.objects.get(id=phid)
        targetphone.delete()
    except Smartphone.DoesNotExist as e:
        print(e)
        rsp = {'success': False, 'error': str(e)}
    return JsonResponse(rsp)


def updatephone(rq, phid):
    if rq.method != 'PUT':
        raise PermissionDenied
    try:
        print('phid = ', phid)
        phone = json.loads(rq.body)
        targetphone = Smartphone.objects.get(id=phid)
        # map json attrs to object attrs
        targetphone.brandname = phone['brand']
        targetphone.opersys = phone['os']
        targetphone.price = phone['price']
        # do not forget to save it
        targetphone.save()
        phone['id'] = targetphone.id
    except Smartphone.DoesNotExist as e:
        print(e)
        return JsonResponse({'success': False, 'error': str(e)})
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
