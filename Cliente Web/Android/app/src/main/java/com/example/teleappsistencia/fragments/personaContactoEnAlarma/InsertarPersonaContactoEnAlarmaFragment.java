package com.example.teleappsistencia.fragments.personaContactoEnAlarma;

import android.app.DatePickerDialog;
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
import com.example.teleappsistencia.api.clases.PersonaContactoEnAlarma;
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
 * Use the {@link InsertarPersonaContactoEnAlarmaFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class InsertarPersonaContactoEnAlarmaFragment extends Fragment implements View.OnClickListener{

    private static final String ARG_PERSONACONTACTOEA = "PCEA";
    private PersonaContactoEnAlarma personaContactoEnAlarma;
    private EditText editTextNumberIdAlarmaPCEACrear;
    private EditText editTextNumberIdPersonaPCEACrear;
    private EditText editTextFechaRegistroPCEACrear;
    private EditText editTextAcuerdoPCEACrear;
    private Button buttonGuardarPCEACrear;
    private Button buttonVolverPCEA;

    public InsertarPersonaContactoEnAlarmaFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @return A new instance of fragment InsertarPersonaContactoEnAlarmaFragment.
     */

    public static InsertarPersonaContactoEnAlarmaFragment newInstance(PersonaContactoEnAlarma personaContactoEnAlarma) {
        InsertarPersonaContactoEnAlarmaFragment fragment = new InsertarPersonaContactoEnAlarmaFragment();
        Bundle args = new Bundle();
        args.putSerializable(ARG_PERSONACONTACTOEA, personaContactoEnAlarma);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            this.personaContactoEnAlarma = (PersonaContactoEnAlarma) getArguments().getSerializable(ARG_PERSONACONTACTOEA);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_insertar_persona_contacto_en_alarma, container, false);

        // Capturar los elementos del layout
        capturarElementos(view);

        //Asignamos el listener a los botones
        asignarListener();

        return view;
    }

    private void capturarElementos(View view) {
        this.editTextNumberIdAlarmaPCEACrear = (EditText) view.findViewById(R.id.editTextNumberIdAlarmaPCEACrear);
        this.editTextNumberIdPersonaPCEACrear = (EditText) view.findViewById(R.id.editTextNumberIdPersonaPCEACrear);
        this.editTextFechaRegistroPCEACrear = (EditText) view.findViewById(R.id.editTextFechaRegistroPCEACrear);
        this.editTextAcuerdoPCEACrear = (EditText) view.findViewById(R.id.editTextAcuerdoPCEACrear);
        this.buttonGuardarPCEACrear = (Button) view.findViewById(R.id.buttonGuardarPCEACrear);
        this.buttonVolverPCEA = (Button) view.findViewById(R.id.buttonVolverPCEA);
    }

    private void asignarListener() {
        this.buttonGuardarPCEACrear.setOnClickListener(this);
        this.buttonVolverPCEA.setOnClickListener(this);
        this.editTextFechaRegistroPCEACrear.setOnClickListener(this);
    }

    private void modificarDatosCentroSanitarioEnAlarma(){
        this.personaContactoEnAlarma = new PersonaContactoEnAlarma();
        this.personaContactoEnAlarma.setIdAlarma(Integer.parseInt(this.editTextNumberIdAlarmaPCEACrear.getText().toString()));
        this.personaContactoEnAlarma.setIdPersonaContacto(Integer.parseInt(this.editTextNumberIdPersonaPCEACrear.getText().toString()));
        this.personaContactoEnAlarma.setFechaRegistro(this.editTextFechaRegistroPCEACrear.getText().toString());
        this.personaContactoEnAlarma.setAcuerdoAlcanzado(this.editTextAcuerdoPCEACrear.getText().toString());
    }

    private void persistirPersonaContactoEnAlarma(){
        APIService apiService = ClienteRetrofit.getInstance().getAPIService();
        Call<PersonaContactoEnAlarma> call = apiService.addPersonaContactoEnAlarma(this.personaContactoEnAlarma, "Bearer "+ Token.getToken().getAccess());
        call.enqueue(new Callback<PersonaContactoEnAlarma>() {
            @Override
            public void onResponse(Call<PersonaContactoEnAlarma> call, Response<PersonaContactoEnAlarma> response) {
                if(response.errorBody() == null){
                    Toast.makeText(getContext(), "Modificado con éxito", Toast.LENGTH_SHORT).show();
                    volver();
                }
                else{
                    Toast.makeText(getContext(), "Error en la modificación: " + response.raw().message() + " (Pista: ¿existe Alarma y/o Persona con ese ID?)" , Toast.LENGTH_LONG).show();
                }
            }
            @Override
            public void onFailure(Call<PersonaContactoEnAlarma> call, Throwable t) {
                Toast.makeText(getContext(), "Error: "+t.getMessage(), Toast.LENGTH_LONG).show();
            }
        });
    }

    private void volver(){
        ListarPersonasContactoEnAlarmaFragment lPCEA = new ListarPersonasContactoEnAlarmaFragment();
        getActivity().getSupportFragmentManager().beginTransaction()
                .replace(R.id.main_fragment, lPCEA)
                .addToBackStack(null)
                .commit();
    }

    private boolean comprobaciones(){
        if(this.editTextFechaRegistroPCEACrear.getText().toString().isEmpty()) {
            Toast.makeText(getContext(), "Debes introducir una fecha", Toast.LENGTH_SHORT).show();
            return false;
        }
        if(this.editTextNumberIdAlarmaPCEACrear.getText().toString().isEmpty()) {
            Toast.makeText(getContext(), "Debes introducir un ID de Alarma", Toast.LENGTH_SHORT).show();
            return false;
        }
        if(this.editTextNumberIdPersonaPCEACrear.getText().toString().isEmpty()) {
            Toast.makeText(getContext(), "Debes introducir un ID de Persona", Toast.LENGTH_SHORT).show();
            return false;
        }
        return true;
    }

    @Override
    public void onClick(View view) {
        switch(view.getId()){
            case R.id.editTextFechaRegistroPCEACrear:
                Utilidad.dialogoFecha(getContext(), editTextFechaRegistroPCEACrear);
                break;
            case R.id.buttonGuardarPCEACrear:
                if(comprobaciones()){
                    modificarDatosCentroSanitarioEnAlarma();
                    persistirPersonaContactoEnAlarma();
                }
                break;
            case R.id.buttonVolverPCEA:
                volver();
                break;
        }
    }
}