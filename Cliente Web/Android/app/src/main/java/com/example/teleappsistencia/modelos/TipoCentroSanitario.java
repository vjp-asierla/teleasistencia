package com.example.teleappsistencia.modelos;

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
