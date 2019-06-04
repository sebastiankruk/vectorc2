from django.db import models

# Create your models here.
from django.db import models

class UserPhotos(models.Model):
    image = models.ImageField(upload_to="images/")    
    label = models.CharField('Image label', max_length=30, unique=False, null=False, db_index=True)
    upload_date=models.DateTimeField(auto_now_add=True)