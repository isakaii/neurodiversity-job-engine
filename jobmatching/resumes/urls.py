from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='resumes-index'),
    path('resumes/upload', views.upload, name='resumes-upload'),
]
