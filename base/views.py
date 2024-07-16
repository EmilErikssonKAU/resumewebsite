from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def aboutMePageView(request):
    return render(request, 'aboutme.html') 

def qualificationsPageView(request):
    return render(request,'qualifications.html')

def projectsPageView(request):
    return render(request, 'projects.html')

def contactMePageView(request):
    return render(request, 'contactme.html')