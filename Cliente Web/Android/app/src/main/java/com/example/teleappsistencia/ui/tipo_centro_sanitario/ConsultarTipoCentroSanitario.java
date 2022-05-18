package com.example.teleappsistencia.ui.tipo_centro_sanitario;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.example.teleappsistencia.R;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link ConsultarTipoCentroSanitario#newInstance} factory method to
 * create an instance of this fragment.
 */
public class ConsultarTipoCentroSanitario extends Fragment {

    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    private TextView nombreTipoCentroSanitario;
    private TipoCentroSanitario tipoCentroSanitario;

    public ConsultarTipoCentroSanitario() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     * @return A new instance of fragment ConsultarTipoCentroSanitario.
     */
    // TODO: Rename and change types and number of parameters
    public static ConsultarTipoCentroSanitario newInstance(TipoCentroSanitario tipoCentroSanitario) {
        ConsultarTipoCentroSanitario fragment = new ConsultarTipoCentroSanitario();
        Bundle args = new Bundle();
        args.putSerializable("tipoCentroSanitario", tipoCentroSanitario);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            this.tipoCentroSanitario = (TipoCentroSanitario) getArguments().getSerializable("tipoCentroSanitario");
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View root = inflater.inflate(R.layout.fragment_consultar_tipo_centro_sanitario, container, false);

        this.nombreTipoCentroSanitario = (TextView) root.findViewById(R.id.nombreTipoCentroSanitario);
        this.nombreTipoCentroSanitario.setText(this.tipoCentroSanitario.getNombreTipoCentroSanitario());

        // Inflate the layout for this fragment
        return root;
    }
}