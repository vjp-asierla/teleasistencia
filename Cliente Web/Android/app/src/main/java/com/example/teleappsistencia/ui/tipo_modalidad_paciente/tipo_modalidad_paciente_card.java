package com.example.teleappsistencia.ui.tipo_modalidad_paciente;

import android.content.Intent;
import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;
import android.widget.TextView;

import com.example.teleappsistencia.R;
import com.example.teleappsistencia.ui.tipo_centro_sanitario.ConsultarTipoCentroSanitario;
import com.example.teleappsistencia.ui.tipo_centro_sanitario.FragmentModificarTipoCentroSanitario;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link tipo_modalidad_paciente_card#newInstance} factory method to
 * create an instance of this fragment.
 */
public class tipo_modalidad_paciente_card extends Fragment {

    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    private TextView nombreTipoModalidadPaciente;

    public tipo_modalidad_paciente_card() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment tipo_modalidad_paciente_card.
     */
    // TODO: Rename and change types and number of parameters
    public static tipo_modalidad_paciente_card newInstance(String param1, String param2) {
        tipo_modalidad_paciente_card fragment = new tipo_modalidad_paciente_card();
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
        View root = inflater.inflate(R.layout.fragment_tipo_modalidad_paciente_card, container, false);

        this.nombreTipoModalidadPaciente = (TextView) root.findViewById(R.id.nombreTipoModalidadPaciente);

        // Inflate the layout for this fragment
        return root;
    }
}