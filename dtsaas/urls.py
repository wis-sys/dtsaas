"""wis_sys URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import patterns, include, url
# from django.contrib.auth.views import login, logout
from django.contrib import admin

import settings

admin.autodiscover()

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)), 
]

if settings.DEBUG:  
   urlpatterns += patterns('',   
        url(r'^static/(?P<path>.*)$','django.views.static.serve',{'document_root':settings.STATIC_ROOT}), ) 

urlpatterns = patterns('saasregistration',
    (r'^accounts/login/$',  'views.login'),
    (r'^accounts/logout/$', 'views.logout'),
    (r'^accounts/register/$', 'views.register'),
)

urlpatterns += patterns('saasapplication',
    (r'^$', 'views.home'),
    (r'^discipline/$', 'views.discipline'),    
)

urlpatterns += patterns('saasoperation',
    (r'^u/(.*?)/$', 'views.control'),
    # (r'^endless/$', 'views.endlessHome'),
    # (r'^category/endless/$', 'views.endlessCategory'),     
    # (r'^category/(.*?)/$', 'views.category'),
    # (r'^save/note$', 'views.saveNote'), 
    # (r'^save/note2private$', 'views.saveNote2Private'),   
    # (r'^save/meso$', 'views.saveMeso'),
    # (r'^save/macro$', 'views.saveMacro'),    
    # (r'^search$', 'views.search_resources'),
    # (r'^macro/([0-9]*?)/$', 'macro.display_macro'),
    # (r'^meso/([0-9]*?)/$', 'meso.display_meso'),
    # (r'^micro/([0-9]*?)/$', 'micro.display_micro'),
)


# urlpatterns += patterns('',
#     (r'^thumbnail/(?P<path>.*)$', 'django.views.static.serve',{'document_root': settings.MEDIA_ROOT}),
# )