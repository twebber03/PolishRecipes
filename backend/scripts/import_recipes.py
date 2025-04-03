# djangoRequestsScript/import_recipes.py
# python djangoRequestsScript/import_recipes.py // one time use of script to pull in the recipes

import os
import django
import requests

endpoint = "https://therecipedb.vercel.app/api/search?name=Pierogi"
# endpoint = "https://httpbin.org" 

# Regular HTTP Request will return HTML (very minimal html in client side rendering and the full blown html views in server side rendering)
# REST API HTTP Request will usually send back json (Javascript Object Notation) kinda like a python dictionary
get_response = requests.get(endpoint)  # API a function method thats built into it
# print(get_response.json()) # converts json to python dictionary


print(type(get_response))

