from django.shortcuts import render
from django.http import HttpResponse, HttpRequest
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.request import Request 
from rest_framework.decorators import api_view
from scripts.nodeclass import create_list_dict_nodes
from collections import deque
import heapq

# Create your views here.
@api_view(['GET'])
def recipes_pagination_priority(request):
    # These functions can pull data from db
    # Transform data
    # Send emails and so on
    
    # need to map this action/view to a url, when we get a request at the url this funciton will be called
    list_of_dict_nodes = create_list_dict_nodes()
    top_k_dict_nodes = heapq.nlargest(10, list_of_dict_nodes, key=lambda node: node.get('Popularity'))
    return Response(top_k_dict_nodes)

@api_view(['GET'])
def recipes_trie_names(request):
    # These functions can pull data from db
    # Transform data
    # Send emails and so on
    
    # need to map this action/view to a url, when we get a request at the url this funciton will be called
    # person = create_list_dict_nodes()
    return Response({'hello': 'world'})




