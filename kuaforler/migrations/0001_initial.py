# Generated by Django 2.2.2 on 2019-07-09 12:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('accounts', '0004_auto_20190704_1501'),
    ]

    operations = [
        migrations.CreateModel(
            name='kuafor_gun1',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data', models.CharField(max_length=128)),
                ('coiffeur', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.coiffeur_profil')),
            ],
        ),
    ]
