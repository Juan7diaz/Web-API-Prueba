from rest_framework import viewsets

from API.models import user, product, order
from API.serializers import userSerializer, productSerializer, orderSerializer


# Create your views here.

class userViewSet(viewsets.ModelViewSet):
    queryset = user.objects.all()
    serializer_class = userSerializer

class productViewSet(viewsets.ModelViewSet):
    queryset = product.objects.all()
    serializer_class = productSerializer

class orderViewSet(viewsets.ModelViewSet):
    queryset = order.objects.all()
    serializer_class = orderSerializer