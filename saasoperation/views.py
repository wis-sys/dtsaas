from django.shortcuts import render_to_response
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib import auth
from django.core.context_processors import csrf

from django.contrib.auth.models import User

import json

def control(request,username):
	return render_to_response('control.html',{'src':0})