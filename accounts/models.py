from django.db import models
from home.models import location
from django.urls import reverse
from django.utils.text import slugify
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save


class User(AbstractUser):
    favorite = models.CharField(max_length=128, null=True, blank=True)
    is_barber = models.BooleanField(default=False)

class coiffeur_profil(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    Location = models.ForeignKey(location, on_delete=models.CASCADE, blank=True)
    business_name = models.CharField(max_length=128, blank=True)
    phone = models.CharField(max_length=128, blank=True)
    address = models.CharField(max_length=128, blank=True)
    staff = models.BooleanField(default=True)
    image = models.ImageField(blank=True)

    def __str__(self):
        return self.business_name

    def get_absolute_url(self):
        return reverse('isletme', kwargs={'id':self.id})



class coiffeur_person(models.Model):
    coiffeur = models.ForeignKey(coiffeur_profil, on_delete=models.CASCADE)
    name = models.CharField(max_length=128)
    surname = models.CharField(max_length=128)
    def __str__(self):
        return self.name + ' '+ self.surname

