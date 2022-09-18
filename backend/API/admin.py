from django.contrib import admin
from .models import user, product, order

# Register your models here.
admin.site.register(user)
admin.site.register(product)
admin.site.register(order)
