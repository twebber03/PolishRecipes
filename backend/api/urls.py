from django.urls import path
from .views import recipes_pagination_priority, recipes_trie_names

urlpatterns = [
    path('main_carousel/', recipes_pagination_priority),
    path('trie/', recipes_trie_names), 
]
