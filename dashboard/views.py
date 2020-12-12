from django.shortcuts import render
from .models import MyProfile


def openindex(request):
    return render(request, 'dashboard/index_dashboard.html')


def opentrack_user(request):
    return render(request, 'dashboard/track_user_dashboard.html')


def UpdateFields_and_OpenProfile(request):
    change_details = MyProfile.objects.get(id=1)
    if request.method == "POST" and request.POST:
        change_details.business_type = request.POST.get('business_type')
        change_details.first_name = request.POST.get('first_name')
        change_details.mobile = request.POST.get('mobile')
        change_details.industry_type = request.POST.get('industry_type')
        change_details.last_name = request.POST.get('last_name')
        change_details.address = request.POST.get('address')
        change_details.user_id = request.POST.get('user_id')
        change_details.email_id = request.POST.get('email_id')
        if request.POST.get('email_preferences') == 'on':
            email_preferences = True
        else:
            email_preferences = False
        if request.POST.get('push_notification_preferences') == 'on':
            push_notification_preferences = True
        else:
            push_notification_preferences = False

        change_details.email_preferences = email_preferences
        change_details.push_notification_preferences = push_notification_preferences

        change_details.save()

    return render(request, 'dashboard/profile_dashboard.html', {'row': change_details})