from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=50)
    sub_title = models.CharField(max_length=75)
    image = models.ImageField(upload_to='images/blog')
    content = models.TextField()
    created = models.DateField(auto_now_add=True)
    updated = models.DateField(auto_now=True)
