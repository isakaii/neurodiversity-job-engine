from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class Resume(models.Model):
    name = models.CharField(max_length=100)
    headline = models.TextField()
    summary = models.TextField()
    location = models.TextField()
    links = models.TextField()
    recentFieldOfWork = models.TextField()
    fieldsToExplore = models.TextField()
    workExperience = models.TextField()
    trainingExperience = models.TextField()
    education = models.TextField()
    skills = models.TextField()
    language = models.TextField()
    certification = models.TextField()
    additionalInformation = models.TextField()
    awards = models.TextField()
    publications = models.TextField()
    uploader = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    last_update = models.DateTimeField(default=timezone.now)
