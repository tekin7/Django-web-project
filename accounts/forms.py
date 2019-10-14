from django.contrib.auth.forms import UserCreationForm
from .models import User,coiffeur_person
from django import forms
from django.contrib.auth import authenticate


# UserCreationForm miras alınıyor.
class MyUserCreationForm(UserCreationForm):
    class Meta:
        # Yeni Model
        model = User
        # Yeni alanlar
        fields = {'username', 'password1',  'favorite'}

class loginForm(forms.Form):
    username = forms.CharField(max_length=128)
    password = forms.CharField(max_length=128)

    def clean(self):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')
        if username and password:
            user = authenticate(username=username, password=password)
            if not user:
                raise forms.ValidationError('Kullanıcı adı veya parola yanlış')
            return super(loginForm, self).clean()


class personForm(forms.ModelForm):
    class Meta:
        # Yeni Model
        model = coiffeur_person
        # Yeni alanlar
        fields = {'name', 'surname', 'coiffeur',}


