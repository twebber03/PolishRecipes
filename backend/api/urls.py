from django.urls import path
from .views import recipes_deque_view, recipes_priority_view, recipes_pagination_priority, recipes_pagination_dequeue, recipes_trie_names

urlpatterns = [
    path('alldata/deque/', recipes_deque_view),
    path('alldata/priority/', recipes_priority_view),
    path('pagination/priority/', recipes_pagination_priority),
    path('pagination/deque/', recipes_pagination_dequeue), 
    path('trie/', recipes_trie_names), 
]
