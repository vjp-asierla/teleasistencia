from django.contrib.auth.models import User, Group
from rest_framework import serializers

#Modelos propios:
from ..models import *

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


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
