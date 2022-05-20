package com.example.teleappsistencia.ui.fragments.alarma;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.example.teleappsistencia.R;
import com.example.teleappsistencia.modelos.Alarma;
import com.example.teleappsistencia.modelos.Paciente;
import com.example.teleappsistencia.modelos.Persona;
import com.example.teleappsistencia.modelos.Teleoperador;
import com.example.teleappsistencia.modelos.Terminal;
import com.example.teleappsistencia.utilidades.Utilidad;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link ConsultarAlarmaFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class ConsultarAlarmaFragment extends Fragment {

    private static final String ARG_ALARMA = "Alarma";
    private Alarma alarma;
    private TextView textViewConsultarIdAlarma;
    private TextView textViewConsultarEstadoAlarma;
    private TextView textViewConsultarPacienteAlarma;
    private TextView textViewConsultarTeleoperadorAlarma;
    private TextView textViewConsultarFechaRegistroAlarma;
    private TextView textViewConsultarObservacionesAlarma;
    private TextView textViewConsultarResumenAlarma;


    public ConsultarAlarmaFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @return A new instance of fragment ConsultarAlarmaFragment.
     */
    public static ConsultarAlarmaFragment newInstance(Alarma alarma) {
        ConsultarAlarmaFragment fragment = new ConsultarAlarmaFragment();
        Bundle args = new Bundle();
        args.putSerializable(ARG_ALARMA, alarma);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            this.alarma = (Alarma) getArguments().getSerializable(ARG_ALARMA);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragmen
        View view = inflater.inflate(R.layout.fragment_consultar_alarma, container, false);

        // Capturar los elementos del layout
        capturarElementos(view);

        if(this.alarma != null){
            cargarDatos();
        }

        return view;
    }

    private void capturarElementos(View view) {
        this.textViewConsultarIdAlarma = (TextView) view.findViewById(R.id.textViewConsultarIdAlarma);
        this.textViewConsultarEstadoAlarma = (TextView) view.findViewById(R.id.textViewConsultarEstadoAlarma);
        this.textViewConsultarPacienteAlarma = (TextView) view.findViewById(R.id.textViewConsultarPacienteAlarma);
        this.textViewConsultarTeleoperadorAlarma  = (TextView) view.findViewById(R.id.textViewConsultarTeleoperadorAlarma);
        this.textViewConsultarFechaRegistroAlarma = (TextView) view.findViewById(R.id.textViewConsultarFechaRegistroAlarma);
        this.textViewConsultarObservacionesAlarma = (TextView) view.findViewById(R.id.textViewConsultarObservacionesAlarma);
        this.textViewConsultarResumenAlarma = (TextView) view.findViewById(R.id.textViewConsultarResumenAlarma);
    }

    private void cargarDatos() {
        Terminal terminal;
        Paciente paciente;
        Persona persona;
        this.textViewConsultarIdAlarma.setText(String.valueOf(alarma.getId()));
        this.textViewConsultarEstadoAlarma.setText(alarma.getEstado_alarma());
        this.textViewConsultarFechaRegistroAlarma.setText(alarma.getFecha_registro().toString());
        this.textViewConsultarObservacionesAlarma.setText(alarma.getObservaciones());
        this.textViewConsultarResumenAlarma.setText(alarma.getResumen());
        if(alarma.getId_teleoperador() != null){
            Teleoperador teleoperador = (Teleoperador) Utilidad.getObjeto(alarma.getId_teleoperador(), "Teleoperador");
            this.textViewConsultarTeleoperadorAlarma.setText(teleoperador.getFirstName()+" "+teleoperador.getLastName());
        }

        //Dependiendo de como fuese creada la alarma, hay que coger los datos de una forma u otra
        if(alarma.getId_paciente_ucr() != null){
            paciente = (Paciente) Utilidad.getObjeto(alarma.getId_paciente_ucr(), "Paciente");
            terminal = (Terminal) Utilidad.getObjeto(paciente.getId_terminal(), "Terminal");
        }
        else{
            terminal = (Terminal) Utilidad.getObjeto(alarma.getId_terminal(), "Terminal");
            paciente = (Paciente) Utilidad.getObjeto(terminal.getId_titular(), "Paciente");
        }
        persona = (Persona) Utilidad.getObjeto(paciente.getId_persona(), "Persona");
        this.textViewConsultarPacienteAlarma.setText(persona.getNombre()+" "+persona.getApellidos());
    }
}