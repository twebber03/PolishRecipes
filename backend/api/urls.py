from django.urls import path
from .views import recipes_pagination_priority, recipes_pagination_reverse_priority, recipes_trie_names, request_recipe_pq, recipe_trie, request_recipes_by_tag, search_recipe

urlpatterns = [
    path('main_carousel/', recipes_pagination_priority),
    path('discover_carousel/', recipes_pagination_reverse_priority),
    path('main_dish/', request_recipe_pq),
    path('tag_dish/', request_recipes_by_tag),
    path('recipe_dish/', search_recipe),
    path('trie/', recipes_trie_names), 
    path('trie_dish/', recipe_trie), 
]
