# Generated by Django 4.1.1 on 2022-09-18 00:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0003_order'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='name',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='user',
            name='phoneNumber',
            field=models.CharField(max_length=10),
        ),
    ]
