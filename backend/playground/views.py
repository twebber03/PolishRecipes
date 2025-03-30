from django.shortcuts import render
from django.http import HttpResponse, HttpRequest
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.request import Request 
from rest_framework.decorators import api_view

# Create your views here. Not really views, essentially a request handler, sends a response
# define view functions
# View functions take request and return reponse (request handler or actions like in asp.net) 

# Response object will take in any python data or already serialized data that we passed into it and will render it out as json data
# Django Rest Framework specifically designed for rest-frameworks to make api's easier
# Includes all the meta-data; request transforms json (not always) to python language syntax; response transforms python and returns json (most of the time) 
@api_view(['GET'])
def say_hello(request: Request) -> Response: 
    # These functions can pull data from db
    # Transform data
    # Send emails and so on
    
    # need to map this action/view to a url, when we get a request at the url this funciton will be called
    person = {'name': 'thomas', 'age':'20'}
    return Response(person)

