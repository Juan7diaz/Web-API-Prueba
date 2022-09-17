from API import views
from rest_framework import routers

APIRouters = routers.DefaultRouter()
APIRouters.register(r'users', views.userViewSet)
APIRouters.register(r'products', views.productViewSet)