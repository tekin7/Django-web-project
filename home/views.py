from django.shortcuts import render, HttpResponse, Http404, redirect
from .models import location
from accounts.models import coiffeur_profil, User
from django.http import *

# Create your views here.
def home_view(request):
    if request.user.is_authenticated and request.user.is_barber == True:
        return redirect('randevular')
    konum = location.objects.all()
    profiller = coiffeur_profil.objects.all()
    context ={
        'konum':konum,
        'profiller':profiller,
    }
    return render(request, 'index.html', context)

def about_view(request):
    if request.user.is_authenticated and request.user.is_barber == True:
        return redirect('home')
    return render(request, 'about.html')

def contact_view(request):
    if request.user.is_authenticated and request.user.is_barber == True:
        return redirect('home')
    return render(request, 'contact.html')

