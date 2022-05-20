package com.example.teleappsistencia.api.clases;

import com.example.teleappsistencia.utilidad.Utilidad;
import com.google.gson.annotations.SerializedName;

import java.io.Serializable;

public class Paciente implements Serializable {

    @SerializedName("id")
    private int id;
    @SerializedName("tiene_ucr")
    private boolean tiene_ucr;
    @SerializedName("numero_expediente")
    private String numero_expediente;
    @SerializedName("numero_seguridad_social")
    private String numero_seguridad_social;
    @SerializedName("prestacion_otros_servicios_sociales")
    private String prestacion_otros_servicios_sociales;
    @SerializedName("observaciones_medicas")
    private String observaciones_medicas;
    @SerializedName("intereses_y_actividades")
    private String intereses_y_actividades;
    @SerializedName("id_terminal")
    private Object id_terminal;
    @SerializedName("id_persona")
    private Object id_persona;
    @SerializedName("id_tipo_modalidad_paciente")
    private Object id_tipo_modalidad_paciente;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public boolean isTiene_ucr() {
        return tiene_ucr;
    }

    public void setTiene_ucr(boolean tiene_ucr) {
        this.tiene_ucr = tiene_ucr;
    }

    public String getNumero_expediente() {
        return numero_expediente;
    }

    public void setNumero_expediente(String numero_expediente) {
        this.numero_expediente = numero_expediente;
    }

    public String getNumero_seguridad_social() {
        return numero_seguridad_social;
    }

    public void setNumero_seguridad_social(String numero_seguridad_social) {
        this.numero_seguridad_social = numero_seguridad_social;
    }

    public String getPrestacion_otros_servicios_sociales() {
        return prestacion_otros_servicios_sociales;
    }

    public void setPrestacion_otros_servicios_sociales(String prestacion_otros_servicios_sociales) {
        this.prestacion_otros_servicios_sociales = prestacion_otros_servicios_sociales;
    }

    public String getObservaciones_medicas() {
        return observaciones_medicas;
    }

    public void setObservaciones_medicas(String observaciones_medicas) {
        this.observaciones_medicas = observaciones_medicas;
    }

    public String getIntereses_y_actividades() {
        return intereses_y_actividades;
    }

    public void setIntereses_y_actividades(String intereses_y_actividades) {
        this.intereses_y_actividades = intereses_y_actividades;
    }

    public Object getId_terminal() {
        return id_terminal;
    }

    public void setId_terminal(int id_terminal) {
        this.id_terminal = id_terminal;
    }

    public Object getId_persona() {
        return id_persona;
    }

    public void setId_persona(int id_persona) {
        this.id_persona = id_persona;
    }

    public Object getId_tipo_modalidad_paciente() {
        return id_tipo_modalidad_paciente;
    }

    public void setId_tipo_modalidad_paciente(int id_tipo_modalidad_paciente) {
        this.id_tipo_modalidad_paciente = id_tipo_modalidad_paciente;
    }

    @Override
    public String toString() {
        Persona persona = (Persona) Utilidad.getObjeto(getId_persona(), "Persona");
        return persona.getNombre()+" "+persona.getApellidos();
    }
}
