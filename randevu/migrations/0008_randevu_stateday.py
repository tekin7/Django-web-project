# Generated by Django 2.2.2 on 2019-07-29 16:06

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('randevu', '0007_auto_20190704_1729'),
    ]

    operations = [
        migrations.AddField(
            model_name='randevu',
            name='stateday',
            field=models.CharField(default=django.utils.timezone.now, max_length=128),
            preserve_default=False,
        ),
    ]
