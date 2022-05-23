package com.example.teleappsistencia.ui.fragments.recurso_comunitario;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;

import com.example.teleappsistencia.R;
import com.example.teleappsistencia.modelos.RecursoComunitario;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link FragmentModificarRecursoComunitario#newInstance} factory method to
 * create an instance of this fragment.
 */
public class FragmentModificarRecursoComunitario extends Fragment implements View.OnClickListener {

    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    private EditText editTextPedirNombre;
    private EditText editTextPhonePedirTelefono;
    private EditText editTextPedirLocalidad;
    private EditText editTextPedirProvincia;
    private EditText editTextPedirDireccion;
    private EditText editTextTextPostalAddressPedirCodigoPostal;
    private Spinner spinnerTipoRecursoComunitario;
    private Button buttonGuardar;
    private Button buttonVolver;
    private RecursoComunitario recursoComunitario;

    public FragmentModificarRecursoComunitario() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     * @return A new instance of fragment FragmentModificarRecursoComunitario.
     */
    // TODO: Rename and change types and number of parameters
    public static FragmentModificarRecursoComunitario newInstance(RecursoComunitario recursoComunitario) {
        FragmentModificarRecursoComunitario fragment = new FragmentModificarRecursoComunitario();
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
        View root = inflater.inflate(R.layout.fragment_modificar_recurso_comunitario, container, false);

        this.editTextPedirNombre = (EditText) root.findViewById(R.id.editTextPedirNombre);
        this.editTextPhonePedirTelefono = (EditText) root.findViewById(R.id.editTextPhonePedirTelefono);
        this.editTextPedirLocalidad = (EditText) root.findViewById(R.id.editTextPedirLocalidad);
        this.editTextPedirProvincia = (EditText) root.findViewById(R.id.editTextPedirProvincia);
        this.editTextPedirDireccion = (EditText) root.findViewById(R.id.editTextPedirDireccion);
        this.editTextTextPostalAddressPedirCodigoPostal = (EditText) root.findViewById(R.id.editTextTextPostalAddressPedirCodigoPostal);
        this.spinnerTipoRecursoComunitario = (Spinner) root.findViewById(R.id.spinnerTipoRecursoComunitario);
        this.buttonGuardar = (Button) root.findViewById(R.id.buttonGuardar);
        this.buttonVolver = (Button) root.findViewById(R.id.buttonVolver);

        this.buttonGuardar.setOnClickListener(this);
        this.buttonVolver.setOnClickListener(this);

        /* Hay que revisar el modelo para adaptarlo (hablar con Aaron) */
        /*if(this.recursoComunitario != null) {
            this.editTextPedirNombre.setText(this.recursoComunitario.getNombreRecursoComunitario());
            this.editTextPhonePedirTelefono.setText(this.recursoComunitario.getTelefonoRecursoComunitario());
            this.editTextPedirLocalidad.setText(this.recursoComunitario.getLocalidadRecursoComunitario());
            this.editTextPedirProvincia.setText(this.recursoComunitario.getProvinciaRecursoComunitario());
            this.editTextPedirDireccion.setText(this.recursoComunitario.getDireccionRecursoComunitario());
            this.editTextTextPostalAddressPedirCodigoPostal.setText(this.recursoComunitario.getCodigoPostalRecursoComunitario());

            ArrayAdapter<String> adaptador = new ArrayAdapter(getContext(), android.R.layout.simple_spinner_item, this.recursoComunitario.getTipoRecursoComunitario());
            adaptador.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
            this.spinnerTipoRecursoComunitario.setAdapter(adaptador);
        }*/

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