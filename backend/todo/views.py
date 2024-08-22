from rest_framework import viewsets
from django_filters import rest_framework as filters
from .models import Todo
from .serializers import TodoSerializer


# Define custom filter for the Todo model
class TodoFilter(filters.FilterSet):
    # Filter by the 'status' field using an exact match
    status = filters.CharFilter(field_name='status', lookup_expr='exact')

    class Meta:
        # Specify the model to be filtered
        model = Todo

        # Define the fields that can be filtered
        fields = ['status']


# Define the viewset for the Todo model
class TodoView(viewsets.ModelViewSet):
    # Specify the serializer class to use for serialization and deserialization
    serializer_class = TodoSerializer

    # Define the queryset to be used by the viewset
    queryset = Todo.objects.all()

    # Specify the filter backend to use for filtering results
    filter_backends = (filters.DjangoFilterBackend,)

    # Link the custom filter class to the viewset
    filterset_class = TodoFilter
