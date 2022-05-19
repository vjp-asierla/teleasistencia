package com.example.teleappsistencia.ui.recurso_comunitario;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.example.teleappsistencia.R;
import com.example.teleappsistencia.ui.tipo_centro_sanitario.TipoCentroSanitario;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link ConsultarRecursoComunitario#newInstance} factory method to
 * create an instance of this fragment.
 */
public class ConsultarRecursoComunitario extends Fragment {

    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    private TextView nombreRecursoComunitario;
    private TextView telefonoRecursoComunitario;
    private TextView tipoRecursoComunitarioRecursoComunitario;
    private TextView localidadRecursoComunitario;
    private TextView provinciaRecursoComunitario;
    private TextView direccionRecursoComunitario;
    private TextView codigoPostalRecursoComunitario;
    private RecursoComunitario recursoComunitario;

    public ConsultarRecursoComunitario() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     * @return A new instance of fragment ConsultarRecursoComunitario.
     */
    // TODO: Rename and change types and number of parameters
    public static ConsultarRecursoComunitario newInstance(RecursoComunitario recursoComunitario) {
        ConsultarRecursoComunitario fragment = new ConsultarRecursoComunitario();
        Bundle args = new Bundle();
        args.putSerializable("recursoComunitario", recursoComunitario);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            this.recursoComunitario = (RecursoComunitario) getArguments().getSerializable("recursoComunitario");
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View root = inflater.inflate(R.layout.fragment_consultar_recurso_comunitario, container, false);

        this.nombreRecursoComunitario = (TextView) root.findViewById(R.id.nombreRecursoComunitario);
        this.telefonoRecursoComunitario = (TextView) root.findViewById(R.id.telefonoRecursoComunitario);
        this.tipoRecursoComunitarioRecursoComunitario = (TextView) root.findViewById(R.id.tipoRecursoComunitarioRecursoComunitario);
        this.localidadRecursoComunitario = (TextView) root.findViewById(R.id.localidadRecursoComunitario);
        this.provinciaRecursoComunitario = (TextView) root.findViewById(R.id.provinciaRecursoComunitario);
        this.direccionRecursoComunitario = (TextView) root.findViewById(R.id.direccionRecursoComunitario);
        this.codigoPostalRecursoComunitario = (TextView) root.findViewById(R.id.codigoPostalRecursoComunitario);

        this.nombreRecursoComunitario.setText(this.recursoComunitario.getNombreRecursoComunitario());
        this.telefonoRecursoComunitario.setText(this.recursoComunitario.getTelefonoRecursoComunitario());
        this.tipoRecursoComunitarioRecursoComunitario.setText(this.recursoComunitario.getTipoRecursoComunitario().get(0));
        this.localidadRecursoComunitario.setText(this.recursoComunitario.getLocalidadRecursoComunitario());
        this.provinciaRecursoComunitario.setText(this.recursoComunitario.getProvinciaRecursoComunitario());
        this.direccionRecursoComunitario.setText(this.recursoComunitario.getDireccionRecursoComunitario());
        this.codigoPostalRecursoComunitario.setText(this.recursoComunitario.getCodigoPostalRecursoComunitario());

        // Inflate the layout for this fragment
        return root;
    }
}