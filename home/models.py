from django.db import models
from django.utils.text import slugify

# Create your models here.

class location(models.Model):
    city = models.CharField(max_length=126)
    county = models.CharField(max_length=126, blank=True)
    slug = models.SlugField(max_length=128, unique=True, null=False, editable=False)
    def __str__(self):
        return self.city +'/'+ self.county

    def get_slug(self):
        return self.slug

    def save(self, *args, **kwargs):
        self.slug = slugify(self.city+' '+self.county)
        super(location, self).save(*args, **kwargs)


