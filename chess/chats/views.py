from django.shortcuts import render

def chat_view(requests):
    return render (requests, 'chats/chats.html')


def room_view(requests, room_name):
    return render (requests, 'chats/room.html', {'room_name': room_name})
