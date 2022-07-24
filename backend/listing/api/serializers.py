from rest_framework import serializers
from listing.models import List

class listSerializer(serializers.ModelSerializer):
  class Meta:
    model = List
    fields = (
      'controlnum',
      'accname',
      'address',
      'area',
      'value',
    )