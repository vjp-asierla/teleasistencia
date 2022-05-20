package com.example.teleappsistencia.fragments.centroSanitarioEnAlarma;

import android.app.DatePickerDialog;
import android.content.Context;
import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.Toast;

import com.example.teleappsistencia.R;
import com.example.teleappsistencia.api.clases.Alarma;
import com.example.teleappsistencia.api.clases.CentroSanitario;
import com.example.teleappsistencia.api.clases.CentroSanitarioEnAlarma;
import com.example.teleappsistencia.api.clases.Token;
import com.example.teleappsistencia.api.servicios.APIService;
import com.example.teleappsistencia.utilidad.ClienteRetrofit;
import com.example.teleappsistencia.utilidad.Utilidad;

import java.time.LocalDate;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link ModificarCentroSanitarioEnAlarmaFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class ModificarCentroSanitarioEnAlarmaFragment extends Fragment implements View.OnClickListener{

    private static final String ARG_CENTROSANITARIOEA = "CSEA";
    private CentroSanitarioEnAlarma centroSanitarioEnAlarma;
    private EditText editTextNumberIdAlarmaCSEAModificar;
    private EditText editTextNumberIdCentroSanitarioCSEAModificar;
    private EditText editTextFechaRegistroCSEAModificar;
    private EditText editTextPersonaCSEAModificar;
    private EditText editTextAcuerdoCSEAModificar;
    private Button buttonGuardarCSEAModificado;
    private Button buttonVolverCSEA;

    public ModificarCentroSanitarioEnAlarmaFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @return A new instance of fragment ModificarCentroSanitarioEnAlarmaFragment.
     */
    public static ModificarCentroSanitarioEnAlarmaFragment newInstance(CentroSanitarioEnAlarma centroSanitarioEnAlarma) {
        ModificarCentroSanitarioEnAlarmaFragment fragment = new ModificarCentroSanitarioEnAlarmaFragment();
        Bundle args = new Bundle();
        args.putSerializable(ARG_CENTROSANITARIOEA, centroSanitarioEnAlarma);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            this.centroSanitarioEnAlarma = (CentroSanitarioEnAlarma) getArguments().getSerializable(ARG_CENTROSANITARIOEA);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragmen
        View view = inflater.inflate(R.layout.fragment_modificar_centro_sanitario_en_alarma, container, false);

        // Capturar los elementos del layout
        capturarElementos(view);

        //Asignamos el listener a los botones
        asignarListener();

        //Cargamos los datos
        if(this.centroSanitarioEnAlarma != null){
            cargarDatos();
        }

        return view;
    }

    private void capturarElementos(View view) {
        this.editTextNumberIdAlarmaCSEAModificar = (EditText) view.findViewById(R.id.editTextNumberIdAlarmaCSEAModificar);
        this.editTextNumberIdCentroSanitarioCSEAModificar = (EditText) view.findViewById(R.id.editTextNumberIdCentroSanitarioCSEAModificar);
        this.editTextFechaRegistroCSEAModificar = (EditText) view.findViewById(R.id.editTextFechaRegistroCSEAModificar);
        this.editTextPersonaCSEAModificar = (EditText) view.findViewById(R.id.editTextPersonaCSEAModificar);
        this.editTextAcuerdoCSEAModificar = (EditText) view.findViewById(R.id.editTextAcuerdoCSEAModificar);
        this.buttonGuardarCSEAModificado = (Button) view.findViewById(R.id.buttonGuardarCSEAModificado);
        this.buttonVolverCSEA = (Button) view.findViewById(R.id.buttonVolverCSEA);
    }

    private void asignarListener() {
        this.buttonGuardarCSEAModificado.setOnClickListener(this);
        this.buttonVolverCSEA.setOnClickListener(this);
        this.editTextFechaRegistroCSEAModificar.setOnClickListener(this);
    }

    private void cargarDatos() {
        Alarma alarma = (Alarma) Utilidad.getObjeto(centroSanitarioEnAlarma.getIdAlarma(), "Alarma");
        CentroSanitario centroSanitario = (CentroSanitario) Utilidad.getObjeto(centroSanitarioEnAlarma.getIdCentroSanitario(), "CentroSanitario");

        this.editTextNumberIdAlarmaCSEAModificar.setText(String.valueOf(alarma.getId()));
        this.editTextNumberIdCentroSanitarioCSEAModificar.setText(String.valueOf(centroSanitario.getId()));
        this.editTextFechaRegistroCSEAModificar.setText(this.centroSanitarioEnAlarma.getFechaRegistro());
        this.editTextPersonaCSEAModificar.setText(this.centroSanitarioEnAlarma.getPersona());
        this.editTextAcuerdoCSEAModificar.setText(this.centroSanitarioEnAlarma.getAcuerdoAlcanzado());
    }

    private void modificarDatosCentroSanitarioEnAlarma(){
        this.centroSanitarioEnAlarma.setIdAlarma(Integer.parseInt(this.editTextNumberIdAlarmaCSEAModificar.getText().toString()));
        this.centroSanitarioEnAlarma.setIdCentroSanitario(Integer.parseInt(this.editTextNumberIdCentroSanitarioCSEAModificar.getText().toString()));
        this.centroSanitarioEnAlarma.setFechaRegistro(this.editTextFechaRegistroCSEAModificar.getText().toString());
        this.centroSanitarioEnAlarma.setPersona(this.editTextPersonaCSEAModificar.getText().toString());
        this.centroSanitarioEnAlarma.setAcuerdoAlcanzado(this.editTextAcuerdoCSEAModificar.getText().toString());
    }

    private void persistirCentroSanitarioEnAlarma(){
        APIService apiService = ClienteRetrofit.getInstance().getAPIService();
        Call<ResponseBody> call = apiService.actualizarCentroSanitarioEnAlarma(centroSanitarioEnAlarma.getId(), "Bearer "+ Token.getToken().getAccess(), this.centroSanitarioEnAlarma);
        call.enqueue(new Callback<ResponseBody>() {
            @Override
            public void onResponse(Call<ResponseBody> call, Response<ResponseBody> response) {
                if(response.errorBody() == null){
                    Toast.makeText(getContext(), "Modificado con éxito", Toast.LENGTH_SHORT).show();
                    volver();
                }
                else{
                    Toast.makeText(getContext(), "Error en la modificación: " + response.raw().message() + " (Pista: ¿existe Alarma y/o Centro con ese ID?)" , Toast.LENGTH_LONG).show();
                }
            }
            @Override
            public void onFailure(Call<ResponseBody> call, Throwable t) {
                Toast.makeText(getContext(), "Error: "+t.getMessage(), Toast.LENGTH_LONG).show();
            }
        });
    }

    private void volver(){
        ListarCentrosSanitariosEnAlarmaFragment lCSEA = new ListarCentrosSanitariosEnAlarmaFragment();
        getActivity().getSupportFragmentManager().beginTransaction()
                .replace(R.id.main_fragment, lCSEA)
                .addToBackStack(null)
                .commit();
    }

    private boolean comprobaciones(){
        if(this.editTextFechaRegistroCSEAModificar.getText().toString().isEmpty()) {
            Toast.makeText(getContext(), "Debes introducir una fecha", Toast.LENGTH_SHORT).show();
            return false;
        }
        if(this.editTextNumberIdAlarmaCSEAModificar.getText().toString().isEmpty()) {
            Toast.makeText(getContext(), "Debes introducir un ID de Alarma", Toast.LENGTH_SHORT).show();
            return false;
        }
        if(this.editTextNumberIdCentroSanitarioCSEAModificar.getText().toString().isEmpty()) {
            Toast.makeText(getContext(), "Debes introducir un ID de Centro Sanitario", Toast.LENGTH_SHORT).show();
            return false;
        }
        return true;
    }

    @Override
    public void onClick(View view) {
        switch(view.getId()){
            case R.id.editTextFechaRegistroCSEAModificar:
                Utilidad.dialogoFecha(getContext(), editTextFechaRegistroCSEAModificar);
                break;
            case R.id.buttonGuardarCSEAModificado:
                if(comprobaciones()){
                    modificarDatosCentroSanitarioEnAlarma();
                    persistirCentroSanitarioEnAlarma();
                }
                break;
            case R.id.buttonVolverCSEA:
                volver();
                break;
        }
    }
}