from django.db import models
from model_utils import Choices
# Create your models here.




class Tipo_Agenda(models.Model):
    nombre = models.CharField(max_length=200)
    codigo = models.IntegerField()
    IMPORTANCIA_ENUM = Choices("Urgente","Importante")
    importancia = models.CharField(choices=IMPORTANCIA_ENUM, default=IMPORTANCIA_ENUM.Importante, max_length=20)
    def __str__(self):
        return self.nombre+" "+self.codigo+" "+self.importancia


class Direccion(models.Model):
    localidad = models.CharField(max_length=200, null=False)
    provincia = models.CharField(max_length=200, null=False)
    direccion = models.CharField(max_length=200, null=False)
    codigo_postal = models.CharField(max_length=200, null=False)
    def __str__(self):
        return self.localidad+" "+self.provincia+" "+self.direccion+" "+self.codigo_postal


class Subtipo_Alarma(models.Model):
    nombre = models.CharField(max_length=200, null=False)
    codigo = models.CharField(max_length=200)
    es_dispositivo = models.BooleanField(null=False)
    def __str__(self):
        return self.nombre+" "+self.codigo+" "+self.es_dispositivo

class Tipo_Alarma(models.Model):
    nombre = models.CharField(max_length=200, null=False)
    codigo = models.CharField(max_length=200)
    id_subtipo_alarma = models.ForeignKey(Subtipo_Alarma, null=True, on_delete=models.SET_NULL)
    def __str__(self):
        return self.nombre+" "+self.codigo

class Tipo_Recurso_Comunitario(models.Model):
    nombre = models.CharField(max_length=200, null=False)
    def __str__(self):
        return self.nombre


class Recurso_Comunitario(models.Model):
    id_tipos_recurso_comunitario = models.ForeignKey(Tipo_Recurso_Comunitario, null=True, on_delete=models.SET_NULL)
    id_direccion = models.ForeignKey(Direccion, null=True, on_delete=models.SET_NULL)
    telefono = models.CharField(max_length=20)
    def __str__(self):
        return self.id_tipos_recurso_comunitario+"--"+self.id_direccion


class Persona(models.Model):
    nombre = models.CharField(max_length=200, null=False)
    apellidos = models.CharField(max_length=200, null=False)
    dni = models.CharField(max_length=20, null=False)
    fecha_nacimiento = models.DateField()
    SEXO_ENUM = Choices("Hombre", "Mujer")
    importancia = models.CharField(choices=SEXO_ENUM, default=SEXO_ENUM.Hombre, max_length=20)
    telefono_fijo = models.CharField(max_length=20)
    telefono_movil = models.CharField(max_length=20)
    id_direccion = models.ForeignKey(Direccion, null=True, on_delete=models.SET_NULL)
    def __str__(self):
        return self.localidad+" "+self.provincia+" "+self.direccion+" "+self.codigo_postal


class Tipo_Centro_Sanitario(models.Model):
    nombre = models.CharField(max_length=200, null=False)
    def __str__(self):
        return self.nombre

class Centro_Sanitario(models.Model):
    id_tipos_centro_sanitario = models.ForeignKey(Tipo_Centro_Sanitario, null=True, on_delete=models.SET_NULL)
    id_direccion = models.ForeignKey(Direccion, null=True, on_delete=models.SET_NULL)
    telefono = models.CharField(max_length=20)
    def __str__(self):
        return self.id_tipos_centro_sanitario+"--"+self.id_direccion


class Tipo_Modalidad_Paciente(models.Model):
    nombre = models.CharField(max_length=200, null=False)
    def __str__(self):
        return self.nombre


class Paciente(models.Model):
    #TODO: ID_Numero_terminal
    id_persona = models.ForeignKey(Persona, null=True, on_delete=models.SET_NULL)
    tiene_ucr = models.BooleanField(null=False, default=False)
    numero_expediente = models.CharField(max_length=200)
    numero_seguridad_social = models.CharField(max_length=200, null=False)
    prestacion_otros_servicios_sociales = models.CharField(max_length=2000, null=False)
    observaciones_medicas = models.CharField(max_length=6000, null=False)
    intereses_y_actividades = models.CharField(max_length=6000, null=False)
    id_tipo_modalidad_paciente = models.ForeignKey(Tipo_Modalidad_Paciente, null=True, on_delete=models.SET_NULL)
    def __str__(self):
        return self.id_persona+" " #TODO: Poner también el número de Terminal