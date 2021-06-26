from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class Resume(models.Model):
    name = models.CharField(max_length=100)
    content = models.TextField()
    uploader = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    last_update = models.DateTimeField(default=timezone.now)
