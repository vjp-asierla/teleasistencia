package com.example.teleappsistencia.modelos;

import com.google.gson.annotations.SerializedName;

import java.io.Serializable;

public class TipoAlarma implements Serializable {

    @SerializedName("id")
    private int id;
    @SerializedName("nombre")
    private String nombre;
    @SerializedName("codigo")
    private String codigo;
    @SerializedName("es_dispositivo")
    private boolean esDispositivo;
    @SerializedName("id_clasificacion_alarma")
    private Object clasificacionAlarma;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public boolean isEsDispositivo() {
        return esDispositivo;
    }

    public void setEsDispositivo(boolean esDispositivo) {
        this.esDispositivo = esDispositivo;
    }

    public Object getClasificacionAlarma() {
        return clasificacionAlarma;
    }

    public void setClasificacionAlarma (int clasificacionAlarma) {
        this.clasificacionAlarma = clasificacionAlarma;
    }

    @Override
    public String toString() {
        return getCodigo()+" - "+getNombre();
    }
}