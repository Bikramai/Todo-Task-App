from rest_framework import serializers
from .models import Todo


# Serializer class for the Todo model
class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        # Specify the model to be serialized
        model = Todo

        # Define which fields should be included in the serialized output
        # "__all__" means all fields in the model will be serialized
        fields = "__all__"
