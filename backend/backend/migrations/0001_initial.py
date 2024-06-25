# Generated by Django 5.0.6 on 2024-06-25 09:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Favourites',
            fields=[
                ('event_id', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('date', models.DateTimeField(null=True)),
                ('name', models.CharField(blank=True, max_length=100)),
                ('category', models.CharField(blank=True, max_length=100)),
                ('venue', models.CharField(blank=True, max_length=100)),
            ],
        ),
    ]