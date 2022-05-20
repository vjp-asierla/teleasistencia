package com.example.teleappsistencia.fragments.clasificacionAlarma;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.text.InputFilter;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.example.teleappsistencia.R;
import com.example.teleappsistencia.api.clases.Alarma;
import com.example.teleappsistencia.api.clases.ClasificacionAlarma;
import com.example.teleappsistencia.api.clases.Paciente;
import com.example.teleappsistencia.api.clases.Terminal;
import com.example.teleappsistencia.api.clases.TipoAlarma;
import com.example.teleappsistencia.api.clases.Token;
import com.example.teleappsistencia.api.servicios.APIService;
import com.example.teleappsistencia.fragments.alarma.ListarAlarmasFragment;
import com.example.teleappsistencia.utilidad.ClienteRetrofit;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link InsertarClasificacionAlarmaFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class InsertarClasificacionAlarmaFragment extends Fragment implements View.OnClickListener{

    private ClasificacionAlarma clasificacionAlarma;
    private EditText editTextNombreClasificacionAlarmaCrear;
    private EditText editTextCodigoClasificacionAlarmaCrear;
    private Button buttonGuardarClasificacionAlarma;
    private Button buttonVolverClasificacionAlarma;

    public InsertarClasificacionAlarmaFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @return A new instance of fragment InsertarClasificacionAlarmaFragment.
     */
    public static InsertarClasificacionAlarmaFragment newInstance() {
        InsertarClasificacionAlarmaFragment fragment = new InsertarClasificacionAlarmaFragment();
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
        View view = inflater.inflate(R.layout.fragment_insertar_clasificacion_alarma, container, false);

        // Capturar los elementos del layout
        capturarElementos(view);

        //Asignamos el listener a los botones
        asignarListener();

        return view;
    }

    private void capturarElementos(View view) {
        this.editTextNombreClasificacionAlarmaCrear = (EditText) view.findViewById(R.id.editTextNombreClasificacionAlarmaCrear);
        this.editTextCodigoClasificacionAlarmaCrear = (EditText) view.findViewById(R.id.editTextCodigoClasificacionAlarmaCrear);
        this.buttonGuardarClasificacionAlarma = (Button) view.findViewById(R.id.buttonGuardarClasificacionAlarma);
        this.buttonVolverClasificacionAlarma = (Button) view.findViewById(R.id.buttonVolverClasificacionAlarma);

        // Añadimos al campo código un filtro de mayúsculas y longitud máxima
        this.editTextCodigoClasificacionAlarmaCrear.setFilters(new InputFilter[] {new InputFilter.AllCaps(), new InputFilter.LengthFilter(3)});
    }

    private void asignarListener(){
        this.buttonGuardarClasificacionAlarma.setOnClickListener(this);
        this.buttonVolverClasificacionAlarma.setOnClickListener(this);
    }

    private boolean comprobaciones(){
        if(this.editTextNombreClasificacionAlarmaCrear.getText().toString().isEmpty()) {
            Toast.makeText(getContext(), "Debes introducir un nombre", Toast.LENGTH_SHORT).show();
            return false;
        }
        if(this.editTextCodigoClasificacionAlarmaCrear.getText().toString().length() < 2) {
            Toast.makeText(getContext(), "Debes introducir un Código de 2 o 3 letras.", Toast.LENGTH_SHORT).show();
            return false;
        }
        return true;
    }

    private void guardarDatos(){
        this.clasificacionAlarma = new ClasificacionAlarma();
        this.clasificacionAlarma.setNombre(this.editTextNombreClasificacionAlarmaCrear.getText().toString());
        this.clasificacionAlarma.setCodigo(this.editTextCodigoClasificacionAlarmaCrear.getText().toString());
    }

    private void volver(){
        ListarClasificacionAlarmaFragment listarClasificacionAlarmaFragment = new ListarClasificacionAlarmaFragment();
        getActivity().getSupportFragmentManager().beginTransaction()
                .replace(R.id.main_fragment, listarClasificacionAlarmaFragment)
                .addToBackStack(null)
                .commit();
    }

    private void persistirClasificacionAlarma(){
        APIService apiService = ClienteRetrofit.getInstance().getAPIService();
        Call<ClasificacionAlarma> call = apiService.addClasificacionAlarma(this.clasificacionAlarma, "Bearer "+ Token.getToken().getAccess());
        call.enqueue(new Callback<ClasificacionAlarma>() {
            @Override
            public void onResponse(Call<ClasificacionAlarma> call, Response<ClasificacionAlarma> response) {
                Toast.makeText(getContext(), "Alarma guardada con éxito",  Toast.LENGTH_LONG).show();
                volver();
            }

            @Override
            public void onFailure(Call<ClasificacionAlarma> call, Throwable t) {
                Toast.makeText(getContext(), "Error: "+t.getMessage(), Toast.LENGTH_LONG).show();
            }
        });
    }

    @Override
    public void onClick(View view) {
        switch(view.getId()){
            case R.id.buttonGuardarClasificacionAlarma:
                if(comprobaciones()){
                    guardarDatos();
                    persistirClasificacionAlarma();
                }
                break;
            case R.id.buttonVolverClasificacionAlarma:
                volver();
                break;
        }
    }
}