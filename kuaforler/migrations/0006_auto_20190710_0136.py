# Generated by Django 2.2.2 on 2019-07-09 22:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kuaforler', '0005_auto_20190710_0050'),
    ]

    operations = [
        migrations.AlterField(
            model_name='kuafor_gun1',
            name='sekiz',
            field=models.CharField(default=0, max_length=128),
        ),
        migrations.AlterField(
            model_name='kuafor_gun1',
            name='sekizB',
            field=models.CharField(default=0, max_length=128),
        ),
    ]