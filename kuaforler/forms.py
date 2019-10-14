from .models import *
from django import forms


class images_form(forms.ModelForm):
    class Meta:
        model = images
        fields = '__all__'


class kuafor_hizmet_form(forms.ModelForm):
    class Meta:
        model = kuafor_hizmet
        fields = '__all__'

class kuafor_gun1_form(forms.ModelForm):
    class Meta:
        # Yeni Model
        model = kuafor_gun1
        fields = '__all__'

class kuafor_gun2_form(forms.ModelForm):
    class Meta:
        # Yeni Model
        model = kuafor_gun2
        fields = '__all__'

class kuafor_gun3_form(forms.ModelForm):
    class Meta:
        # Yeni Model
        model = kuafor_gun3
        fields = '__all__'

class kuafor_gun4_form(forms.ModelForm):
    class Meta:
        # Yeni Model
        model = kuafor_gun4
        fields = '__all__'

class kuafor_gun5_form(forms.ModelForm):
    class Meta:
        # Yeni Model
        model = kuafor_gun5
        fields = '__all__'

class kuafor_gun6_form(forms.ModelForm):
    class Meta:
        # Yeni Model
        model = kuafor_gun7
        fields = '__all__'

class kuafor_gun7_form(forms.ModelForm):
    class Meta:
        # Yeni Model
        model = kuafor_gun7
        fields = '__all__'

