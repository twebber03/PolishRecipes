from django.urls import path
from .views import recipes_pagination_priority, recipes_pagination_reverse_priority, recipes_trie_names, request_recipe, recipe_trie, request_recipe_by_tag

urlpatterns = [
    path('main_carousel/', recipes_pagination_priority),
    path('discover_carousel/', recipes_pagination_reverse_priority),
    path('main_dish/', request_recipe),
    path('tag_dish/', request_recipe_by_tag),
    path('trie/', recipes_trie_names), 
    path('trie_dish/', recipe_trie), 
]
