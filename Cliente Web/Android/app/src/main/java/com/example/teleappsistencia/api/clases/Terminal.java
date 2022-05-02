package com.example.teleappsistencia.api.clases;

import com.google.gson.annotations.SerializedName;

import java.io.Serializable;

public class Terminal implements Serializable {

    @SerializedName("id")
    private int id;
    @SerializedName("numero_terminal")
    private Object numero_terminal;
    @SerializedName("modo_acceso_vivienda")
    private String modo_acceso_vivienda;
    @SerializedName("barreras_arquitectónicas")
    private String barreras_arquitectónicas;
    @SerializedName("id_titular")
    private Object id_titular;
    @SerializedName("id_tipo_vivienda")
    private Object id_tipo_vivienda;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Object getNumero_terminal() {
        return numero_terminal;
    }

    public void setNumero_terminal(int numero_terminal) {
        this.numero_terminal = numero_terminal;
    }

    public String getModo_acceso_vivienda() {
        return modo_acceso_vivienda;
    }

    public void setModo_acceso_vivienda(String modo_acceso_vivienda) {
        this.modo_acceso_vivienda = modo_acceso_vivienda;
    }

    public String getBarreras_arquitectónicas() {
        return barreras_arquitectónicas;
    }

    public void setBarreras_arquitectónicas(String barreras_arquitectónicas) {
        this.barreras_arquitectónicas = barreras_arquitectónicas;
    }

    public Object getId_titular() {
        return id_titular;
    }

    public void setId_titular(Object id_titular) {
        this.id_titular = id_titular;
    }

    public Object getId_tipo_vivienda() {
        return id_tipo_vivienda;
    }

    public void setId_tipo_vivienda(int id_tipo_vivienda) {
        this.id_tipo_vivienda = id_tipo_vivienda;
    }
}
