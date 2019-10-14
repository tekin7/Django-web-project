from django.shortcuts import render, redirect, get_object_or_404, HttpResponseRedirect
from .forms import MyUserCreationForm
from django.contrib.auth import authenticate, login, logout
from .forms import loginForm
from .models import User, coiffeur_profil, coiffeur_person
from randevu.forms import randevuAl
from kuaforler.models import *
from PIL import Image


# Create your views here.

def register(request):
    favori = coiffeur_profil.objects.all()
    if request.method == "POST":
        form = MyUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    return render(request, 'register.html', {'favori':favori})

def login_view(request):
    form = loginForm(request.POST)
    if form.is_valid():
        username = form.cleaned_data.get('username')
        password = form.cleaned_data.get('password')
        user = authenticate(username=username, password=password)
        login(request, user)
        if user.is_barber == False:
            if user.favorite != None:
                print(user.favorite)
                return HttpResponseRedirect('/kuafor/' + user.favorite + '/')
            else:
                return redirect('home')
        else:
            return redirect('profil')
    return render(request, 'login.html')

def logout_view(request):
    logout(request)
    return redirect('home')

# Create your views here.
def listCoiffeur_view(request, id):
    if request.user.is_authenticated and request.user.is_barber == True:
        return redirect('randevular')
    coiffeurList = coiffeur_profil.objects.filter(Location=id)
    return render(request, 'listCoiffeur.html', {'coiffeurList':coiffeurList})

def profil_view(request, id):
    if request.user.is_authenticated and request.user.is_barber == True:
        return redirect('randevular')
    kuafor = get_object_or_404(coiffeur_profil, id=id)
    personel = coiffeur_person.objects.filter(coiffeur=kuafor.id)
    hizmet = kuafor_hizmet.objects.filter(coiffeur=kuafor.id)
    image = images.objects.filter(coiffeur=kuafor.id)
    gun1saat = get_object_or_404(kuafor_gun1, coiffeur=kuafor.id)
    gun2saat = get_object_or_404(kuafor_gun2, coiffeur=kuafor.id)
    gun3saat = get_object_or_404(kuafor_gun3, coiffeur=kuafor.id)
    gun4saat = get_object_or_404(kuafor_gun4, coiffeur=kuafor.id)
    gun5saat = get_object_or_404(kuafor_gun5, coiffeur=kuafor.id)
    gun6saat = get_object_or_404(kuafor_gun6, coiffeur=kuafor.id)
    gun7saat = get_object_or_404(kuafor_gun7, coiffeur=kuafor.id)

    if request.method == "POST":
        form = randevuAl(request.POST)
        if form.is_valid():
            form.save()
    context = {
        'kuafor': kuafor,
        'personel': personel,
        'hizmet':hizmet,
        'image':image,
        'gun1saat': gun1saat,
        'gun2saat': gun2saat,
        'gun3saat': gun3saat,
        'gun4saat': gun4saat,
        'gun5saat': gun5saat,
        'gun6saat': gun6saat,
        'gun7saat': gun7saat,
    }
    return render(request, 'profilCoiffeur.html', context)

