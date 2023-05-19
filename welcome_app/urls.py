from django.conf.urls import url
from . import views


url;patters = [
    url(r'^$', views.welcome, name='welcome')
]