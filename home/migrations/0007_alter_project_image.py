# Generated by Django 3.2.7 on 2021-09-08 16:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_alter_project_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='static/projects'),
        ),
    ]
