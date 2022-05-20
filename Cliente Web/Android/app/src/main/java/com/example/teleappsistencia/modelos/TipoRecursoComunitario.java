package com.example.teleappsistencia.modelos;

import java.io.Serializable;

public class TipoRecursoComunitario implements Serializable {
    private String nombreTipoRecursoComunitario;

    public TipoRecursoComunitario(String nombreTipoRecursoComunitario) {
        this.nombreTipoRecursoComunitario = nombreTipoRecursoComunitario;
    }

    public String getNombreTipoRecursoComunitario() {
        return nombreTipoRecursoComunitario;
    }
}
