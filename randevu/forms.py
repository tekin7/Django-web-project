from django import forms
from .models import randevu

class randevuAl(forms.ModelForm):

    class Meta:
        model = randevu
        fields = ["service", "person", "date", "hour", "phone","coiffeur", "user", "daystate",]