package com.example.teleappsistencia.modelos;

import java.io.Serializable;
import java.util.List;

public class RecursoComunitario implements Serializable {
    private String nombreRecursoComunitario;
    private String telefonoRecursoComunitario;
    private List<String> tipoRecursoComunitario;
    private String localidadRecursoComunitario;
    private String provinciaRecursoComunitario;
    private String direccionRecursoComunitario;
    private String codigoPostalRecursoComunitario;

    public RecursoComunitario(String nombreRecursoComunitario, String telefonoRecursoComunitario,
                              List<String> tipoRecursoComunitario, String localidadRecursoComunitario,
                              String provinciaRecursoComunitario, String direccionRecursoComunitario,
                              String codigoPostalRecursoComunitario) {
        this.nombreRecursoComunitario = nombreRecursoComunitario;
        this.telefonoRecursoComunitario = telefonoRecursoComunitario;
        this.tipoRecursoComunitario = tipoRecursoComunitario;
        this.localidadRecursoComunitario = localidadRecursoComunitario;
        this.provinciaRecursoComunitario = provinciaRecursoComunitario;
        this.direccionRecursoComunitario = direccionRecursoComunitario;
        this.codigoPostalRecursoComunitario = codigoPostalRecursoComunitario;
    }

    public String getNombreRecursoComunitario() {
        return nombreRecursoComunitario;
    }

    public void setNombreRecursoComunitario(String nombreRecursoComunitario) {
        this.nombreRecursoComunitario = nombreRecursoComunitario;
    }

    public String getTelefonoRecursoComunitario() {
        return telefonoRecursoComunitario;
    }

    public void setTelefonoRecursoComunitario(String telefonoRecursoComunitario) {
        this.telefonoRecursoComunitario = telefonoRecursoComunitario;
    }

    public List<String> getTipoRecursoComunitario() {
        return tipoRecursoComunitario;
    }

    public void setTipoRecursoComunitario(List<String> tipoRecursoComunitario) {
        this.tipoRecursoComunitario = tipoRecursoComunitario;
    }

    public String getLocalidadRecursoComunitario() {
        return localidadRecursoComunitario;
    }

    public void setLocalidadRecursoComunitario(String localidadRecursoComunitario) {
        this.localidadRecursoComunitario = localidadRecursoComunitario;
    }

    public String getProvinciaRecursoComunitario() {
        return provinciaRecursoComunitario;
    }

    public void setProvinciaRecursoComunitario(String provinciaRecursoComunitario) {
        this.provinciaRecursoComunitario = provinciaRecursoComunitario;
    }

    public String getDireccionRecursoComunitario() {
        return direccionRecursoComunitario;
    }

    public void setDireccionRecursoComunitario(String direccionRecursoComunitario) {
        this.direccionRecursoComunitario = direccionRecursoComunitario;
    }

    public String getCodigoPostalRecursoComunitario() {
        return codigoPostalRecursoComunitario;
    }

    public void setCodigoPostalRecursoComunitario(String codigoPostalRecursoComunitario) {
        this.codigoPostalRecursoComunitario = codigoPostalRecursoComunitario;
    }
}
