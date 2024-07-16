from django.urls import path
from .views import *

urlpatterns = [
    path('', aboutMePageView, name='aboutme'),
    path('aboutme',aboutMePageView, name='aboutme'),
    path('education',qualificationsPageView, name='qualifications'),
    path('projects', projectsPageView, name='projects'),
    path('contactme', contactMePageView, name='contactme')
]