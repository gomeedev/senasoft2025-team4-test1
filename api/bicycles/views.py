from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Bicycle
from .serializers import BicycleSerializer

class BicycleViewSet(viewsets.ModelViewSet):
    queryset = Bicycle.objects.all()
    serializer_class = BicycleSerializer
