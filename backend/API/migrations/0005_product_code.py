# Generated by Django 4.1.1 on 2022-09-21 01:11

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0004_alter_product_name_alter_user_phonenumber'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='code',
            field=models.IntegerField(default=1, validators=[django.core.validators.MaxValueValidator(8)]),
            preserve_default=False,
        ),
    ]
