# Generated by Django 3.1.1 on 2020-09-16 07:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='myprofile',
            name='address',
        ),
        migrations.RemoveField(
            model_name='myprofile',
            name='business_type',
        ),
        migrations.RemoveField(
            model_name='myprofile',
            name='email_id',
        ),
        migrations.RemoveField(
            model_name='myprofile',
            name='email_preferences',
        ),
        migrations.RemoveField(
            model_name='myprofile',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='myprofile',
            name='industry_type',
        ),
        migrations.RemoveField(
            model_name='myprofile',
            name='last_name',
        ),
        migrations.RemoveField(
            model_name='myprofile',
            name='mobile',
        ),
        migrations.RemoveField(
            model_name='myprofile',
            name='push_notification_preferences',
        ),
        migrations.RemoveField(
            model_name='myprofile',
            name='user_id',
        ),
    ]
