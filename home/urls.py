from django.urls import path

from .views import ProjectListAPIView, ProjectRetrieveAPIView, ExperienceListAPIView

urlpatterns = [
    path('projects/', ProjectListAPIView.as_view(), name='projects-list'),
    path('projects/<slug:slug>', ProjectRetrieveAPIView.as_view(),
         name='project-detail'),
    path('experiences/', ExperienceListAPIView.as_view(), name='experiences-list'),
]
