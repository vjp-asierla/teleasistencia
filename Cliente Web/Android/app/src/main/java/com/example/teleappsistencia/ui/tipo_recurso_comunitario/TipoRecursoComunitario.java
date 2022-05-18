package com.example.teleappsistencia.ui.tipo_recurso_comunitario;

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
