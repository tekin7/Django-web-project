from django.conf.urls import url
from .views import *

urlpatterns = [
    url('randevular', randevular_view, name='randevular'),
    url('profil', kuaforProfil_view, name='profil'),
    url('ayarlar', ayarlar_wiew, name='ayarlar'),
    ]