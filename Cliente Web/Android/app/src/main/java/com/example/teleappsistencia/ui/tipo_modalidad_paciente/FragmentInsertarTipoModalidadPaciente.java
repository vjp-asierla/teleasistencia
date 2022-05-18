package com.example.teleappsistencia.ui.tipo_modalidad_paciente;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;

import com.example.teleappsistencia.R;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link FragmentInsertarTipoModalidadPaciente#newInstance} factory method to
 * create an instance of this fragment.
 */
public class FragmentInsertarTipoModalidadPaciente extends Fragment implements View.OnClickListener {

    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    private EditText editTextPedirNombre;
    private Button buttonGuardar;
    private Button buttonVolver;

    public FragmentInsertarTipoModalidadPaciente() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment FragmentInsertarTipoModalidadPaciente.
     */
    // TODO: Rename and change types and number of parameters
    public static FragmentInsertarTipoModalidadPaciente newInstance(String param1, String param2) {
        FragmentInsertarTipoModalidadPaciente fragment = new FragmentInsertarTipoModalidadPaciente();
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
        View root = inflater.inflate(R.layout.fragment_insertar_tipo_modalidad_paciente, container, false);

        this.editTextPedirNombre = (EditText) root.findViewById(R.id.editTextPedirNombre);
        this.buttonGuardar = (Button) root.findViewById(R.id.buttonGuardar);
        this.buttonVolver = (Button) root.findViewById(R.id.buttonVolver);

        this.buttonGuardar.setOnClickListener(this);
        this.buttonVolver.setOnClickListener(this);

        // Inflate the layout for this fragment
        return root;
    }

    @Override
    public void onClick(View view) {
        switch (view.getId()) {
            case R.id.buttonGuardar:
                accionBotonGuardar();
                break;
            case R.id.buttonVolver:
                accionBotonVolver();
                break;
        }
    }

    private void accionBotonGuardar() {

    }

    private void accionBotonVolver() {

    }
}