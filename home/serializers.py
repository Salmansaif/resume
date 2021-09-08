from rest_framework import serializers

from .models import Project, Experience


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = [
            'title',
            'sub_title',
            'description',
            'image',
            'github_url'
        ]


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = [
            'company',
            'role',
            'start_date',
            'end_date',
            'description',
        ]
