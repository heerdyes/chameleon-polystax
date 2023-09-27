# Generated by Django 4.2.4 on 2023-09-25 05:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Smartphone',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('brandname', models.CharField(max_length=40)),
                ('opersys', models.CharField(max_length=30)),
                ('price', models.FloatField()),
            ],
        ),
    ]
