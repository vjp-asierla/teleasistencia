package com.example.teleappsistencia.ui.fragments.personaContactoEnAlarma;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.example.teleappsistencia.R;
import com.example.teleappsistencia.modelos.Alarma;
import com.example.teleappsistencia.modelos.Persona;
import com.example.teleappsistencia.modelos.PersonaContactoEnAlarma;
import com.example.teleappsistencia.modelos.Token;
import com.example.teleappsistencia.servicios.APIService;
import com.example.teleappsistencia.servicios.ClienteRetrofit;
import com.example.teleappsistencia.utilidades.Utilidad;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link ModificarPersonaContactoEnAlarmaFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class ModificarPersonaContactoEnAlarmaFragment extends Fragment implements View.OnClickListener{

    private static final String ARG_PERSONACONTACTOEA = "PCEA";
    private PersonaContactoEnAlarma personaContactoEnAlarma;
    private EditText editTextNumberIdAlarmaPCEAModificar;
    private EditText editTextNumberIdPersonaPCEAModificar;
    private EditText editTextFechaRegistroPCEAModificar;
    private EditText editTextAcuerdoPCEAModificar;
    private Button buttonGuardarPCEAModificado;
    private Button buttonVolverPCEA;

    public ModificarPersonaContactoEnAlarmaFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @return A new instance of fragment ModificarPersonaContactoEnAlarmaFragment.
     */

    public static ModificarPersonaContactoEnAlarmaFragment newInstance(PersonaContactoEnAlarma personaContactoEnAlarma) {
        ModificarPersonaContactoEnAlarmaFragment fragment = new ModificarPersonaContactoEnAlarmaFragment();
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
        View view = inflater.inflate(R.layout.fragment_modificar_persona_contato_en_alarma, container, false);

        // Capturar los elementos del layout
        capturarElementos(view);

        //Asignamos el listener a los botones
        asignarListener();

        //Cargamos los datos
        if(this.personaContactoEnAlarma != null){
            cargarDatos();
        }

        return view;
    }

    private void capturarElementos(View view) {
        this.editTextNumberIdAlarmaPCEAModificar = (EditText) view.findViewById(R.id.editTextNumberIdAlarmaPCEAModificar);
        this.editTextNumberIdPersonaPCEAModificar = (EditText) view.findViewById(R.id.editTextNumberIdPersonaPCEAModificar);
        this.editTextFechaRegistroPCEAModificar = (EditText) view.findViewById(R.id.editTextFechaRegistroPCEAModificar);
        this.editTextAcuerdoPCEAModificar = (EditText) view.findViewById(R.id.editTextAcuerdoPCEAModificar);
        this.buttonGuardarPCEAModificado = (Button) view.findViewById(R.id.buttonGuardarPCEAModificado);
        this.buttonVolverPCEA = (Button) view.findViewById(R.id.buttonVolverPCEA);
    }

    private void asignarListener() {
        this.buttonGuardarPCEAModificado.setOnClickListener(this);
        this.buttonVolverPCEA.setOnClickListener(this);
        this.editTextFechaRegistroPCEAModificar.setOnClickListener(this);
    }

    private void cargarDatos() {
        Alarma alarma = (Alarma) Utilidad.getObjeto(personaContactoEnAlarma.getIdAlarma(), "Alarma");
        Persona persona = (Persona) Utilidad.getObjeto(personaContactoEnAlarma.getIdPersonaContacto(), "Persona");

        this.editTextNumberIdAlarmaPCEAModificar.setText(String.valueOf(alarma.getId()));
        this.editTextFechaRegistroPCEAModificar.setText(this.personaContactoEnAlarma.getFechaRegistro());
        this.editTextNumberIdPersonaPCEAModificar.setText(String.valueOf(persona.getId()));
        this.editTextAcuerdoPCEAModificar.setText(this.personaContactoEnAlarma.getAcuerdoAlcanzado());
    }

    private void modificarDatosCentroSanitarioEnAlarma(){
        this.personaContactoEnAlarma.setIdAlarma(Integer.parseInt(this.editTextNumberIdAlarmaPCEAModificar.getText().toString()));
        this.personaContactoEnAlarma.setIdPersonaContacto(Integer.parseInt(this.editTextNumberIdPersonaPCEAModificar.getText().toString()));
        this.personaContactoEnAlarma.setFechaRegistro(this.editTextFechaRegistroPCEAModificar.getText().toString());
        this.personaContactoEnAlarma.setAcuerdoAlcanzado(this.editTextAcuerdoPCEAModificar.getText().toString());
    }

    private void persistirPersonaContactoEnAlarma(){
        APIService apiService = ClienteRetrofit.getInstance().getAPIService();
        Call<ResponseBody> call = apiService.actualizarPersonaContactoEnAlarma(personaContactoEnAlarma.getId(), "Bearer "+ Token.getToken().getAccess(), this.personaContactoEnAlarma);
        call.enqueue(new Callback<ResponseBody>() {
            @Override
            public void onResponse(Call<ResponseBody> call, Response<ResponseBody> response) {
                if(response.errorBody() == null){
                    Toast.makeText(getContext(), "Modificado con éxito", Toast.LENGTH_SHORT).show();
                    volver();
                }
                else{
                    Toast.makeText(getContext(), "Error en la modificación: " + response.raw().message() + " (Pista: ¿existe Alarma y/o Persona con ese ID?)" , Toast.LENGTH_LONG).show();
                }
            }
            @Override
            public void onFailure(Call<ResponseBody> call, Throwable t) {
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
        if(this.editTextFechaRegistroPCEAModificar.getText().toString().isEmpty()) {
            Toast.makeText(getContext(), "Debes introducir una fecha", Toast.LENGTH_SHORT).show();
            return false;
        }
        if(this.editTextNumberIdAlarmaPCEAModificar.getText().toString().isEmpty()) {
            Toast.makeText(getContext(), "Debes introducir un ID de Alarma", Toast.LENGTH_SHORT).show();
            return false;
        }
        if(this.editTextNumberIdPersonaPCEAModificar.getText().toString().isEmpty()) {
            Toast.makeText(getContext(), "Debes introducir un ID de Persona", Toast.LENGTH_SHORT).show();
            return false;
        }
        return true;
    }

    @Override
    public void onClick(View view) {
        switch(view.getId()){
            case R.id.editTextFechaRegistroPCEAModificar:
                Utilidad.dialogoFecha(getContext(), editTextFechaRegistroPCEAModificar);
                break;
            case R.id.buttonGuardarPCEAModificado:
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