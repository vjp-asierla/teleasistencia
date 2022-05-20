package com.example.teleappsistencia.fragments.recursosComunitariosEnAlarma;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.example.teleappsistencia.R;
import com.example.teleappsistencia.api.clases.Alarma;
import com.example.teleappsistencia.api.clases.CentroSanitario;
import com.example.teleappsistencia.api.clases.RecursoComunitario;
import com.example.teleappsistencia.api.clases.RecursoComunitarioEnAlarma;
import com.example.teleappsistencia.utilidad.Utilidad;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link ConsultarRecursoComunitarioEnAlarmaFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class ConsultarRecursoComunitarioEnAlarmaFragment extends Fragment {

    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_RCEA = "RCEA";
    private RecursoComunitarioEnAlarma recursoComunitarioEnAlarma;
    private TextView textViewConsultarIdRCEA;
    private TextView textViewConsultarFechaRCEA;
    private TextView textViewConsultarPersonaRCEA;
    private TextView textViewConsultarAcuerdoRCEA;
    private TextView textViewConsultarIdAlarmaRCEA;
    private TextView textViewConsultarRecursoComunitarioRCEA;


    public ConsultarRecursoComunitarioEnAlarmaFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @return A new instance of fragment ConsultarRecursoComunitarioEnAlarmaFragment.
     */

    public static ConsultarRecursoComunitarioEnAlarmaFragment newInstance(RecursoComunitarioEnAlarma recursoComunitarioEnAlarma) {
        ConsultarRecursoComunitarioEnAlarmaFragment fragment = new ConsultarRecursoComunitarioEnAlarmaFragment();
        Bundle args = new Bundle();
        args.putSerializable(ARG_RCEA, recursoComunitarioEnAlarma);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
           this.recursoComunitarioEnAlarma = (RecursoComunitarioEnAlarma) getArguments().getSerializable(ARG_RCEA);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_consultar_recurso_comunitario_en_alarma, container, false);

        // Capturar los elementos del layout
        capturarElementos(view);

        //Cargamos los datos
        if(this.recursoComunitarioEnAlarma != null){
            cargarDatos();
        }

        return view;
    }

    private void capturarElementos(View view) {
        this.textViewConsultarIdRCEA = (TextView) view.findViewById(R.id.textViewConsultarIdRCEA);
        this.textViewConsultarFechaRCEA = (TextView) view.findViewById(R.id.textViewConsultarFechaRCEA);
        this.textViewConsultarPersonaRCEA = (TextView) view.findViewById(R.id.textViewConsultarPersonaRCEA);
        this.textViewConsultarAcuerdoRCEA = (TextView) view.findViewById(R.id.textViewConsultarAcuerdoRCEA);
        this.textViewConsultarIdAlarmaRCEA = (TextView) view.findViewById(R.id.textViewConsultarIdAlarmaRCEA);
        this.textViewConsultarRecursoComunitarioRCEA = (TextView) view.findViewById(R.id.textViewConsultarRecursoComunitarioRCEA);
    }

    private void cargarDatos() {
        Alarma alarma = (Alarma) Utilidad.getObjeto(this.recursoComunitarioEnAlarma.getIdAlarma(), "Alarma");
        RecursoComunitario recursoComunitario = (RecursoComunitario) Utilidad.getObjeto(this.recursoComunitarioEnAlarma.getIdRecursoComunitairo(), "RecursoComunitario");

        this.textViewConsultarIdRCEA.setText(String.valueOf(this.recursoComunitarioEnAlarma.getId()));
        this.textViewConsultarFechaRCEA.setText(this.recursoComunitarioEnAlarma.getFechaRegistro());
        this.textViewConsultarPersonaRCEA.setText(this.recursoComunitarioEnAlarma.getPersona());
        this.textViewConsultarAcuerdoRCEA.setText(this.recursoComunitarioEnAlarma.getAcuerdoAlcanzado());
        this.textViewConsultarIdAlarmaRCEA.setText(String.valueOf(alarma.getId()));
        this.textViewConsultarRecursoComunitarioRCEA.setText(recursoComunitario.getNombre());
    }
}