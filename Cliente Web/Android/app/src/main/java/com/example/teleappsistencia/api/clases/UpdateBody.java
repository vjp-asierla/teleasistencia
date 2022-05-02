package com.example.teleappsistencia.api.clases;

public class UpdateBody {

    private int id_teleoperador;
    private String estado_alarma;
    private String observaciones;
    private String resumen;

    public UpdateBody(int id_teleoperador, String estado_alarma, String observaciones, String resumen){
        this.id_teleoperador = id_teleoperador;
        this.estado_alarma = estado_alarma;
        this.observaciones = observaciones;
        this.resumen = resumen;
    }

}
