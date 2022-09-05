from http.client import HTTPResponse
from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from .models import Pages
from django.contrib.auth.models import User, Group
from django.core.serializers import serialize
from .serializers import PagesSerializer, UserSerializer, GroupSerializer
from rest_framework import viewsets
from rest_framework import permissions
import json

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]



class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

class PagesView(viewsets.ModelViewSet):  
    serializer_class = PagesSerializer   
    queryset = Pages.objects.all() 

def index(request):
    pages = Pages.objects.all()
    return render(request, 'pages.html', {"pages":pages})

def addPage(request):
    return render(request, 'index.html')

def savePage(request):
    if(request.method=='POST'):
        html = request.POST['html']
        css = request.POST['css']
        page = Pages.objects.create(name="untitled", html=html, css=css)
        page.save()
    return JsonResponse({
        "result": (json.loads.serialize('json', [page]))[0]
    })

def editPage (request, id):
    page = Pages.objects.get(pk=id)
    return render(request, 'index.html', {"page": page})

def editPageContent (request, id):
    if(request.method=='POST'):
        html = request.POST['html']
        css = request.POST['css']
        page = Pages.objects.get(pk=id)
        page.html = html
        page.css = css
        page.save()
    return JsonResponse({
        "result": (json.loads.serialize('json', [page]))[0]
    })


def deletePage(request, id):
    page = Pages.objects.get(pk=id)
    if page is None:
        print("page not found")
    page.delete()

    return JsonResponse({
        "success": True,
        "deleted": id
    })
def previewPage (request, id):
    page = Pages.objects.get(pk=id)
    return render(request, 'preview.html', {"page": page})

