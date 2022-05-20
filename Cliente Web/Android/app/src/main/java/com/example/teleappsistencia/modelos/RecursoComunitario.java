package com.example.teleappsistencia.modelos;

import androidx.annotation.NonNull;

import com.google.gson.annotations.SerializedName;

import java.io.Serializable;

public class RecursoComunitario implements Serializable {

    @SerializedName("id")
    private int id;
    @SerializedName("nombre")
    private String nombre;
    @SerializedName("telefono")
    private String telefono;
    @SerializedName("id_ripos_recurso_comunitario")
    private Object tipoRecursoComunitario;
    @SerializedName("id_direccion")
    private Object dirección;


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

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public Object getTipoRecursoComunitario() {
        return tipoRecursoComunitario;
    }

    public void setTipoRecursoComunitario(Object tipoRecursoComunitario) {
        this.tipoRecursoComunitario = tipoRecursoComunitario;
    }

    public Object getDirección() {
        return dirección;
    }

    public void setDirección(Object dirección) {
        this.dirección = dirección;
    }

    @NonNull
    @Override
    public String toString() {
        return this.nombre;
    }
}
