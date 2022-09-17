from API.models import user
from rest_framework import serializers

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = '__all__'