from django.shortcuts import render

# Create your views here.

def welcome(request):
    context = {

        'mission statement':
        'video url': # https://www.youtube.com/watch?v=Q8TXgCzxEnw&feature=youtu.be

    }

    return render(request, 'welcome/welcome.html', context)