from django.db import models

class List(models.Model):
  controlnum       = models.CharField(max_length=12)
  accname      = models.CharField(max_length=50)
  address = models.TextField()
  area = models.TextField()
  value = models.TextField()
