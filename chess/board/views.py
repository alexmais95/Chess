from django.shortcuts import render


def index(request):
    return render(request, 'board/center/board.html')

def first_page(request):
    return render(request, 'board/main.html')
