from django.http import HttpResponse
from django.shortcuts import redirect

tmpbios = []

def index(request):
  return HttpResponse('<h3>welcome!</h3><a href="showbios">update bio</a>')

def showbios(request):
  print(request.headers)
  biolist = '<ul>'
  for b in tmpbios:
    biolist += f'<li>{b}</li>'
  biolist += '</ul>'
  biodiv = f'<div> {biolist} </div>'
  biotext = f'<textarea id="biotext" name="biotext" rows=8 cols=30 placeholder="insert bio here"></textarea>'
  subbtn = "<input type='submit' value='post'>"
  bioform = f'<form method="get" action="savebio"> {biotext} {subbtn} </form>'
  hdng = "<h2>welcome to the showcase!</h2>"
  phead = '<head><title>showcase</title></head>'
  pbody = f'<body> {hdng} {biodiv} {bioform} </body>'
  htmlpage = f'<html> {phead} {pbody} </html>'
  return HttpResponse(htmlpage)


def savebio(request):
  cbio = request.GET.get('biotext')
  tmpbios.append(cbio)
  return redirect('/showcase/showbios')

