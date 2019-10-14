# Generated by Django 2.2.2 on 2019-07-18 15:21

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_auto_20190704_1501'),
    ]

    operations = [
        migrations.AddField(
            model_name='coiffeur_profil',
            name='slug',
            field=models.SlugField(default=django.utils.timezone.now, editable=False, max_length=128, unique=True),
            preserve_default=False,
        ),
    ]