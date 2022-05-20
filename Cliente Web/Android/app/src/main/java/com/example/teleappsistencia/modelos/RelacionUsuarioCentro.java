package com.example.teleappsistencia.modelos;

import androidx.annotation.NonNull;

import com.example.teleappsistencia.utilidades.Utilidad;
import com.google.gson.annotations.SerializedName;

import java.io.Serializable;

public class RelacionUsuarioCentro implements Serializable {

    @SerializedName("id")
    private int id;
    @SerializedName("persona_contacto")
    private String personaContacto;
    @SerializedName("distancia")
    private int distancia;
    @SerializedName("tiempo")
    private int tiempo;
    @SerializedName("observaciones")
    private String observaciones;
    @SerializedName("id_paciente")
    private Object idPaciente;
    @SerializedName("id_centro_sanitario")
    private Object idCentroSanitario;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPersonaContacto() {
        return personaContacto;
    }

    public void setPersonaContacto(String personaContacto) {
        this.personaContacto = personaContacto;
    }

    public int getDistancia() {
        return distancia;
    }

    public void setDistancia(int distancia) {
        this.distancia = distancia;
    }

    public int getTiempo() {
        return tiempo;
    }

    public void setTiempo(int tiempo) {
        this.tiempo = tiempo;
    }

    public String getObservaciones() {
        return observaciones;
    }

    public void setObservaciones(String observaciones) {
        this.observaciones = observaciones;
    }

    public Object getIdPaciente() {
        return idPaciente;
    }

    public void setIdPaciente(Object idPaciente) {
        this.idPaciente = idPaciente;
    }

    public Object getIdCentroSanitario() {
        return idCentroSanitario;
    }

    public void setIdCentroSanitario(Object idCentroSanitario) {
        this.idCentroSanitario = idCentroSanitario;
    }

    @NonNull
    @Override
    public String toString() {
        CentroSanitario centro = (CentroSanitario) Utilidad.getObjeto(this.getIdCentroSanitario(), "CentroSanitario");
        return centro.getNombre();
    }
}
