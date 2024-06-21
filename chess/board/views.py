from django.shortcuts import render


# def index(request):
#     return render(request, 'board/center/board.html')

def index(request):
    return render(request, 'board/center/sec_board.html')

def first_page(request):
    return render(request, 'board/main.html')
