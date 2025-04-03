from django.shortcuts import render
from django.http import HttpResponse, HttpRequest
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.request import Request 
from rest_framework.decorators import api_view
from scripts.nodeclass import create_list_nodes

# Create your views here.
@api_view(['GET'])
def recipes_deque_view(request: Request) -> Response: 
    # These functions can pull data from db
    # Transform data
    # Send emails and so on
    
    # need to map this action/view to a url, when we get a request at the url this funciton will be called
    person = {'name': 'thomas', 'age':'20'}
    return Response(person)

@api_view(['GET'])
def recipes_priority_view(request):
    # These functions can pull data from db
    # Transform data
    # Send emails and so on
    
    # need to map this action/view to a url, when we get a request at the url this funciton will be called
    person = {'name': 'thomas', 'age':'20'}
    return Response(person)

@api_view(['GET'])
def recipes_pagination_priority(request):
    # These functions can pull data from db
    # Transform data
    # Send emails and so on
    
    # need to map this action/view to a url, when we get a request at the url this funciton will be called
    person = {'name': 'thomas', 'age':'20'}
    return Response(person)

@api_view(['GET'])
def recipes_pagination_dequeue(request):
    # These functions can pull data from db
    # Transform data
    # Send emails and so on
    
    # need to map this action/view to a url, when we get a request at the url this funciton will be called
    person = {'name': 'thomas', 'age':'20'}
    return Response(person)

@api_view(['GET'])
def recipes_trie_names(request):
    # These functions can pull data from db
    # Transform data
    # Send emails and so on
    
    # need to map this action/view to a url, when we get a request at the url this funciton will be called
    person = create_list_nodes()
    return Response(person)




