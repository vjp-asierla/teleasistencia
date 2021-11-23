from django.contrib.auth.models import User, Group, Permission
from rest_framework import serializers

#Modelos propios:
from rest_framework.utils.representation import serializer_repr

from ..models import *

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        depth = 1

class PermissionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Permission
        fields = '__all__'

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['pk', 'name']


class Tipo_Recurso_Comunitario_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Tipo_Recurso_Comunitario
        fields = '__all__' #Indica todos los campos


class Recurso_Comunitario_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Recurso_Comunitario
        fields = '__all__' #Indica todos los campos
        depth = 1


class Centro_Sanitario_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Centro_Sanitario
        fields = '__all__' #Indica todos los campos
        depth = 1


class Tipo_Centro_Sanitario_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Tipo_Centro_Sanitario
        fields = '__all__' #Indica todos los campos


class Tipo_Alarma_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Tipo_Alarma
        fields = '__all__' #Indica todos los campos
        depth = 1


class Clasificacion_Alarma_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Clasificacion_Alarma
        fields = '__all__' #Indica todos los campos


class Direccion_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Direccion
        fields = '__all__' #Indica todos los campos


class Persona_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = '__all__' #Indica todos los campos
        depth = 1


class Agenda_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Agenda
        fields = '__all__' #Indica todos los campos
        depth = 1


class Tipo_Agenda_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Tipo_Agenda
        fields = '__all__'


class Historico_Agenda_Llamadas_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Historico_Agenda_Llamadas
        fields = '__all__'
        depth = 1


class Relacion_Terminal_Recurso_Comunitario_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Relacion_Terminal_Recurso_Comunitario
        fields = '__all__'
        depth = 1


class Terminal_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Terminal
        fields = '__all__'
        depth = 1


class Historico_Tipo_Situación_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Historico_Tipo_Situacion
        fields = '__all__'
        depth = 1


class Tipo_Situacion_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Tipo_Situacion
        fields = '__all__'


class Tipo_Vivienda_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Tipo_Vivienda
        fields = '__all__'


class Relacion_Paciente_Persona_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Relacion_Paciente_Persona
        fields = '__all__'
        depth = 1


class Paciente_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Paciente
        fields = '__all__'
        depth = 1


class Tipo_Modalidad_Paciente_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Tipo_Modalidad_Paciente
        fields = '__all__'


class Recursos_Comunitarios_En_Alarma_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Recursos_Comunitarios_En_Alarma
        fields = '__all__'
        depth = 1


class Alarma_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Alarma
        fields = '__all__'
        depth = 1


class Dispositivos_Auxiliares_en_Terminal_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Dispositivos_Auxiliares_En_Terminal
        fields = '__all__'
        depth = 1


class Centro_Sanitario_En_Alarma_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Centro_Sanitario_En_Alarma
        fields = '__all__'
        depth = 1


class Persona_Contacto_En_Alarma_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Persona_Contacto_En_Alarma
        fields = '__all__'
        depth = 1


class Relacion_Usuario_Centro_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Relacion_Usuario_Centro
        fields = '__all__'
        depth = 1

