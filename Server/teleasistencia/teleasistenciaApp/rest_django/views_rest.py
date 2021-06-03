from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
#Serializadores generales
from rest_framework.response import Response

from ..rest_django.serializers import UserSerializer, GroupSerializer

#Serializadores propios
from ..rest_django.serializers import *
#Modelos propios
from ..models import *


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    #permission_classes = [permissions.IsAdminUser]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    #permission_classes = [permissions.IsAdminUser]

class Tipo_Recurso_Comunitario_ViewSet(viewsets.ModelViewSet):
    """
    API endpoint para las empresas
    """
    queryset = Tipo_Recurso_Comunitario.objects.all()
    serializer_class = Tipo_Recurso_Comunitario_Serializer
    #permission_classes = [permissions.IsAdminUser] # Si quieriéramos para todos los registrados: IsAuthenticated]

class Recurso_Comunitario_ViewSet(viewsets.ModelViewSet):
    """
    API endpoint para las empresas
    """
    queryset = Recurso_Comunitario.objects.all()
    serializer_class = Recurso_Comunitario_Serializer
    #permission_classes = [permissions.IsAdminUser] # Si quieriéramos para todos los registrados: IsAuthenticated]


class Centro_Sanitario_ViewSet(viewsets.ModelViewSet):
    """
    API endpoint para las empresas
    """
    queryset = Centro_Sanitario.objects.all()
    serializer_class = Centro_Sanitario_Serializer
    #permission_classes = [permissions.IsAdminUser] # Si quieriéramos para todos los registrados: IsAuthenticated]

    def create(self, request, *args, **kwargs):

        # Comprobamos que el tipo de centro sanitario existe
        tipo_centro_sanitario = Tipo_Centro_Sanitario.objects.get(pk=request.data.get("id_tipos_centro_sanitario"))
        if tipo_centro_sanitario is None:
            return Response("Error: tipo_centro_sanitario")

        # Obtenemos los datos de dirección y los almacenamos
        direccion_serializer = Direccion_Serializer(data=request.data.get("direccion"))
        if direccion_serializer.is_valid():
            direccion= direccion_serializer.save()
        else:
            return Response("Error: direccion")

        # Creamos el centro sanitario con el tipo de centro y la dirección
        centro_sanitario = Centro_Sanitario(
            nombre=request.data.get("nombre"),
            telefono=request.data.get("telefono"),
            id_tipos_centro_sanitario=tipo_centro_sanitario,
            id_direccion=direccion
        )
        centro_sanitario.save()

        #Devolvemos los datos
        centro_sanitario_serializer = Centro_Sanitario_Serializer(centro_sanitario)
        return Response(centro_sanitario_serializer.data)

class Tipo_Centro_Sanitario_ViewSet(viewsets.ModelViewSet):
    """
    API endpoint para las empresas
    """
    queryset = Tipo_Centro_Sanitario.objects.all()
    serializer_class = Tipo_Centro_Sanitario_Serializer
    #permission_classes = [permissions.IsAdminUser] # Si quieriéramos para todos los registrados: IsAuthenticated]


class Tipo_Alarma_ViewSet(viewsets.ModelViewSet):
    """
    API endpoint para las empresas
    """
    queryset = Tipo_Alarma.objects.all()
    serializer_class = Tipo_Alarma_Serializer
    #permission_classes = [permissions.IsAdminUser] # Si quieriéramos para todos los registrados: IsAuthenticated]


class Clasificacion_Alarma_ViewSet(viewsets.ModelViewSet):
    """
    API endpoint para las empresas
    """
    queryset = Clasificacion_Alarma.objects.all()
    serializer_class = Clasificacion_Alarma_Serializer
    #permission_classes = [permissions.IsAdminUser] # Si quieriéramos para todos los registrados: IsAuthenticated]



class Direccion_ViewSet(viewsets.ModelViewSet):
    """
    API endpoint para las empresas
    """
    queryset = Direccion.objects.all()
    serializer_class = Direccion_Serializer
    #permission_classes = [permissions.IsAdminUser] # Si quieriéramos para todos los registrados: IsAuthenticated]


