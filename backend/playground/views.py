from django.shortcuts import render
from django.http import HttpResponse, HttpRequest

# Create your views here. Not really views, essentially a request handler, sends a response
# define view functions
# View functions take request and return reponse (request handler or actions like in asp.net) 

def say_hello(request: HttpRequest) -> HttpResponse: 
    # These functions can pull data from db
    # Transform data
    # Send emails and so on
    
    # need to map this action/view to a url, when we get a request at the url this funciton will be called
    return HttpResponse('Hello World')
