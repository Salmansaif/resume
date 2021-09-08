from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField(max_length=50, unique=True)
    sub_title = models.CharField(max_length=50)
    description = models.TextField()
    image = models.ImageField(
        upload_to='static/projects', null=True, blank=True)
    status = models.BooleanField(default=True)
    github_url = models.URLField()

    def __str__(self):
        return self.title


class Skill(models.Model):
    title = models.CharField(max_length=20)
    image = models.ImageField(upload_to='images/skills')

    def __str__(self):
        return self.title


class Experience(models.Model):
    company = models.CharField(max_length=20)
    role = models.CharField(max_length=20)
    start_date = models.DateField()
    end_date = models.DateField()
    description = models.TextField()

    def __str__(self):
        return self.company


class Education(models.Model):
    field = models.CharField(max_length=30)
    institution = models.CharField(max_length=30)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.field
