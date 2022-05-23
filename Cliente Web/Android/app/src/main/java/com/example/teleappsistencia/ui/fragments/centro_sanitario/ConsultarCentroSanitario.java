package com.example.teleappsistencia.ui.fragments.centro_sanitario;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.example.teleappsistencia.R;
import com.example.teleappsistencia.modelos.CentroSanitario;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link ConsultarCentroSanitario#newInstance} factory method to
 * create an instance of this fragment.
 */
public class ConsultarCentroSanitario extends Fragment {

    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    private TextView nombreCentroSanitario;
    private TextView telefonoCentroSanitario;
    private TextView tipoCentroSanitarioCentroSanitario;
    private TextView localidadCentroSanitario;
    private TextView provinciaCentroSanitario;
    private TextView direccionCentroSanitario;
    private TextView codigoPostalCentroSanitario;
    private CentroSanitario centroSanitario;

    public ConsultarCentroSanitario() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     * @return A new instance of fragment ConsultarCentroSanitario.
     */
    // TODO: Rename and change types and number of parameters
    public static ConsultarCentroSanitario newInstance(CentroSanitario centroSanitario) {
        ConsultarCentroSanitario fragment = new ConsultarCentroSanitario();
        Bundle args = new Bundle();
        args.putSerializable("centroSanitario", centroSanitario);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            this.centroSanitario = (CentroSanitario) getArguments().getSerializable("centroSanitario");
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View root = inflater.inflate(R.layout.fragment_consultar_centro_sanitario, container, false);

        this.nombreCentroSanitario = (TextView) root.findViewById(R.id.nombreCentroSanitario);
        this.telefonoCentroSanitario = (TextView) root.findViewById(R.id.telefonoCentroSanitario);
        this.tipoCentroSanitarioCentroSanitario = (TextView) root.findViewById(R.id.tipoCentroSanitarioCentroSanitario);
        this.localidadCentroSanitario = (TextView) root.findViewById(R.id.localidadCentroSanitario);
        this.provinciaCentroSanitario = (TextView) root.findViewById(R.id.provinciaCentroSanitario);
        this.direccionCentroSanitario = (TextView) root.findViewById(R.id.direccionCentroSanitario);
        this.codigoPostalCentroSanitario = (TextView) root.findViewById(R.id.codigoPostalCentroSanitario);


        this.nombreCentroSanitario.setText(this.centroSanitario.getNombre());
        this.telefonoCentroSanitario.setText(this.centroSanitario.getTelefono());
        /* Hay que revisar el modelo para adaptarlo (hablar con Aaron) */
        //this.tipoCentroSanitarioCentroSanitario.setText(this.centroSanitario.getTipoCentroSanitario().get(0));
        //this.localidadCentroSanitario.setText(this.centroSanitario.getLocalidadCentroSanitario());
        //this.provinciaCentroSanitario.setText(this.centroSanitario.getProvinciaCentroSanitario());
        //this.direccionCentroSanitario.setText(this.centroSanitario.getDireccionCentroSanitario());
        //this.codigoPostalCentroSanitario.setText(this.centroSanitario.getCodigoPostalCentroSanitario());

        // Inflate the layout for this fragment
        return root;
    }
}