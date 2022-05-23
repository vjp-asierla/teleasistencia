package com.example.teleappsistencia.ui.fragments.recursosComunitariosEnAlarma;

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
import com.example.teleappsistencia.modelos.RecursoComunitario;
import com.example.teleappsistencia.modelos.RecursoComunitarioEnAlarma;
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
 * Use the {@link ModificarRecursoComunitarioEnAlarmaFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class ModificarRecursoComunitarioEnAlarmaFragment extends Fragment implements View.OnClickListener{

    private static final String ARG_RCEA = "RCEA";
    private RecursoComunitarioEnAlarma recursoComunitarioEnAlarma;
    private EditText editTextNumberIdAlarmaRCEAModificar;
    private EditText editTextNumberIdRecursoComunitarioRCEAModificar;
    private EditText editTextFechaRegistroRCEAModificar;
    private EditText editTextPersonaRCEAModificar;
    private EditText editTextAcuerdoRCEAModificar;
    private Button buttonGuardarRCEAModificado;
    private Button buttonVolverRCEA;

    public ModificarRecursoComunitarioEnAlarmaFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @return A new instance of fragment ModificarRecursoComunitarioEnAlarmaFragment.
     */
    
    public static ModificarRecursoComunitarioEnAlarmaFragment newInstance(RecursoComunitarioEnAlarma recursoComunitarioEnAlarma) {
        ModificarRecursoComunitarioEnAlarmaFragment fragment = new ModificarRecursoComunitarioEnAlarmaFragment();
        Bundle args = new Bundle();
        args.putSerializable(ARG_RCEA, recursoComunitarioEnAlarma);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            this.recursoComunitarioEnAlarma = (RecursoComunitarioEnAlarma) getArguments().getSerializable(ARG_RCEA);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_modificar_recurso_comunitario_en_alarma, container, false);

        // Capturar los elementos del layout
        capturarElementos(view);

        //Asignamos el listener a los botones
        asignarListener();

        //Cargamos los datos
        if(this.recursoComunitarioEnAlarma != null){
            cargarDatos();
        }
        
        return view;
    }

    private void capturarElementos(View view) {
        this.editTextNumberIdAlarmaRCEAModificar = (EditText) view.findViewById(R.id.editTextNumberIdAlarmaRCEAModificar);
        this.editTextNumberIdRecursoComunitarioRCEAModificar = (EditText) view.findViewById(R.id.editTextNumberIdRecursoComunitarioRCEAModificar);
        this.editTextFechaRegistroRCEAModificar = (EditText) view.findViewById(R.id.editTextFechaRegistroRCEAModificar);
        this.editTextPersonaRCEAModificar = (EditText) view.findViewById(R.id.editTextPersonaRCEAModificar);
        this.editTextAcuerdoRCEAModificar = (EditText) view.findViewById(R.id.editTextAcuerdoRCEAModificar);
        this.buttonGuardarRCEAModificado = (Button) view.findViewById(R.id.buttonGuardarRCEAModificado);
        this.buttonVolverRCEA = (Button) view.findViewById(R.id.buttonVolverRCEA);
    }

    private void asignarListener() {
        this.buttonGuardarRCEAModificado.setOnClickListener(this);
        this.buttonVolverRCEA.setOnClickListener(this);
        this.editTextFechaRegistroRCEAModificar.setOnClickListener(this);
    }

    private void cargarDatos() {
        Alarma alarma = (Alarma) Utilidad.getObjeto(recursoComunitarioEnAlarma.getIdAlarma(), "Alarma");
        RecursoComunitario recursoComunitario = (RecursoComunitario) Utilidad.getObjeto(recursoComunitarioEnAlarma.getIdRecursoComunitairo(), "RecursoComunitario");

        this.editTextNumberIdAlarmaRCEAModificar.setText(String.valueOf(alarma.getId()));
        this.editTextNumberIdRecursoComunitarioRCEAModificar.setText(String.valueOf(recursoComunitario.getId()));
        this.editTextFechaRegistroRCEAModificar.setText(this.recursoComunitarioEnAlarma.getFechaRegistro());
        this.editTextPersonaRCEAModificar.setText(this.recursoComunitarioEnAlarma.getPersona());
        this.editTextAcuerdoRCEAModificar.setText(this.recursoComunitarioEnAlarma.getAcuerdoAlcanzado());
    }

    private void modificarDatosRecursoComunitarioEnAlarma(){
        this.recursoComunitarioEnAlarma.setIdAlarma(Integer.parseInt(this.editTextNumberIdAlarmaRCEAModificar.getText().toString()));
        this.recursoComunitarioEnAlarma.setIdRecursoComunitairo(Integer.parseInt(this.editTextNumberIdRecursoComunitarioRCEAModificar.getText().toString()));
        this.recursoComunitarioEnAlarma.setFechaRegistro(this.editTextFechaRegistroRCEAModificar.getText().toString());
        this.recursoComunitarioEnAlarma.setPersona(this.editTextPersonaRCEAModificar.getText().toString());
        this.recursoComunitarioEnAlarma.setAcuerdoAlcanzado(this.editTextAcuerdoRCEAModificar.getText().toString());
    }

    private void persistirRecursoComunitarioAlarma(){
        APIService apiService = ClienteRetrofit.getInstance().getAPIService();
        Call<ResponseBody> call = apiService.actualizarRecursoComunitarioEnAlarma(recursoComunitarioEnAlarma.getId(), "Bearer "+ Token.getToken().getAccess(), this.recursoComunitarioEnAlarma);
        call.enqueue(new Callback<ResponseBody>() {
            @Override
            public void onResponse(Call<ResponseBody> call, Response<ResponseBody> response) {
                if(response.errorBody() == null){
                    Toast.makeText(getContext(), "Modificado con éxito", Toast.LENGTH_SHORT).show();
                    volver();
                }
                else{
                    Toast.makeText(getContext(), "Error en la modificación: " + response.raw().message() + " (Pista: ¿existe Alarma y/o Recurso Comunitario con ese ID?)" , Toast.LENGTH_LONG).show();
                }
            }
            @Override
            public void onFailure(Call<ResponseBody> call, Throwable t) {
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
        if(this.editTextFechaRegistroRCEAModificar.getText().toString().isEmpty()) {
            Toast.makeText(getContext(), "Debes introducir una fecha", Toast.LENGTH_SHORT).show();
            return false;
        }
        if(this.editTextNumberIdAlarmaRCEAModificar.getText().toString().isEmpty()) {
            Toast.makeText(getContext(), "Debes introducir un ID de Alarma", Toast.LENGTH_SHORT).show();
            return false;
        }
        if(this.editTextNumberIdRecursoComunitarioRCEAModificar.getText().toString().isEmpty()) {
            Toast.makeText(getContext(), "Debes introducir un ID de Recurso Comunitario", Toast.LENGTH_SHORT).show();
            return false;
        }
        return true;
    }

    @Override
    public void onClick(View view) {
        switch(view.getId()){
            case R.id.editTextFechaRegistroRCEAModificar:
                Utilidad.dialogoFecha(getContext(), editTextFechaRegistroRCEAModificar);
                break;
            case R.id.buttonGuardarRCEAModificado:
                if(comprobaciones()){
                    modificarDatosRecursoComunitarioEnAlarma();
                    persistirRecursoComunitarioAlarma();
                }
                break;
            case R.id.buttonVolverRCEA:
                volver();
                break;
        }
    }
}