package com.example.teleappsistencia.fragments.tipoAlarma;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Spinner;
import android.widget.Toast;

import com.example.teleappsistencia.R;
import com.example.teleappsistencia.api.clases.ClasificacionAlarma;
import com.example.teleappsistencia.api.clases.TipoAlarma;
import com.example.teleappsistencia.api.clases.Token;
import com.example.teleappsistencia.api.servicios.APIService;
import com.example.teleappsistencia.utilidad.ClienteRetrofit;
import com.example.teleappsistencia.utilidad.Utilidad;

import java.util.ArrayList;
import java.util.List;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link InsertarTipoAlarmaFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class InsertarTipoAlarmaFragment extends Fragment implements View.OnClickListener{

    private static final String ARG_TIPOALARMA = "TipoAlarma";
    private TipoAlarma tipoAlarma;
    private List<ClasificacionAlarma> lClasificacionAlarma;
    private EditText editTextCodigoTipoAlarmaCrear;
    private EditText editTextNombreTipoAlarmaCrear;
    private RadioGroup radioGroupTipoAlarmaCrear;
    private RadioButton radioButtonSi;
    private RadioButton radioButtonNo;
    private Spinner spinnerClasificacionTipoAlarma;
    private Button buttonGuardarTipoAlarma;
    private Button buttonVolverTipoAlarma;

    public InsertarTipoAlarmaFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @return A new instance of fragment InsertarTipoAlarmaFragment.
     */

    public static InsertarTipoAlarmaFragment newInstance(TipoAlarma tipoAlarma) {
        InsertarTipoAlarmaFragment fragment = new InsertarTipoAlarmaFragment();
        Bundle args = new Bundle();
        args.putSerializable(ARG_TIPOALARMA, tipoAlarma);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            this.tipoAlarma = (TipoAlarma) getArguments().getSerializable(ARG_TIPOALARMA);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_insertar_tipo_alarma, container, false);

        // Capturar los elementos del layout
        capturarElementos(view);

        // Cargamos los datos del spinner
        cargarSpinner();

        //Asignamos el listener a los botones
        asignarListener();

        return view;
    }

    private void capturarElementos(View view){
        this.editTextCodigoTipoAlarmaCrear = (EditText) view.findViewById(R.id.editTextCodigoTipoAlarmaCrear);
        this.editTextNombreTipoAlarmaCrear= (EditText) view.findViewById(R.id.editTextNombreTipoAlarmaCrear);
        this.spinnerClasificacionTipoAlarma = (Spinner) view.findViewById(R.id.spinnerClasificacionTipoAlarma);
        this.radioButtonSi = (RadioButton) view.findViewById(R.id.radioButtonSi);
        this.radioButtonNo = (RadioButton) view.findViewById(R.id.radioButtonNo);
        this.buttonGuardarTipoAlarma= (Button) view.findViewById(R.id.buttonGuardarTipoAlarma);
        this.buttonVolverTipoAlarma = (Button) view.findViewById(R.id.buttonVolverTipoAlarma);
    }

    private void asignarListener(){
        this.buttonGuardarTipoAlarma.setOnClickListener(this);
        this.buttonVolverTipoAlarma.setOnClickListener(this);
    }

    private void cargarSpinner(){
        APIService apiService = ClienteRetrofit.getInstance().getAPIService();
        Call<List<Object>> call = apiService.getListaClasificacionAlarma("Bearer " + Token.getToken().getAccess());
        call.enqueue(new Callback<List<Object>>() {
            @Override
            public void onResponse(Call<List<Object>> call, Response<List<Object>> response) {
                List<Object> lObjetos = response.body();
                lClasificacionAlarma = (ArrayList<ClasificacionAlarma>) Utilidad.getObjeto(lObjetos, "ArrayList<ClasificacionAlarma>");
                ArrayAdapter adapter = new ArrayAdapter<>(getContext(), android.R.layout.simple_spinner_item, lClasificacionAlarma);
                spinnerClasificacionTipoAlarma.setAdapter(adapter);
            }

            @Override
            public void onFailure(Call<List<Object>> call, Throwable t) {
                Toast.makeText(getContext(), "Error: "+t.getMessage(), Toast.LENGTH_LONG).show();
            }
        });
    }

    private boolean comprobaciones(){
        if(this.editTextNombreTipoAlarmaCrear.getText().toString().isEmpty()) {
            Toast.makeText(getContext(), "Debes introducir un nombre", Toast.LENGTH_SHORT).show();
            return false;
        }
        if(this.editTextCodigoTipoAlarmaCrear.getText().toString().isEmpty()) {
            Toast.makeText(getContext(), "Debes introducir un Código.", Toast.LENGTH_SHORT).show();
            return false;
        }
        return true;
    }

    private void guardarDatos(){
        this.tipoAlarma = new TipoAlarma();
        ClasificacionAlarma clasificacionAlarma = (ClasificacionAlarma) spinnerClasificacionTipoAlarma.getSelectedItem();
        this.tipoAlarma.setNombre(this.editTextNombreTipoAlarmaCrear.getText().toString());
        this.tipoAlarma.setCodigo(this.editTextCodigoTipoAlarmaCrear.getText().toString());
        this.tipoAlarma.setEsDispositivo(radioButtonSi.isChecked());
        this.tipoAlarma.setClasificacionAlarma(clasificacionAlarma.getId());
    }

    private void volver(){
        ListarTipoAlarmaFragment listarTipoAlarmaFragment = new ListarTipoAlarmaFragment();
        getActivity().getSupportFragmentManager().beginTransaction()
                .replace(R.id.main_fragment, listarTipoAlarmaFragment)
                .addToBackStack(null)
                .commit();
    }

    private void persistirTipoAlarma(){
        APIService apiService = ClienteRetrofit.getInstance().getAPIService();
        Call<TipoAlarma> call = apiService.addTipoAlarma(this.tipoAlarma, "Bearer "+ Token.getToken().getAccess());
        call.enqueue(new Callback<TipoAlarma>() {
            @Override
            public void onResponse(Call<TipoAlarma> call, Response<TipoAlarma> response) {
                Toast.makeText(getContext(), "Tipo de Alarma creada con éxito", Toast.LENGTH_LONG).show();
                volver();
            }
            @Override
            public void onFailure(Call<TipoAlarma> call, Throwable t) {
                Toast.makeText(getContext(), "Error: "+t.getMessage(), Toast.LENGTH_LONG).show();
            }
        });
    }

    @Override
    public void onClick(View view) {
        switch (view.getId()){
            case R.id.buttonGuardarTipoAlarma:
                if(comprobaciones()){
                    guardarDatos();
                    persistirTipoAlarma();
                }
                break;
            case R.id.buttonVolverTipoAlarma:
                volver();
                break;
        }
    }
}