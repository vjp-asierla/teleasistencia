package com.example.teleappsistencia.ui.tipo_recurso_comunitario;

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
 * Use the {@link ConsultarTipoRecursoComunitario#newInstance} factory method to
 * create an instance of this fragment.
 */
public class ConsultarTipoRecursoComunitario extends Fragment {

    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    private TextView nombreTipoRecursoComunitario;
    private TipoRecursoComunitario tipoRecursoComunitario;

    public ConsultarTipoRecursoComunitario() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters..
     * @return A new instance of fragment ConsultarTipoRecursoComunitario.
     */
    // TODO: Rename and change types and number of parameters
    public static ConsultarTipoRecursoComunitario newInstance(TipoRecursoComunitario tipoRecursoComunitario) {
        ConsultarTipoRecursoComunitario fragment = new ConsultarTipoRecursoComunitario();
        Bundle args = new Bundle();
        args.putSerializable("tipoRecursoComunitario", tipoRecursoComunitario);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            this.tipoRecursoComunitario = (TipoRecursoComunitario) getArguments().getSerializable("tipoRecursoComunitario");
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View root = inflater.inflate(R.layout.fragment_consultar_tipo_recurso_comunitario, container, false);

        this.nombreTipoRecursoComunitario = (TextView) root.findViewById(R.id.nombreTipoRecursoComunitario);
        this.nombreTipoRecursoComunitario.setText(this.tipoRecursoComunitario.getNombreTipoRecursoComunitario());

        // Inflate the layout for this fragment
        return root;
    }
}