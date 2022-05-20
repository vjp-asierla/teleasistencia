package com.example.teleappsistencia.fragments.alarma;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.Toast;

import com.example.teleappsistencia.R;
import com.example.teleappsistencia.api.clases.Alarma;
import com.example.teleappsistencia.api.clases.Teleoperador;
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
 * Use the {@link ModificarAlarmaFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class ModificarAlarmaFragment extends Fragment {


    private static final String ARG_ALARMA = "Alarma";
    private Alarma alarma;
    private Spinner spinnerEstadoAlarma;
    private EditText editTextObservacionesAlarmaModificar;
    private EditText editTextResumenAlarmaModificar;
    private EditText editTextNumberIdTeleoperadorModificar;
    private Button buttonGuardarAlarmaModificada;
    private Button buttonVolver;


    public ModificarAlarmaFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @return A new instance of fragment ModificarAlarmaFragment.
     */

    public static ModificarAlarmaFragment newInstance(Alarma alarma) {
        ModificarAlarmaFragment fragment = new ModificarAlarmaFragment();
        Bundle args = new Bundle();
        args.putSerializable(ARG_ALARMA, alarma);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            this.alarma = (Alarma) getArguments().getSerializable(ARG_ALARMA);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragmen
        View view = inflater.inflate(R.layout.fragment_modificar_alarma, container, false);

        // Capturar los elementos del layout
        capturarElementos(view);

        //Asignamos el listener a los botones
        asignarListener();

        //Cargamos los datos
        if(this.alarma != null){
            cargarDatos();
        }

        return view;
    }

    private void capturarElementos(View view){
        this.spinnerEstadoAlarma = (Spinner) view.findViewById(R.id.spinnerEstadoAlarma);
        this.editTextObservacionesAlarmaModificar = (EditText) view.findViewById(R.id.editTextObservacionesAlarmaModificar);
        this.editTextResumenAlarmaModificar = (EditText) view.findViewById(R.id.editTextResumenAlarmaModificar);
        this.editTextNumberIdTeleoperadorModificar = (EditText) view.findViewById(R.id.editTextNumberIdTeleoperadorModificar);
        this.buttonGuardarAlarmaModificada = (Button) view.findViewById(R.id.buttonGuardarAlarmaModificada);
        this.buttonVolver = (Button) view.findViewById(R.id.buttonVolver);
    }

    private void cargarDatos() {
        int idTeleoperador;
        ArrayAdapter adapter = ArrayAdapter.createFromResource(getContext(), R.array.estados, android.R.layout.simple_spinner_item);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        this.spinnerEstadoAlarma.setAdapter(adapter);
        if(this.alarma.getEstado_alarma().equals("Abierta")){
            this.spinnerEstadoAlarma.setSelection(0);
        }
        else{
            this.spinnerEstadoAlarma.setSelection(1);
        }
        this.editTextObservacionesAlarmaModificar.setText(this.alarma.getObservaciones());
        this.editTextResumenAlarmaModificar.setText(this.alarma.getResumen());
        if(this.alarma.getId_teleoperador() != null){
            idTeleoperador = ((Teleoperador) Utilidad.getObjeto(this.alarma.getId_teleoperador(), "Teleoperador")).getId();
            this.editTextNumberIdTeleoperadorModificar.setText(String.valueOf(idTeleoperador));
        }
    }

    private void asignarListener(){
        this.buttonGuardarAlarmaModificada.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if(editTextNumberIdTeleoperadorModificar.getText().toString().isEmpty()){
                    Toast.makeText(getContext(), "Es obligatorio indicar un ID de Teleoperador", Toast.LENGTH_SHORT).show();
                }
                else{
                    modificarDatosAlarma();
                    persistirAlarma();
                }
            }
        });

        this.buttonVolver.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                volver();
            }
        });
    }

    private void modificarDatosAlarma(){
        alarma.setObservaciones(this.editTextObservacionesAlarmaModificar.getText().toString());
        alarma.setResumen(this.editTextResumenAlarmaModificar.getText().toString());
        alarma.setEstado_alarma((String)this.spinnerEstadoAlarma.getSelectedItem());
        alarma.setId_teleoperador(Integer.parseInt(this.editTextNumberIdTeleoperadorModificar.getText().toString()));
    }

    private void persistirAlarma(){
        APIService apiService = ClienteRetrofit.getInstance().getAPIService();
        Call<ResponseBody> call = apiService.actualizarAlarma(alarma.getId(), "Bearer "+ Token.getToken().getAccess(), alarma);
        call.enqueue(new Callback<ResponseBody>() {
            @Override
            public void onResponse(Call<ResponseBody> call, Response<ResponseBody> response) {
                if(response.errorBody() == null){
                    Toast.makeText(getContext(), "Alarma modificada con éxito", Toast.LENGTH_SHORT).show();
                    volver();
                }
                else{
                    Toast.makeText(getContext(), "Error en la modificación: " + response.raw().message() + " (Pista: ¿existe Teleoperador con ese ID?)" , Toast.LENGTH_LONG).show();
                }
            }
            @Override
            public void onFailure(Call<ResponseBody> call, Throwable t) {
                Toast.makeText(getContext(), "Error: "+t.getMessage(), Toast.LENGTH_LONG).show();
            }
        });
    }

    private void volver(){
        ListarAlarmasFragment listarAlarmasFragment = new ListarAlarmasFragment();
        getActivity().getSupportFragmentManager().beginTransaction()
                .replace(R.id.main_fragment, listarAlarmasFragment)
                .addToBackStack(null)
                .commit();
    }

}