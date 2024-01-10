from django.urls import path

from .views import *

app_name = 'chats'

urlpatterns = [
    path('chat/', chat_view, name='chat'),
    path("<str:room_name>/", room_view, name='room')
]