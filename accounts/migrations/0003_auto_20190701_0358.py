# Generated by Django 2.2.2 on 2019-07-01 00:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_coiffeur_person_coiffeur_profil'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='favorite',
            field=models.CharField(blank=True, max_length=128, null=True),
        ),
    ]