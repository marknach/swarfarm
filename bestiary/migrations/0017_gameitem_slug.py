# Generated by Django 2.1.11 on 2019-09-05 02:27

from django.db import migrations, models
from django.utils.text import slugify


def create_slug(apps, schema_editor):
    GameItem = apps.get_model('bestiary', 'GameItem')

    for i in GameItem.objects.all():
        i.slug = slugify(i.name)
        i.save()


def noop(*args, **kwargs):
    pass


class Migration(migrations.Migration):

    dependencies = [
        ('bestiary', '0016_auto_20190707_1011'),
    ]

    operations = [
        migrations.AddField(
            model_name='gameitem',
            name='slug',
            field=models.CharField(default='', max_length=200),
            preserve_default=False,
        ),
        migrations.RunPython(create_slug, noop)
    ]