# Generated by Django 3.1.1 on 2020-09-16 07:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('dashboard', '0003_delete_myprofile'),
    ]

    operations = [
        migrations.CreateModel(
            name='Username',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='MyProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('business_type', models.CharField(max_length=100)),
                ('first_name', models.CharField(max_length=50)),
                ('mobile', models.CharField(max_length=10)),
                ('industry_type', models.CharField(max_length=70)),
                ('last_name', models.CharField(max_length=50)),
                ('address', models.CharField(max_length=150)),
                ('user_id', models.CharField(max_length=13)),
                ('email_id', models.EmailField(max_length=254)),
                ('email_preferences', models.BooleanField(default=False)),
                ('push_notification_preferences', models.BooleanField(default=False)),
                ('username_reference', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dashboard.username')),
            ],
        ),
    ]
