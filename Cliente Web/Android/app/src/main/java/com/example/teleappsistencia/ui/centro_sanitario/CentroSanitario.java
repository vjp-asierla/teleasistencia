package com.example.teleappsistencia.ui.centro_sanitario;

import java.io.Serializable;
import java.util.List;

public class CentroSanitario implements Serializable {
    private String nombreCentroSanitario;
    private String telefonoCentroSanitario;
    private List<String> tipoCentroSanitario;
    private String localidadCentroSanitario;
    private String provinciaCentroSanitario;
    private String direccionCentroSanitario;
    private String codigoPostalCentroSanitario;

    public CentroSanitario(String nombreCentroSanitario, String telefonoCentroSanitario,
                           List<String> tipoCentroSanitario, String localidadCentroSanitario,
                           String provinciaCentroSanitario, String direccionCentroSanitario,
                           String codigoPostalCentroSanitario) {
        this.nombreCentroSanitario = nombreCentroSanitario;
        this.telefonoCentroSanitario = telefonoCentroSanitario;
        this.tipoCentroSanitario = tipoCentroSanitario;
        this.localidadCentroSanitario = localidadCentroSanitario;
        this.provinciaCentroSanitario = provinciaCentroSanitario;
        this.direccionCentroSanitario = direccionCentroSanitario;
        this.codigoPostalCentroSanitario = codigoPostalCentroSanitario;
    }

    public String getNombreCentroSanitario() {
        return nombreCentroSanitario;
    }

    public void setNombreCentroSanitario(String nombreCentroSanitario) {
        this.nombreCentroSanitario = nombreCentroSanitario;
    }

    public String getTelefonoCentroSanitario() {
        return telefonoCentroSanitario;
    }

    public void setTelefonoCentroSanitario(String telefonoCentroSanitario) {
        this.telefonoCentroSanitario = telefonoCentroSanitario;
    }

    public List<String> getTipoCentroSanitario() {
        return tipoCentroSanitario;
    }

    public void setTipoCentroSanitario(List<String> tipoCentroSanitario) {
        this.tipoCentroSanitario = tipoCentroSanitario;
    }

    public String getLocalidadCentroSanitario() {
        return localidadCentroSanitario;
    }

    public void setLocalidadCentroSanitario(String localidadCentroSanitario) {
        this.localidadCentroSanitario = localidadCentroSanitario;
    }

    public String getProvinciaCentroSanitario() {
        return provinciaCentroSanitario;
    }

    public void setProvinciaCentroSanitario(String provinciaCentroSanitario) {
        this.provinciaCentroSanitario = provinciaCentroSanitario;
    }

    public String getDireccionCentroSanitario() {
        return direccionCentroSanitario;
    }

    public void setDireccionCentroSanitario(String direccionCentroSanitario) {
        this.direccionCentroSanitario = direccionCentroSanitario;
    }

    public String getCodigoPostalCentroSanitario() {
        return codigoPostalCentroSanitario;
    }

    public void setCodigoPostalCentroSanitario(String codigoPostalCentroSanitario) {
        this.codigoPostalCentroSanitario = codigoPostalCentroSanitario;
    }
}
