package com.example.teleappsistencia.fragments.recursosComunitariosEnAlarma;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.example.teleappsistencia.R;
import com.example.teleappsistencia.api.clases.RecursoComunitarioEnAlarma;
import com.example.teleappsistencia.api.clases.Token;
import com.example.teleappsistencia.api.servicios.APIService;
import com.example.teleappsistencia.utilidad.ClienteRetrofit;
import com.example.teleappsistencia.utilidad.Utilidad;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link InsertarRecursosComunitariosEnAlarmaFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class InsertarRecursosComunitariosEnAlarmaFragment extends Fragment implements View.OnClickListener{

    private RecursoComunitarioEnAlarma recursoComunitarioEnAlarma;
    private EditText editTextNumberIdAlarmaRCEACrear;
    private EditText editTextNumberIdRecursoComunitarioRCEACrear;
    private EditText editTextFechaRegistroRCEACrear;
    private EditText editTextPersonaRCEACrear;
    private EditText editTextAcuerdoRCEACrear;
    private Button buttonGuardarRCEAModificado;
    private Button buttonVolverRCEA;

    public InsertarRecursosComunitariosEnAlarmaFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @return A new instance of fragment InsertarRecursosComunitariosEnAlarmaFragment.
     */
    
    public static InsertarRecursosComunitariosEnAlarmaFragment newInstance(String param1, String param2) {
        InsertarRecursosComunitariosEnAlarmaFragment fragment = new InsertarRecursosComunitariosEnAlarmaFragment();
        Bundle args = new Bundle();
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_insertar_recursos_comunitarios_en_alarma, container, false);

        // Capturar los elementos del layout
        capturarElementos(view);

        //Asignamos el listener a los botones
        asignarListener();
        
        return view;
    }

    private void capturarElementos(View view) {
        this.editTextNumberIdAlarmaRCEACrear = (EditText) view.findViewById(R.id.editTextNumberIdAlarmaRCEACrear);
        this.editTextNumberIdRecursoComunitarioRCEACrear = (EditText) view.findViewById(R.id.editTextNumberIdRecursoComunitarioRCEACrear);
        this.editTextFechaRegistroRCEACrear = (EditText) view.findViewById(R.id.editTextFechaRegistroRCEACrear);
        this.editTextPersonaRCEACrear = (EditText) view.findViewById(R.id.editTextPersonaRCEACrear);
        this.editTextAcuerdoRCEACrear = (EditText) view.findViewById(R.id.editTextAcuerdoRCEACrear);
        this.buttonGuardarRCEAModificado = (Button) view.findViewById(R.id.buttonGuardarRCEAModificado);
        this.buttonVolverRCEA = (Button) view.findViewById(R.id.buttonVolverRCEA);
    }

    private void asignarListener() {
        this.buttonGuardarRCEAModificado.setOnClickListener(this);
        this.buttonVolverRCEA.setOnClickListener(this);
        this.editTextFechaRegistroRCEACrear.setOnClickListener(this);
    }

    private void crearDatosRecursoComunitarioEnAlarma(){
        this.recursoComunitarioEnAlarma = new RecursoComunitarioEnAlarma();
        this.recursoComunitarioEnAlarma.setIdAlarma(Integer.parseInt(this.editTextNumberIdAlarmaRCEACrear.getText().toString()));
        this.recursoComunitarioEnAlarma.setIdRecursoComunitairo(Integer.parseInt(this.editTextNumberIdRecursoComunitarioRCEACrear.getText().toString()));
        this.recursoComunitarioEnAlarma.setFechaRegistro(this.editTextFechaRegistroRCEACrear.getText().toString());
        this.recursoComunitarioEnAlarma.setPersona(this.editTextPersonaRCEACrear.getText().toString());
        this.recursoComunitarioEnAlarma.setAcuerdoAlcanzado(this.editTextAcuerdoRCEACrear.getText().toString());
    }

    private void persistirRecursoComunitarioAlarma(){
        APIService apiService = ClienteRetrofit.getInstance().getAPIService();
        Call<RecursoComunitarioEnAlarma> call = apiService.addRecursoComunitarioEnAlarma(this.recursoComunitarioEnAlarma, "Bearer "+ Token.getToken().getAccess());
        call.enqueue(new Callback<RecursoComunitarioEnAlarma>() {
            @Override
            public void onResponse(Call<RecursoComunitarioEnAlarma> call, Response<RecursoComunitarioEnAlarma> response) {
                if(response.errorBody() == null){
                    Toast.makeText(getContext(), "Guardado con éxito", Toast.LENGTH_SHORT).show();
                    volver();
                }
                else{
                    Toast.makeText(getContext(), "Error en la creación: " + response.raw().message() + " (Pista: ¿existe Alarma y/o Recurso Comunitario con ese ID?)" , Toast.LENGTH_LONG).show();
                }
            }
            @Override
            public void onFailure(Call<RecursoComunitarioEnAlarma> call, Throwable t) {
                Toast.makeText(getContext(), "Error: "+t.getMessage(), Toast.LENGTH_LONG).show();
            }
        });
    }

    private void volver(){
        ListarRecursosComunitariosEnAlarmaFragment lRCEA = new ListarRecursosComunitariosEnAlarmaFragment();
        getActivity().getSupportFragmentManager().beginTransaction()
                .replace(R.id.main_fragment, lRCEA)
                .addToBackStack(null)
                .commit();
    }

    private boolean comprobaciones(){
        if(this.editTextFechaRegistroRCEACrear.getText().toString().isEmpty()) {
            Toast.makeText(getContext(), "Debes introducir una fecha", Toast.LENGTH_SHORT).show();
            return false;
        }
        if(this.editTextNumberIdAlarmaRCEACrear.getText().toString().isEmpty()) {
            Toast.makeText(getContext(), "Debes introducir un ID de Alarma", Toast.LENGTH_SHORT).show();
            return false;
        }
        if(this.editTextNumberIdRecursoComunitarioRCEACrear.getText().toString().isEmpty()) {
            Toast.makeText(getContext(), "Debes introducir un ID de Recurso Comunitario", Toast.LENGTH_SHORT).show();
            return false;
        }
        return true;
    }

    @Override
    public void onClick(View view) {
        switch(view.getId()){
            case R.id.editTextFechaRegistroRCEACrear:
                Utilidad.dialogoFecha(getContext(), editTextFechaRegistroRCEACrear);
                break;
            case R.id.buttonGuardarRCEAModificado:
                if(comprobaciones()){
                    crearDatosRecursoComunitarioEnAlarma();
                    persistirRecursoComunitarioAlarma();
                }
                break;
            case R.id.buttonVolverRCEA:
                volver();
                break;
        }
    }
}