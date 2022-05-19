package com.example.teleappsistencia.ui.recurso_comunitario;

import android.content.Intent;
import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;
import android.widget.TextView;

import com.example.teleappsistencia.R;
import com.example.teleappsistencia.ui.centro_sanitario.ConsultarCentroSanitario;
import com.example.teleappsistencia.ui.centro_sanitario.FragmentModificarCentroSanitario;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link recurso_comunitario_card#newInstance} factory method to
 * create an instance of this fragment.
 */
public class recurso_comunitario_card extends Fragment {

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
    private TextView direccionRecursoComunitario;

    public recurso_comunitario_card() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment recurso_comunitario_card.
     */
    // TODO: Rename and change types and number of parameters
    public static recurso_comunitario_card newInstance(String param1, String param2) {
        recurso_comunitario_card fragment = new recurso_comunitario_card();
        Bundle args = new Bundle();
        args.putString(ARG_PARAM1, param1);
        args.putString(ARG_PARAM2, param2);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            mParam1 = getArguments().getString(ARG_PARAM1);
            mParam2 = getArguments().getString(ARG_PARAM2);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View root = inflater.inflate(R.layout.fragment_recurso_comunitario_card, container, false);

        this.nombreRecursoComunitario = (TextView) root.findViewById(R.id.nombreRecursoComunitario);
        this.telefonoRecursoComunitario = (TextView) root.findViewById(R.id.telefonoRecursoComunitario);
        this.tipoRecursoComunitarioRecursoComunitario = (TextView) root.findViewById(R.id.tipoRecursoComunitarioRecursoComunitario);
        this.direccionRecursoComunitario = (TextView) root.findViewById(R.id.direccionRecursoComunitario);

        // Inflate the layout for this fragment
        return root;
    }
}