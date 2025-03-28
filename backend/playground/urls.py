from django.urls import path 
from . import views # from the current folder reference the views module

# special variable, this is what django looks for
# array of url pattern objects
# URLConfiguration, need to import this configuration into the main configuration for this project
urlpatterns = [ 
    path('hello/', views.say_hello) # first parameter is the path for user request and second parameter is the reference to view/action function
]