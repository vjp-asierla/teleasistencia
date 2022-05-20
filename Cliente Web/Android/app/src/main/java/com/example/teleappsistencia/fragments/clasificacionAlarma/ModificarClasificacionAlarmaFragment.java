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
import com.example.teleappsistencia.api.clases.ClasificacionAlarma;
import com.example.teleappsistencia.api.clases.Token;
import com.example.teleappsistencia.api.servicios.APIService;
import com.example.teleappsistencia.utilidad.ClienteRetrofit;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link ModificarClasificacionAlarmaFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class ModificarClasificacionAlarmaFragment extends Fragment implements View.OnClickListener{

    private final static String ARG_CLASIFICACIONALARMA = "ClasificacionAlarma";
    private ClasificacionAlarma clasificacionAlarma;
    private EditText editTextNombreClasificacionAlarmaModificar;
    private EditText editTextCodigoClasificacionAlarmaModificar;
    private Button buttonGuardarClasificacionAlarma;
    private Button buttonVolverClasificacionAlarma;

    public ModificarClasificacionAlarmaFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @return A new instance of fragment ModificarClasificacionAlarmaFragment.
     */
    public static ModificarClasificacionAlarmaFragment newInstance(ClasificacionAlarma clasificacionAlarma) {
        ModificarClasificacionAlarmaFragment fragment = new ModificarClasificacionAlarmaFragment();
        Bundle args = new Bundle();
        args.putSerializable(ARG_CLASIFICACIONALARMA, clasificacionAlarma);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            this.clasificacionAlarma = (ClasificacionAlarma) getArguments().getSerializable(ARG_CLASIFICACIONALARMA);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_modificar_clasificacion_alarma, container, false);

        // Capturar los elementos del layout
        capturarElementos(view);

        //Cargamos los datos
        if(this.clasificacionAlarma != null){
            cargarDatos();
        }

        //Asignamos el listener a los botones
        asignarListener();

        return view;
    }


    private void capturarElementos(View view) {
        this.editTextNombreClasificacionAlarmaModificar = (EditText) view.findViewById(R.id.editTextNombreClasificacionAlarmaModificar);
        this.editTextCodigoClasificacionAlarmaModificar = (EditText) view.findViewById(R.id.editTextCodigoClasificacionAlarmaModificar);
        this.buttonGuardarClasificacionAlarma = (Button) view.findViewById(R.id.buttonGuardarClasificacionAlarma);
        this.buttonVolverClasificacionAlarma = (Button) view.findViewById(R.id.buttonVolverClasificacionAlarma);

        // Añadimos al campo código un filtro de mayúsculas y longitud máxima
        this.editTextCodigoClasificacionAlarmaModificar.setFilters(new InputFilter[] {new InputFilter.AllCaps(), new InputFilter.LengthFilter(3)});
    }

    private void cargarDatos(){
        this.editTextNombreClasificacionAlarmaModificar.setText(this.clasificacionAlarma.getNombre());
        this.editTextCodigoClasificacionAlarmaModificar.setText(this.clasificacionAlarma.getCodigo());
    }

    private void asignarListener(){
        this.buttonGuardarClasificacionAlarma.setOnClickListener(this);
        this.buttonVolverClasificacionAlarma.setOnClickListener(this);
    }

    private boolean comprobaciones(){
        if(this.editTextNombreClasificacionAlarmaModificar.getText().toString().isEmpty()) {
            Toast.makeText(getContext(), "Debes introducir un nombre", Toast.LENGTH_SHORT).show();
            return false;
        }
        if(this.editTextCodigoClasificacionAlarmaModificar.getText().toString().length() < 2) {
            Toast.makeText(getContext(), "Debes introducir un Código de 2 o 3 letras.", Toast.LENGTH_SHORT).show();
            return false;
        }
        return true;
    }

    private void guardarDatos(){
        this.clasificacionAlarma.setNombre(this.editTextNombreClasificacionAlarmaModificar.getText().toString());
        this.clasificacionAlarma.setCodigo(this.editTextCodigoClasificacionAlarmaModificar.getText().toString());
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
        Call<ResponseBody> call = apiService.actualizarClasificacionAlarma(this.clasificacionAlarma.getId(), "Bearer "+ Token.getToken().getAccess(), this.clasificacionAlarma);
        call.enqueue(new Callback<ResponseBody>() {
            @Override
            public void onResponse(Call<ResponseBody> call, Response<ResponseBody> response) {
                Toast.makeText(getContext(), "Clasificación de Alarma modificada con éxito", Toast.LENGTH_LONG).show();
                volver();
            }
            @Override
            public void onFailure(Call<ResponseBody> call, Throwable t) {
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