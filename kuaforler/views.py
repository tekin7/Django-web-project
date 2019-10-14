from django.shortcuts import render, get_object_or_404,redirect, HttpResponseRedirect
from accounts.models import coiffeur_profil, User, coiffeur_person
from .models import *
from .forms import *
from accounts.forms import personForm
from randevu.models import randevu
from django.http import JsonResponse

# Create your views here.
def randevular_view(request):
    if request.user.is_authenticated and request.user.is_barber == False:
        return redirect('home')
    kuafor = coiffeur_profil.objects.filter(user_id=request.user.id)
    for kuaforid in kuafor:
        id = kuaforid.id,
    randevular = randevu.objects.filter(coiffeur=id)
    context = {
        'randevular':randevular,
    }
    return render(request, 'Kuafor/kuaforRandevular.html', context)


def kuaforProfil_view(request):
    if request.user.is_authenticated and request.user.is_barber == False:
        return redirect('home')
    kuafor = coiffeur_profil.objects.filter(user_id=request.user.id)
    for kuaforid in kuafor:
        id = kuaforid.id,
    personel = coiffeur_person.objects.filter(coiffeur=id)
    hizmet = kuafor_hizmet.objects.filter(coiffeur=id)
    foto = images.objects.filter(coiffeur=id)
    gun1saat = get_object_or_404(kuafor_gun1, coiffeur=id)
    gun2saat = get_object_or_404(kuafor_gun2, coiffeur=id)
    gun3saat = get_object_or_404(kuafor_gun3, coiffeur=id)
    gun4saat = get_object_or_404(kuafor_gun4, coiffeur=id)
    gun5saat = get_object_or_404(kuafor_gun5, coiffeur=id)
    gun6saat = get_object_or_404(kuafor_gun6, coiffeur=id)
    gun7saat = get_object_or_404(kuafor_gun7, coiffeur=id)
    if 'gun1Submit' in request.POST:
        form = kuafor_gun1_form(request.POST or None, instance=gun1saat)
        if form.is_valid():
            form.save()
    elif 'gun2Submit' in request.POST:
        form = kuafor_gun2_form(request.POST or None, instance=gun2saat)
        if form.is_valid():
            form.save()
    elif 'gun3Submit' in request.POST:
        form = kuafor_gun3_form(request.POST or None, instance=gun3saat)
        if form.is_valid():
            form.save()
    elif 'gun4Submit' in request.POST:
        form = kuafor_gun4_form(request.POST or None, instance=gun4saat)
        if form.is_valid():
            form.save()
    elif 'gun5Submit' in request.POST:
        form = kuafor_gun5_form(request.POST or None, instance=gun5saat)
        if form.is_valid():
            form.save()
    elif 'gun6Submit' in request.POST:
        form = kuafor_gun6_form(request.POST or None, instance=gun6saat)
        if form.is_valid():
            form.save()
    elif 'gun7Submit' in request.POST:
        form = kuafor_gun7_form(request.POST or None, instance=gun7saat)
        if form.is_valid():
            form.save()
    elif 'personelSubmit' in request.POST:
        form = personForm(request.POST)
        if form.is_valid():
            form.save()

    elif 'hizmetSubmit' in request.POST:
        form = kuafor_hizmet_form(request.POST)
        if form.is_valid():
            form.save()

    elif 'imageSubmit' in request.POST:
        form = images_form(request.POST or None, request.FILES or None)
        print(request.POST)
        if form.is_valid():
            print('FORM İS VALİD')
            form.save()

    context = {
        'kuafor':kuafor,
        'personel':personel,
        'hizmet':hizmet,
        'foto':foto,
        'gun1saat': gun1saat,
        'gun2saat': gun2saat,
        'gun3saat': gun3saat,
        'gun4saat': gun4saat,
        'gun5saat': gun5saat,
        'gun6saat': gun6saat,
        'gun7saat': gun7saat,
    }
    return render(request, 'Kuafor/kuaforProfil.html', context)

def ayarlar_wiew(request):
    kuafor = get_object_or_404(coiffeur_profil, user_id=request.user.id)
    context = {
        'kuafor':kuafor,
    }
    return render(request, 'Kuafor/ayarlar.html', context)


