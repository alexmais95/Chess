# Generated by Django 4.2.7 on 2024-05-17 13:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('board', '0001_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Statistic',
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]
