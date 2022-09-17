from django.shortcuts import render

from rest_framework import viewsets
from API.models import user
from API.serializers import userSerializer


# Create your views here.

class userViewSet(viewsets.ModelViewSet):
    queryset = user.objects.all()
    serializer_class = userSerializer