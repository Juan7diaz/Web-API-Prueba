from rest_framework import serializers

from API.models import user, product, order

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = '__all__'

class productSerializer(serializers.ModelSerializer):
    class Meta:
        model = product
        fields = '__all__'

class orderSerializer(serializers.ModelSerializer):
    class Meta:
        model = order
        fields = '__all__'