package com.example.teleappsistencia.fragments.personaContactoEnAlarma;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.example.teleappsistencia.R;
import com.example.teleappsistencia.api.clases.Alarma;
import com.example.teleappsistencia.api.clases.CentroSanitario;
import com.example.teleappsistencia.api.clases.CentroSanitarioEnAlarma;
import com.example.teleappsistencia.api.clases.Persona;
import com.example.teleappsistencia.api.clases.PersonaContactoEnAlarma;
import com.example.teleappsistencia.utilidad.Utilidad;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link ConsultarPersonaContactoEnAlarmaFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class ConsultarPersonaContactoEnAlarmaFragment extends Fragment {

    private static final String ARG_PERSONACONTACTOEA = "PCEA";
    private PersonaContactoEnAlarma personaContactoEnAlarma;
    private TextView textViewConsultarIdPCEA;
    private TextView textViewConsultarFechaPCEA;
    private TextView textViewConsultarPersonaPCEA;
    private TextView textViewConsultarAcuerdoPCEA;
    private TextView textViewConsultarIdAlarmaPCEA;


    public ConsultarPersonaContactoEnAlarmaFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @return A new instance of fragment ConsultarPersonaContactoEnAlarmaFragment.
     */

    public static ConsultarPersonaContactoEnAlarmaFragment newInstance(PersonaContactoEnAlarma personaContactoEnAlarma) {
        ConsultarPersonaContactoEnAlarmaFragment fragment = new ConsultarPersonaContactoEnAlarmaFragment();
        Bundle args = new Bundle();
        args.putSerializable(ARG_PERSONACONTACTOEA, personaContactoEnAlarma);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            this.personaContactoEnAlarma = (PersonaContactoEnAlarma) getArguments().getSerializable(ARG_PERSONACONTACTOEA);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        // Inflate the layout for this fragment
        View view =  inflater.inflate(R.layout.fragment_consultar_persona_contacto_en_alarma, container, false);

        // Capturar los elementos del layout
        capturarElementos(view);

        //Cargamos los datos
        if(this.personaContactoEnAlarma != null){
            cargarDatos();
        }

        return view;
    }

    private void capturarElementos(View view) {
        this.textViewConsultarIdPCEA = (TextView) view.findViewById(R.id.textViewConsultarIdPCEA);
        this.textViewConsultarFechaPCEA = (TextView) view.findViewById(R.id.textViewConsultarFechaPCEA);
        this.textViewConsultarPersonaPCEA = (TextView) view.findViewById(R.id.textViewConsultarPersonaPCEA);
        this.textViewConsultarAcuerdoPCEA = (TextView) view.findViewById(R.id.textViewConsultarAcuerdoPCEA);
        this.textViewConsultarIdAlarmaPCEA = (TextView) view.findViewById(R.id.textViewConsultarIdAlarmaPCEA);
    }

    private void cargarDatos() {
        Alarma alarma = (Alarma) Utilidad.getObjeto(personaContactoEnAlarma.getIdAlarma(), "Alarma");
        Persona persona = (Persona) Utilidad.getObjeto(personaContactoEnAlarma.getIdPersonaContacto(), "Persona");

        this.textViewConsultarIdPCEA.setText(String.valueOf(this.personaContactoEnAlarma.getId()));
        this.textViewConsultarFechaPCEA.setText(this.personaContactoEnAlarma.getFechaRegistro());
        this.textViewConsultarPersonaPCEA.setText(persona.getNombre() + " " + persona.getApellidos());
        this.textViewConsultarAcuerdoPCEA.setText(this.personaContactoEnAlarma.getAcuerdoAlcanzado());
        this.textViewConsultarIdAlarmaPCEA.setText(String.valueOf(alarma.getId()));
    }
}