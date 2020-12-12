from django.db import models

class Username(models.Model):
    username = models.CharField(max_length=50)
    def __str__(self):
        return self.username

class MyProfile(models.Model):
    business_type = models.CharField(max_length=100)
    first_name = models.CharField(max_length=50)
    mobile = models.CharField(max_length=10)
    industry_type = models.CharField(max_length=70)
    last_name = models.CharField(max_length=50)
    address = models.CharField(max_length=150)
    user_id = models.CharField(max_length=13)
    email_id = models.EmailField()
    email_preferences = models.BooleanField(default=False)
    push_notification_preferences = models.BooleanField(default=False)
    username_reference = models.ForeignKey(Username, on_delete=models.CASCADE)