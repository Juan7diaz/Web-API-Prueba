from API.models import user, product
from rest_framework import serializers

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = '__all__'

class productSerializer(serializers.ModelSerializer):
    class Meta:
        model = product
        fields = '__all__'