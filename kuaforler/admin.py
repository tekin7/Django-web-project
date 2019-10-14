from django.contrib import admin
from .models import *

# Register your models here.
class image(admin.ModelAdmin):

    list_display = ['coiffeur',]

    class Meta:
        model = images

admin.site.register(images, image)

class gun1_saat(admin.ModelAdmin):

    list_display = ['coiffeur',]

    class Meta:
        model = kuafor_gun1

admin.site.register(kuafor_gun1, gun1_saat)



class gun2_saat(admin.ModelAdmin):

    list_display = ['coiffeur',]

    class Meta:
        model = kuafor_gun2

admin.site.register(kuafor_gun2, gun2_saat)



class gun3_saat(admin.ModelAdmin):

    list_display = ['coiffeur',]

    class Meta:
        model = kuafor_gun3

admin.site.register(kuafor_gun3, gun3_saat)



class gun4_saat(admin.ModelAdmin):

    list_display = ['coiffeur',]

    class Meta:
        model = kuafor_gun4

admin.site.register(kuafor_gun4, gun4_saat)



class gun5_saat(admin.ModelAdmin):

    list_display = ['coiffeur',]

    class Meta:
        model = kuafor_gun5

admin.site.register(kuafor_gun5, gun5_saat)



class gun6_saat(admin.ModelAdmin):

    list_display = ['coiffeur',]

    class Meta:
        model = kuafor_gun6

admin.site.register(kuafor_gun6, gun6_saat)



class gun7_saat(admin.ModelAdmin):

    list_display = ['coiffeur',]

    class Meta:
        model = kuafor_gun7

admin.site.register(kuafor_gun7, gun7_saat)