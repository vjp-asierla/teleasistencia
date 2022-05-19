package com.example.teleappsistencia.ui.centro_sanitario;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;

import com.example.teleappsistencia.R;
import com.example.teleappsistencia.ui.tipo_centro_sanitario.TipoCentroSanitario;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link FragmentModificarCentroSanitario#newInstance} factory method to
 * create an instance of this fragment.
 */
public class FragmentModificarCentroSanitario extends Fragment implements View.OnClickListener {

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
    private Spinner spinnerTipoCentroSanitario;
    private Button buttonGuardar;
    private Button buttonVolver;
    private CentroSanitario centroSanitario;

    public FragmentModificarCentroSanitario() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     * @return A new instance of fragment FragmentModificarCentroSanitario.
     */
    // TODO: Rename and change types and number of parameters
    public static FragmentModificarCentroSanitario newInstance(CentroSanitario centroSanitario) {
        FragmentModificarCentroSanitario fragment = new FragmentModificarCentroSanitario();
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
        View root = inflater.inflate(R.layout.fragment_modificar_centro_sanitario, container, false);

        this.editTextPedirNombre = (EditText) root.findViewById(R.id.editTextPedirNombre);
        this.editTextPhonePedirTelefono = (EditText) root.findViewById(R.id.editTextPhonePedirTelefono);
        this.editTextPedirLocalidad = (EditText) root.findViewById(R.id.editTextPedirLocalidad);
        this.editTextPedirProvincia = (EditText) root.findViewById(R.id.editTextPedirProvincia);
        this.editTextPedirDireccion = (EditText) root.findViewById(R.id.editTextPedirDireccion);
        this.editTextTextPostalAddressPedirCodigoPostal = (EditText) root.findViewById(R.id.editTextTextPostalAddressPedirCodigoPostal);
        this.spinnerTipoCentroSanitario = (Spinner) root.findViewById(R.id.spinnerTipoCentroSanitario);
        this.buttonGuardar = (Button) root.findViewById(R.id.buttonGuardar);
        this.buttonVolver = (Button) root.findViewById(R.id.buttonVolver);

        this.buttonGuardar.setOnClickListener(this);
        this.buttonVolver.setOnClickListener(this);

        if(this.centroSanitario != null) {
            this.editTextPedirNombre.setText(this.centroSanitario.getNombreCentroSanitario());
            this.editTextPhonePedirTelefono.setText(this.centroSanitario.getTelefonoCentroSanitario());
            this.editTextPedirLocalidad.setText(this.centroSanitario.getLocalidadCentroSanitario());
            this.editTextPedirProvincia.setText(this.centroSanitario.getProvinciaCentroSanitario());
            this.editTextPedirDireccion.setText(this.centroSanitario.getDireccionCentroSanitario());
            this.editTextTextPostalAddressPedirCodigoPostal.setText(this.centroSanitario.getCodigoPostalCentroSanitario());

            ArrayAdapter<String> adaptador = new ArrayAdapter(getContext(), android.R.layout.simple_spinner_item, this.centroSanitario.getTipoCentroSanitario());
            adaptador.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
            this.spinnerTipoCentroSanitario.setAdapter(adaptador);
        }

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