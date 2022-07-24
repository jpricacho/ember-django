from .views import listingAPIView, listCrudView
from django.urls import re_path

app_name = 'listing'
urlpatterns = [
  re_path(r'^$', listingAPIView.as_view(), name='list-create'),
  re_path(r'^(?P<id>\d+)', listCrudView.as_view(), name='list-crud')
]