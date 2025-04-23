from rest_framework.response import Response
from django.shortcuts import path,render

def home(request):
    return render(request,'home.html')