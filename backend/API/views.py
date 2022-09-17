from rest_framework import viewsets
from API.models import user, product
from API.serializers import userSerializer, productSerializer


# Create your views here.

class userViewSet(viewsets.ModelViewSet):
    queryset = user.objects.all()
    serializer_class = userSerializer

class productViewSet(viewsets.ModelViewSet):
    queryset = product.objects.all()
    serializer_class = productSerializer