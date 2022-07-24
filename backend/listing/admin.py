from django.contrib import admin
from .models import List

@admin.register(List)
class listAdmin(admin.ModelAdmin):
  list_display = ['controlnum', 'accname', 'address', 'area', 'value',]