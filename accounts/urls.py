from .views import *
from django.conf.urls import url


urlpatterns = [
    url('^$', listCoiffeur_view, name='kuafor'),
]
