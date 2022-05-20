package com.example.teleappsistencia.fragments.clasificacionAlarma;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.example.teleappsistencia.R;
import com.example.teleappsistencia.api.clases.ClasificacionAlarma;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link ConsultarClasificacionAlarmaFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class ConsultarClasificacionAlarmaFragment extends Fragment {

    private final static String ARG_CLASIFICACIONALARMA = "ClasificacionAlarma";
    private ClasificacionAlarma clasificacionAlarma;
    private TextView textViewConsultarIdClasificacionAlarma;
    private TextView textViewConsultarNombreClasificacionAlarma;
    private TextView textViewConsultarCodigoClasificacionAlarma;

    public ConsultarClasificacionAlarmaFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @return A new instance of fragment ConsultarClasificacionAlarmaFragment.
     */

    public static ConsultarClasificacionAlarmaFragment newInstance(ClasificacionAlarma clasificacionAlarma) {
        ConsultarClasificacionAlarmaFragment fragment = new ConsultarClasificacionAlarmaFragment();
        Bundle args = new Bundle();
        args.putSerializable(ARG_CLASIFICACIONALARMA, clasificacionAlarma);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            this.clasificacionAlarma = (ClasificacionAlarma) getArguments().getSerializable(ARG_CLASIFICACIONALARMA);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_consultar_clasificacion_alarma, container, false);

        // Capturar los elementos del layout
        capturarElementos(view);

        //Cargamos los datos
        if(this.clasificacionAlarma != null){
            cargarDatos();
        }

        return view;
    }

    private void capturarElementos(View view) {
        this.textViewConsultarIdClasificacionAlarma = (TextView) view.findViewById(R.id.textViewConsultarIdClasificacionAlarma );
        this.textViewConsultarNombreClasificacionAlarma = (TextView) view.findViewById(R.id.textViewConsultarNombreClasificacionAlarma);
        this.textViewConsultarCodigoClasificacionAlarma = (TextView) view.findViewById(R.id.textViewConsultarCodigoClasificacionAlarma);
    }

    private void cargarDatos() {
        this.textViewConsultarIdClasificacionAlarma.setText(String.valueOf(this.clasificacionAlarma.getId()));
        this.textViewConsultarNombreClasificacionAlarma.setText(this.clasificacionAlarma.getNombre());
        this.textViewConsultarCodigoClasificacionAlarma.setText(this.clasificacionAlarma.getCodigo());
    }


}