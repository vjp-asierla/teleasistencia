package com.example.teleappsistencia.modelos;

import java.io.Serializable;

public class TipoModalidadPaciente implements Serializable {
    private String nombreTipoModalidadPaciente;

    public TipoModalidadPaciente(String nombreTipoModalidadPaciente) {
        this.nombreTipoModalidadPaciente = nombreTipoModalidadPaciente;
    }

    public String getNombreTipoModalidadPaciente() {
        return nombreTipoModalidadPaciente;
    }
}
