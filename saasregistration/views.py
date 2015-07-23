from django.shortcuts import render_to_response
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib import auth
from django.core.context_processors import csrf

from saasregistration.forms import MyRegistrationForm
from saasregistration.forms import MyLoginForm
from django.contrib.auth.models import User

import json


def login(request):
    if request.method=='POST':
        username = request.POST.get('username','')
        password = request.POST.get('password','')
        user = auth.authenticate(username = username, password = password)  

        if user is not None:
            auth.login(request, user)

            request.session["UserName"] = username
            response = HttpResponseRedirect('/u/'+username)

            return response
    args = {}
    args.update(csrf(request))
    args['form'] = MyLoginForm()

    return render_to_response('login.html',args)


def register(request):
    if request.method=='POST':
        form = MyRegistrationForm(request.POST)	
        if form.is_valid():
            form.save()
            username = request.POST.get('username','')
            user_obj = User.objects.get(username=username)
            response = HttpResponseRedirect('/u/'+username) # replace redirect with HttpResponse or render
            # up_obj = UserProfile(user=user_obj)
            # up_obj.save()

            password = request.POST['password1']
            user = auth.authenticate(username=username, password=password)
            auth.login(request, user)
            request.session["UserName"] = username
            return response
            return HttpResponse(username)
    args = {}
    args.update(csrf(request))
    args['form'] = MyRegistrationForm()

    return render_to_response('register.html',args)	

def logout(request):
    auth.logout(request)
    try:
        del request.session['UserName']
    except KeyError:
        pass
    return HttpResponseRedirect('/')
