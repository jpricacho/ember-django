# Generated by Django 4.0.6 on 2022-07-21 11:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='List',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('control_num', models.CharField(max_length=12)),
                ('acc_name', models.CharField(max_length=50)),
                ('address', models.TextField()),
                ('area', models.TextField()),
                ('value', models.TextField()),
            ],
        ),
    ]
