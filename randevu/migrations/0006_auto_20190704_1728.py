# Generated by Django 2.2.2 on 2019-07-04 14:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('randevu', '0005_auto_20190704_1713'),
    ]

    operations = [
        migrations.AlterField(
            model_name='randevu',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
