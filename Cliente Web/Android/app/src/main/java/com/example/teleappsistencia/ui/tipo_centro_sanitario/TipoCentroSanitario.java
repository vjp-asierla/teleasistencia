package com.example.teleappsistencia.ui.tipo_centro_sanitario;

import java.io.Serializable;

public class TipoCentroSanitario implements Serializable {
    private String nombreTipoCentroSanitario;

    public TipoCentroSanitario(String nombreTipoCentroSanitario) {
        this.nombreTipoCentroSanitario = nombreTipoCentroSanitario;
    }

    public String getNombreTipoCentroSanitario() {
        return nombreTipoCentroSanitario;
    }
}
