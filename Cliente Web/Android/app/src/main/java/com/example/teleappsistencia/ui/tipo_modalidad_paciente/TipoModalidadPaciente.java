package com.example.teleappsistencia.ui.tipo_modalidad_paciente;

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
