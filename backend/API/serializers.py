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
    def to_representation(self, instance):
        return {
            'id': instance.id,
            'orderNumber': instance.orderNumber,
            'userId': instance.user.id,
            'userName':  instance.user.name,
            'address': instance.user.address,
            'phoneNumber': instance.user.phoneNumber,
            'productId': instance.product.id,
            'productName': instance.product.name,
            'price': instance.product.price,
            'quantity': instance.quantity
        }