from django.conf.urls import url
from .views import *
from accounts.views import *

urlpatterns = [
    url('^$', home_view, name='home'),
    url(r'^giris/$', login_view, name='giris'),
    url(r'^cikis/$', logout_view, name='cikis'),
    url(r'^hakkımızda/$', about_view, name='hakkımızda'),
    url(r'^iletisim/$', contact_view, name='iletisim'),

]