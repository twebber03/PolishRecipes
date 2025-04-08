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
    size = int(request.query_params.get('size', 10)) # 3 is the default val
    direction = request.query_params.get('direction', 'Right') # Right is the default val
    index = int(request.query_params.get('index', 0)) # Zero is the default state value index (start at the most popular)
    # These functions can pull data from db
    # Transform data
    # Send emails and so on
    
    # need to map this action/view to a url, when we get a request at the url this funciton will be called
    list_of_dict_nodes = create_list_dict_nodes()
    top_k_dict_nodes = heapq.nlargest(size, list_of_dict_nodes, key=lambda node: node.get('Popularity'))
    top_k_dict_nodes_deque = deque(top_k_dict_nodes)

    # doesn't work cause backend can't keep track of state

    # def slide_window_right(dict_nodes_deque: deque[dict[str, str]], window_size=3) -> list[dict[str, str]]: 
    #     dict_nodes_deque.rotate(-1) # rotate deque window to the right
    #     return list(dict_nodes_deque)[:window_size]
    # def slide_window_left(dict_nodes_deque: deque[dict[str, str]], window_size=3) -> list[dict[str, str]]: 
    #     dict_nodes_deque.rotate(1) # rotate deque window to the left
    #     return list(dict_nodes_deque)[:window_size] 

    def get_updated_index(index, direction, size):
        if direction == 'right':
            return (index + 1) % size
        elif direction == 'left':
            return (index - 1 + size) % size
        else: 
            return index
    
    def get_window(data, start_index, window_size=3):
        size = len(data)
        window = []

        for i in range(window_size):
            current_index = (start_index + i) % size
            window.append(data[current_index])

        return window
    

    # Step 1: get the new starting index (lower bound of window)
    new_index = get_updated_index(index, direction, size)

    # Step 2: get the 3 associated recipe JSON dicts
    window_data = get_window(top_k_dict_nodes, new_index)

    # Step 3: return the full response
    new_dict = {
        'recipes': window_data, 
        'lower_bound_index': new_index
    }


    # if direction.lower() == 'right': 
    #     lower_bound = (index + 1) % size


    # elif direction.lower() == 'left': 
    #     lower_bound = (index - 1) % size
        

    # Sliding window problem

    return Response(new_dict)

@api_view(['GET'])
def request_recipe(request):
    recipe_name = request.query_params.get('name') # Right is the default val

    recipe_name = recipe_name.lower()
    recipe_name = recipe_name.replace('_', ' ')

    

    list_of_dict_nodes = create_list_dict_nodes()
    top_k_dict_nodes = heapq.nlargest(10, list_of_dict_nodes, key=lambda node: node.get('Popularity'))
    
    for dict_node in top_k_dict_nodes: 
        recipe_name_node = dict_node.get("RecipeName")
        recipe_name_node = recipe_name_node.lower()
        if recipe_name_node == recipe_name: 
            return Response({"result" : dict_node}) 
            #recipe_in_queue = True
    return Response({"result": None})

@api_view(['GET'])
def recipes_trie_names(request):
    # These functions can pull data from db
    # Transform data
    # Send emails and so on
    
    # need to map this action/view to a url, when we get a request at the url this funciton will be called
    # person = create_list_dict_nodes()
    return Response({'hello': 'world'})






