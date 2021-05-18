from django.db import models
from model_utils import Choices
from django.utils.timezone import now
from django.contrib.auth.models import User


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
    id_terminal = models.ForeignKey(Terminal, null=True, on_delete=models.SET_NULL)
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


class Relacion_Paciente_Persona(models.Model):
    id_paciente = models.ForeignKey(Paciente, null=True, on_delete=models.SET_NULL)
    id_persona = models.ForeignKey(Persona, null=True, on_delete=models.SET_NULL)
    tipo_relacion = models.CharField(max_length=200, null=False)
    tiene_llaves_vivienda = models.BooleanField(default=False)
    disponibilidad = models.CharField(max_length=200)
    observaciones = models.CharField(max_length=4000)
    prioridad = models.IntegerField()
    def __str__(self):
        return self.id_paciente+"-->"+self.id_persona

class Relacion_Paciente_Centro(models.Model):
    id_paciente = models.ForeignKey(Paciente, null=True, on_delete=models.SET_NULL)
    id_centro_sanitario = models.ForeignKey(Centro_Sanitario, null=True, on_delete=models.SET_NULL)
    persona_contacto = models.CharField(max_length=200, null=False)
    distancia_km = models.IntegerField()
    tiempo_minutos = models.IntegerField()
    observaciones = models.CharField(max_length=4000)
    def __str__(self):
        return self.id_paciente+"-->"+self.id_centro_sanitario


class Terminal(models.Model):
    numero_terminal = models.CharField(max_length=30, null=False)
    id_titular = models.ForeignKey(Paciente, null=True, on_delete=models.SET_NULL)
    id_tipo_vivienda = models.ForeignKey(Tipo_Vivienda, null=True, on_delete=models.SET_NULL)
    modo_acceso_vivienda = models.CharField(max_length=400)
    barreras_arquitectonicas = models.CharField(max_length=5000)
    def __str__(self):
        return self.id_paciente+" "+self.numero_terminal


class Tipo_Vivienda(models.Model):
    nombre = models.CharField(max_length=200, null=False)
    def __str__(self):
        return self.nombre


class Relacion_Terminal_Recurso_Comunitario(models.Model):
    id_terminal = models.ForeignKey(Terminal, null=True, on_delete=models.SET_NULL)
    id_recurso_comunitario = models.ForeignKey(Recurso_Comunitario, null=True, on_delete=models.SET_NULL)
    def __str__(self):
        return self.id_terminal+"-->"+self.id_recurso_comunitario


class Agenda(models.Model):
    id_paciente = models.ForeignKey(Paciente, null=True, on_delete=models.SET_NULL)
    id_tipo_agenda = models.ForeignKey(Tipo_Agenda, null=True, on_delete=models.SET_NULL)
    id_persona = models.ForeignKey(Tipo_Agenda, null=True, on_delete=models.SET_NULL) #OJO: O bien Paciente o bien persona
    fecha_registro = models.DateField(null=False, default=now)
    fecha_prevista = models.DateField(null=False)
    fecha_resolucion = models.DateField()
    observaciones = models.CharField(max_length=4000)
    def __str__(self):
        return self.id_paciente+" "+self.id_tipo_agenda+self.fecha_registro



class Historico_Agenda_Llamadas(models.Model):
    id_agenda = models.ForeignKey(Agenda, null=True, on_delete=models.SET_NULL)
    id_teleoperador = models.ForeignKey(User, null=True, on_delete=models.SET_NULL) #OJO: User de los modelos de admin.
    fecha_llamada = models.DateField(null=False, default=now)
    observaciones = models.CharField(max_length=4000)
    def __str__(self):
        return self.id_agenda+"-->"+self.id_tipo_agenda+self.fecha_registro


class Historico_Terminal_Subtipo_Alarma(models.Model):
    id_terminal = models.ForeignKey(Terminal, null=True, on_delete=models.SET_NULL)
    id_subtipo_alarma = models.ForeignKey(Subtipo_Alarma, null=True, on_delete=models.SET_NULL)
    def __str__(self):
        return self.id_terminal+"--"+self.id_subtipo_alarma


class Alarma(models.Model):
    id_tipo_alarma = models.ForeignKey(Tipo_Alarma, null=True, on_delete=models.SET_NULL)
    ESTADO_ENUM = Choices("Abierta", "Cerrada")
    estado_alarma = models.CharField(choices=ESTADO_ENUM, default=ESTADO_ENUM.Abierta, max_length=20)
    fecha_registro = models.DateField(null=False, default=now)
    id_teleoperador = models.ForeignKey(User, null=True, on_delete=models.SET_NULL) # OJO: User de los modelos de admin.
    id_paciente_ucr = models.ForeignKey(Paciente, null=True, on_delete=models.SET_NULL)  # OJO: Puede ser null si no lo avisó un paciente
    id_terminal = models.ForeignKey(Terminal, null=True, on_delete=models.SET_NULL)  # OJO: Puede ser null si no lo avisó un terminal
    observaciones = models.CharField(max_length=10000)
    resumen = models.CharField(max_length=10000)
    def __str__(self):
        return self.id_tipo_alarma+" "+self.estado_alarma+" "+self.fecha_registro


class Centro_Sanitario_En_Alarma(models.Model):
    id_alarma = models.ForeignKey(Alarma, null=True, on_delete=models.SET_NULL)
    id_centro_sanitario = models.ForeignKey(Centro_Sanitario, null=True, on_delete=models.SET_NULL)
    fecha_registro = models.DateField(null=False, default=now)
    persona = models.CharField(max_length=1000)
    acuerdo_alcanzado = models.CharField(max_length=5000)
    def __str__(self):
        return self.id_alarma+" "+self.id_centro_sanitario+" "+self.fecha_registro

class Persona_Contacto_En_Alarma(models.Model):
    id_alarma = models.ForeignKey(Alarma, null=True, on_delete=models.SET_NULL)
    id_persona_contacto = models.ForeignKey(Persona, null=True, on_delete=models.SET_NULL)
    fecha_registro = models.DateField(null=False, default=now)
    acuerdo_alcanzado = models.CharField(max_length=5000)
    def __str__(self):
        return self.id_alarma+" "+self.id_persona_contacto+" "+self.fecha_registro

class Recursos_Comunitarios_En_Alarma(models.Model):
    id_alarma = models.ForeignKey(Alarma, null=True, on_delete=models.SET_NULL)
    id_recurso_comunitario = models.ForeignKey(Recurso_Comunitario, null=True, on_delete=models.SET_NULL)
    fecha_registro = models.DateField(null=False, default=now)
    persona = models.CharField(max_length=1000)
    acuerdo_alcanzado = models.CharField(max_length=5000)
    def __str__(self):
        return self.id_alarma+" "+self.id_persona_contacto+" "+self.fecha_registro

class Tipo_Situacion(models.Model):
    nombre = models.CharField()
    def __str__(self):
        return self.nombre

class Historico_Tipo_Situacion(models.Model):
    id_tipo_situacion = models.ForeignKey(Tipo_Situacion, null=True, on_delete=models.SET_NULL)
    id_terminal_alarma = models.ForeignKey(Terminal, null=True, on_delete=models.SET_NULL)
    def __str__(self):
        return self.id_tipo_situacion+"-->"+self.id_terminal_alarma


