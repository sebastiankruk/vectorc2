# Generated by Django 2.1.7 on 2019-05-24 20:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserPhotos',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='images/')),
                ('label', models.CharField(db_index=True, max_length=30, verbose_name='Image label')),
                ('upload_date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='VectorPhotoCache',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fill', models.BooleanField(default=True)),
                ('dimensions', models.CharField(default='184x96', max_length=15)),
                ('cached_path', models.CharField(max_length=250)),
                ('photo', models.ForeignKey(on_delete=models.deletion.CASCADE, to='images.UserPhotos')),
            ],
        ),
    ]