# from django.shortcuts import render
import os
from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.views import View
from django.http import HttpResponse, HttpResponseNotFound

from .serializers import ProjectSerializer, ExperienceSerializer
from .models import Project, Experience


class ProjectListAPIView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class ProjectRetrieveAPIView(generics.RetrieveAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    lookup_field = 'slug'


class ExperienceListAPIView(generics.ListAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


# class Assets(View):
#     def get(self, _request, filename):
#         path = os.path.join(os.path.dirname(__file__), 'static', filename)

#         if os.path.isfile(path):
#             with open(path, 'rb') as file:
#                 return HttpResponse(file.read(), content_type='application/javascript')
#         else:
#             return HttpResponseNotFound()
