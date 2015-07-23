from django.shortcuts import render_to_response
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib import auth
from django.core.context_processors import csrf

from django.contrib.auth.models import User

import json

def home(request):
    return render_to_response('home.html',{'src':0})


def discipline(request):
    return render_to_response('discipline.html',{'src':0})
