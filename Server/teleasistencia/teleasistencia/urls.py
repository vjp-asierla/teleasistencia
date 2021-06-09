"""teleasistencia URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls import include, url
from django.contrib import admin
from django.urls import path
from django.contrib.auth import views

#Django-Rest:
from rest_framework import routers
from teleasistenciaApp.rest_django import views_rest

#Router para la API REST
# Con trailing_slash=False hacemos que no intermprete la / final de la url, con esto podemos hacer GET, POST y DELETE
router = routers.DefaultRouter(trailing_slash=False)
router.register(r'users', views_rest.UserViewSet)
router.register(r'groups', views_rest.GroupViewSet)
router.register(r'tipo_recurso_comunitario', views_rest.Tipo_Recurso_Comunitario_ViewSet)
router.register(r'recurso_comunitario', views_rest.Recurso_Comunitario_ViewSet)
router.register(r'centro_sanitario', views_rest.Centro_Sanitario_ViewSet)
router.register(r'tipo_centro_sanitario', views_rest.Tipo_Centro_Sanitario_ViewSet)
router.register(r'tipo_alarma', views_rest.Tipo_Alarma_ViewSet)
router.register(r'clasificacion_alarma', views_rest.Clasificacion_Alarma_ViewSet)
router.register(r'direccion', views_rest.Direccion_ViewSet)
router.register(r'persona', views_rest.Persona_ViewSet)



urlpatterns = [
#path('admin/', admin.site.urls),
    url(r'^teleasistencia/', include('teleasistenciaApp.urls')),
    url(r'^admin/', admin.site.urls, name='admin'),
    #URLS de login y logout de django.contrib.auth:
    url(r'^login/$', views.LoginView.as_view(), name='login'),
    url(r'^logout/$', views.LogoutView.as_view(), name='logout'),

    #Django Api Rest Framework
    path('api-rest/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    #Django Rest social Auth:
    url(r'^auth/', include('rest_framework_social_oauth2.urls')),
]
