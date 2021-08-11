# Generated by Django 3.2.6 on 2021-08-11 02:11

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Resume',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('headline', models.TextField()),
                ('summary', models.TextField()),
                ('location', models.TextField()),
                ('links', models.TextField()),
                ('recentFieldOfWork', models.TextField()),
                ('fieldsToExplore', models.TextField()),
                ('workExperience', models.TextField()),
                ('trainingExperience', models.TextField()),
                ('education', models.TextField()),
                ('skills', models.TextField()),
                ('language', models.TextField()),
                ('certification', models.TextField()),
                ('additionalInformation', models.TextField()),
                ('awards', models.TextField()),
                ('publications', models.TextField()),
                ('last_update', models.DateTimeField(default=django.utils.timezone.now)),
                ('uploader', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
