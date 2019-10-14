from django.contrib import admin
from .models import User, coiffeur_profil,coiffeur_person
from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from django.contrib.auth.admin import UserAdmin
from django import forms


# Kullanıcı seçme ekranı
class MyUserChangeForm(UserChangeForm):
    class Meta(UserChangeForm.Meta):
        # Yeni model
        model = User


class MyUserAdmin(UserAdmin):
    # Yeni Form
    form = MyUserChangeForm
    # Görünmesi gerekenler
    list_display = UserAdmin.list_display + ('favorite','is_barber',)

    # Yeni alanlar
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('favorite','is_barber')}),
    )


# Yeni Kullanıcı oluşturma sınıfı
class MyUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        # Yeni model
        model = User

    def clean_username(self):
        username = self.cleaned_data['username']
        try:
            User.objects.get(username=username)
        except User.DoesNotExist:
            return username
        raise forms.ValidationError(self.error_messages['duplicate_username'])


# MyUserAdmin sınıfı ile genişlettik.
admin.site.register(User, MyUserAdmin)



# Register your models here.
class Profil(admin.ModelAdmin):

    list_display = ['business_name', 'phone', 'address', 'staff', 'image', 'Location', 'user',]
    list_filter = ['Location',]

    class Meta:
        model = coiffeur_profil

admin.site.register(coiffeur_profil, Profil)


class Person(admin.ModelAdmin):
    list_display = ['name', 'surname', 'coiffeur',]

    class Meta:
        model = coiffeur_person

admin.site.register(coiffeur_person, Person)