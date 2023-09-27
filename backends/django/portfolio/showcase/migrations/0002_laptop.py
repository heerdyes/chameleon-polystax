# Generated by Django 4.2.4 on 2023-09-25 05:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('showcase', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Laptop',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('brandname', models.CharField(max_length=80)),
                ('opersys', models.CharField(max_length=50)),
                ('price', models.FloatField()),
            ],
        ),
    ]