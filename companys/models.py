from django.db import models


# Create your models here.
class Company(models.Model):
    companys_title = models.CharField(max_length=200)
    companys_tel = models.CharField(max_length=15)
    companys_url = models.URLField()
    companys_address = models.CharField(max_length=300)
    companys_describe = models.TextField()
    total_headcount = models.IntegerField()
    name = models.CharField(max_length=200)
    email = models.EmailField()
    tel = models.CharField(max_length=15)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    deleted_at = models.DateTimeField(default=None, null=True)
