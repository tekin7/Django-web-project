from django.db import models
from accounts.models import coiffeur_profil, User, coiffeur_person

# Create your models here.
class randevu(models.Model):
    coiffeur = models.ForeignKey(coiffeur_profil, on_delete=models.CASCADE)
    service = models.CharField(max_length=128)
    person = models.ForeignKey(coiffeur_person, on_delete=models.CASCADE,  blank=True, null=True)
    date = models.CharField(max_length=128)
    hour = models.CharField(max_length=128)
    daystate = models.CharField(max_length=128 )
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    phone = models.CharField(max_length=128)
