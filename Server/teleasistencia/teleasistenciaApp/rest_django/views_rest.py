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
    # Habría que descomentar la siguiente línea para permitir las acciones sólo a los usuarios autenticados (Authorization en la petición POST)
    #permission_classes = [permissions.IsAuthenticated] # Si quieriéramos para todos los registrados: IsAuthenticated]

class Recurso_Comunitario_ViewSet(viewsets.ModelViewSet):
    """
    API endpoint para las empresas
    """
    queryset = Recurso_Comunitario.objects.all()
    serializer_class = Recurso_Comunitario_Serializer
    #permission_classes = [permissions.IsAdminUser] # Si quieriéramos para todos los registrados: IsAuthenticated]

    def create(self, request, *args, **kwargs):

        # Comprobamos que el tipo de centro sanitario existe
        tipos_recurso_comunitario = Tipo_Recurso_Comunitario.objects.get(pk=request.data.get("id_tipos_recurso_comunitario"))
        if tipos_recurso_comunitario is None:
            return Response("Error: tipos_recurso_comunitario")

        # Obtenemos los datos de dirección y los almacenamos
        direccion_serializer = Direccion_Serializer(data=request.data.get("direccion"))
        if direccion_serializer.is_valid():
            direccion = direccion_serializer.save()
        else:
            return Response("Error: direccion")

        # Creamos el centro sanitario con el tipo de centro y la dirección
        recurso_comunitario = Recurso_Comunitario(
            nombre=request.data.get("nombre"),
            telefono=request.data.get("telefono"),
            id_tipos_recurso_comunitario=tipos_recurso_comunitario,
            id_direccion=direccion
        )
        recurso_comunitario.save()

        # Devolvemos los datos
        recurso_comunitario_serializer = Recurso_Comunitario_Serializer(recurso_comunitario)
        return Response(recurso_comunitario_serializer.data)


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

    def create(self, request, *args, **kwargs):

        # Comprobamos que el tipo de centro sanitario existe
        clasificacion_alarma = Clasificacion_Alarma.objects.get(pk=request.data.get("id_clasificacion_alarma"))
        if clasificacion_alarma is None:
            return Response("Error: id_clasificacion_alarma")

        # Creamos el tipo_alarma
        tipo_alarma = Tipo_Alarma(
            nombre=request.data.get("nombre"),
            codigo=request.data.get("codigo"),
            es_dispositivo=request.data.get("es_dispositivo"),
            id_clasificacion_alarma=clasificacion_alarma
        )
        tipo_alarma.save()

        #Devolvemos el tipo de alarma creado
        tipo_alarma_serializer = Tipo_Alarma_Serializer(tipo_alarma)
        return Response(tipo_alarma_serializer.data)

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

class Persona_ViewSet(viewsets.ModelViewSet):
    """
    API endpoint para las empresas
    """
    queryset = Persona.objects.all()
    serializer_class = Persona_Serializer
    #permission_classes = [permissions.IsAdminUser] # Si quieriéramos para todos los registrados: IsAuthenticated]

    def create(self, request, *args, **kwargs):

        # Comprobamos que el tipo de centro sanitario existe
        pk=request.data.get("id_direccion")

        # Comprobamos si los datos se introducen para una dirección ya existente,
        # En el caso de ser una dirección nueva
        if pk is None:
            # Obtenemos los datos de dirección y los almacenamos
            direccion_serializer = Direccion_Serializer(data=request.data.get("direccion"))
            if direccion_serializer.is_valid():
                direccion = direccion_serializer.save()
            else:
                return Response("Error: direccion")

            persona_class = Persona_Serializer(request.data)
            persona_class.data.id_direccion = direccion
            return Response(persona_class.data)
            # Creamos el tipo_alarma
            persona = Persona(
                nombre=request.data.get("nombre"),
                codigo=request.data.get("codigo"),
                es_dispositivo=request.data.get("es_dispositivo"),
                id_clasificacion_alarma=clasificacion_alarma
            )
            persona.save()
            return Response(persona)

        # en el caso de ser una dirección existente
        else:
            direccion = Direccion.objects.get(pk=request.data.get("id_direccion"))
            # Creamos la persona
            persona = Persona(
                nombre=request.data.get("nombre"),
                apellidos=request.data.get("apellidos"),
                dni=request.data.get("dni"),
                fecha_nacimiento=request.data.get("fecha_nacimiento"),
                SEXO_ENUM=1,
                telefono_fijo=request.data.get("telefono_fijo"),
                telefono_movil=request.data.get("telefono_movil"),
                id_direccion=direccion
            )
            persona.save()

            # Devolvemos el tipo de alarma creado
            persona_serializer = Persona_Serializer(persona)
            return Response(persona_serializer.data)