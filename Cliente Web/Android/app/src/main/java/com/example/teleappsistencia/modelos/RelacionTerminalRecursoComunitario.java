package com.example.teleappsistencia.modelos;

import androidx.annotation.NonNull;

import com.example.teleappsistencia.utilidades.Utilidad;
import com.google.gson.annotations.SerializedName;

import java.io.Serializable;

public class RelacionTerminalRecursoComunitario implements Serializable {

    @SerializedName("id")
    private int id;
    @SerializedName("id_terminal")
    private Object terminal;
    @SerializedName("id_recurso_comunitario")
    private Object recursoComunitario;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Object getTerminal() {
        return terminal;
    }

    public void setTerminal(Object terminal) {
        this.terminal = terminal;
    }

    public Object getRecursoComunitario() {
        return recursoComunitario;
    }

    public void setRecursoComunitario(Object recursoComunitario) {
        this.recursoComunitario = recursoComunitario;
    }

    @NonNull
    @Override
    public String toString() {
        RecursoComunitario recursoComunitario = (RecursoComunitario) Utilidad.getObjeto(this.getRecursoComunitario(), "RecursoComunitario");
        return recursoComunitario.getNombre();
    }
}
