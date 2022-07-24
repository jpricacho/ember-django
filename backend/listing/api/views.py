from rest_framework import generics, mixins
from listing.models import List
from .serializers import  listSerializer

class listingAPIView(mixins.CreateModelMixin, generics.ListAPIView):
  resource_name = 'lists'
  serializer_class = listSerializer

  def get_queryset(self):
    return List.objects.all()
  def post(self, request, *args, **kwargs):
    return self.create(request, *args, **kwargs)

class listCrudView(generics.RetrieveUpdateDestroyAPIView):
  resource_name       = 'lists'
  lookup_field        = 'id'
  serializer_class    = listSerializer
  def get_queryset(self):
    return List.objects.all()