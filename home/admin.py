from django.contrib import admin
from .models import location


# Register your models here.
class Location(admin.ModelAdmin):
    list_display = ['city', 'county',]
    class Meta:
        model = location

admin.site.register(location, Location)