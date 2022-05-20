package com.example.teleappsistencia.fragments.alarma;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Adapter;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.CompoundButton;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import com.example.teleappsistencia.R;
import com.example.teleappsistencia.api.clases.Alarma;
import com.example.teleappsistencia.api.clases.Paciente;
import com.example.teleappsistencia.api.clases.Terminal;
import com.example.teleappsistencia.api.clases.TipoAlarma;
import com.example.teleappsistencia.api.clases.Token;
import com.example.teleappsistencia.api.servicios.APIService;
import com.example.teleappsistencia.fragments.centroSanitarioEnAlarma.ListarCentrosSanitariosEnAlarmaFragment;
import com.example.teleappsistencia.utilidad.ClienteRetrofit;
import com.example.teleappsistencia.utilidad.Utilidad;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link InsertarAlarmaFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class InsertarAlarmaFragment extends Fragment implements View.OnClickListener{

    private Alarma alarma;
    private List<TipoAlarma> lTipoAlarma;
    private List<Terminal> lTerminales;
    private List<Paciente> lPacientes;
    private Spinner spinnerTipoAlarma;
    private Spinner spinnerIdTerminalOPaciente;
    private RadioGroup radioGroupAlarma;
    private RadioButton radioButtonTerminal;
    private RadioButton radioButtonPaciente;
    private TextView textViewIdTerminalPacienteAlarmaCrear;
    private Button buttonGuardarAlarma;
    private Button buttonVolverAlarma;
    private ArrayAdapter adapterTiposAlarma;
    private ArrayAdapter adapterTerminales;
    private ArrayAdapter adapterPacientes;




    public InsertarAlarmaFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @return A new instance of fragment InsertarAlarmaFragment.
     */
    public static InsertarAlarmaFragment newInstance() {
        InsertarAlarmaFragment fragment = new InsertarAlarmaFragment();
        Bundle args = new Bundle();
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
        View view = inflater.inflate(R.layout.fragment_insertar_alarma, container, false);

        // Capturar los elementos del layout
        capturarElementos(view);

        //Cargamos los datos desde la API REST en los spinners
        cargarDatosSpinners();

        //Asignamos el listener a los botones
        asignarListener();

        return view;
    }

    private void capturarElementos(View view){
        this.spinnerTipoAlarma = (Spinner) view.findViewById(R.id.spinnerTipoAlarma);
        this.spinnerIdTerminalOPaciente = (Spinner) view.findViewById(R.id.spinnerIdTerminalOPaciente);
        this.radioGroupAlarma = (RadioGroup) view.findViewById(R.id.radioGroupAlarma);
        this.radioButtonTerminal = (RadioButton) view.findViewById(R.id.radioButtonTerminal);
        this.radioButtonPaciente = (RadioButton) view.findViewById(R.id.radioButtonPaciente);
        this.textViewIdTerminalPacienteAlarmaCrear = (TextView) view.findViewById(R.id.textViewIdTerminalPacienteAlarmaCrear);
        this.buttonGuardarAlarma = (Button) view.findViewById(R.id.buttonGuardarAlarma);
        this.buttonVolverAlarma = (Button) view.findViewById(R.id.buttonVolverAlarma);
    }

    private void cargarDatosSpinners(){
        cargarDatosTiposAlarmas();
        cargarDatosTerminales();
        cargarDatosPacientes();
    }

    private void asignarListener(){
        this.buttonGuardarAlarma.setOnClickListener(this);
        this.buttonVolverAlarma.setOnClickListener(this);
        this.radioGroupAlarma.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(RadioGroup radioGroup, int id) {
                switch (id){
                    case R.id.radioButtonTerminal:
                        spinnerIdTerminalOPaciente.setAdapter(adapterTerminales);
                        break;
                    case R.id.radioButtonPaciente:
                        spinnerIdTerminalOPaciente.setAdapter(adapterPacientes);
                        break;
                }
            }
        });
    }

    private void guardarDatos(){
        Paciente paciente;
        Terminal terminal;

        TipoAlarma tipoAlarma = (TipoAlarma) this.spinnerTipoAlarma.getSelectedItem();

        this.alarma = new Alarma();
        this.alarma.setId_tipo_alarma(tipoAlarma.getId());

        switch (this.radioGroupAlarma.getCheckedRadioButtonId()){
            case R.id.radioButtonTerminal:
                terminal = (Terminal) this.spinnerIdTerminalOPaciente.getSelectedItem();
                this.alarma.setId_terminal(terminal.getId());
                break;
            case R.id.radioButtonPaciente:
                paciente = (Paciente) this.spinnerIdTerminalOPaciente.getSelectedItem();
                this.alarma.setId_paciente_ucr(paciente.getId());
                break;
        }
    }


    private void volver(){
        ListarAlarmasFragment listarAlarmasFragment = new ListarAlarmasFragment();
        getActivity().getSupportFragmentManager().beginTransaction()
                .replace(R.id.main_fragment, listarAlarmasFragment)
                .addToBackStack(null)
                .commit();
    }

    private void cargarDatosTiposAlarmas(){
        APIService apiService = ClienteRetrofit.getInstance().getAPIService();
        Call<List<Object>> call = apiService.getTiposAlarma("Bearer "+ Token.getToken().getAccess());
        call.enqueue(new Callback<List<Object>>() {
            @Override
            public void onResponse(Call<List<Object>> call, Response<List<Object>> response) {
                List<Object> lObjetos = response.body();
                lTipoAlarma = (ArrayList<TipoAlarma>) Utilidad.getObjeto(lObjetos, "ArrayList<TipoAlarma>");
                adapterTiposAlarma = new ArrayAdapter<>(getContext(), android.R.layout.simple_spinner_item, lTipoAlarma);
                spinnerTipoAlarma.setAdapter(adapterTiposAlarma);
            }

            @Override
            public void onFailure(Call<List<Object>> call, Throwable t) {
                Toast.makeText(getContext(), "Error: "+t.getMessage(), Toast.LENGTH_LONG).show();
            }
        });
    }

    private void cargarDatosTerminales(){
        APIService apiService = ClienteRetrofit.getInstance().getAPIService();
        Call<List<Object>> call = apiService.getTerminales("Bearer "+ Token.getToken().getAccess());
        call.enqueue(new Callback<List<Object>>() {
            @Override
            public void onResponse(Call<List<Object>> call, Response<List<Object>> response) {
                List<Object> lObjetos = response.body();
                lTerminales = (ArrayList<Terminal>) Utilidad.getObjeto(lObjetos, "ArrayList<Terminal>");
                adapterTerminales = new ArrayAdapter<>(getContext(), android.R.layout.simple_spinner_item, lTerminales);
                spinnerIdTerminalOPaciente.setAdapter(adapterTerminales);
            }

            @Override
            public void onFailure(Call<List<Object>> call, Throwable t) {
                Toast.makeText(getContext(), "Error: "+t.getMessage(), Toast.LENGTH_LONG).show();
            }
        });
    }

    private void cargarDatosPacientes(){
        APIService apiService = ClienteRetrofit.getInstance().getAPIService();
        Call<List<Object>> call = apiService.getPacientes("Bearer "+ Token.getToken().getAccess());
        call.enqueue(new Callback<List<Object>>() {
            @Override
            public void onResponse(Call<List<Object>> call, Response<List<Object>> response) {
                List<Object> lObjetos = response.body();
                lPacientes = (ArrayList<Paciente>) Utilidad.getObjeto(lObjetos, "ArrayList<Paciente>");
                adapterPacientes = new ArrayAdapter<>(getContext(), android.R.layout.simple_spinner_item, lPacientes);
            }

            @Override
            public void onFailure(Call<List<Object>> call, Throwable t) {
                Toast.makeText(getContext(), "Error: "+t.getMessage(), Toast.LENGTH_LONG).show();
            }
        });
    }

    private void persistirAlarma(){
        APIService apiService = ClienteRetrofit.getInstance().getAPIService();
        Call<Alarma> call = apiService.addAlarma(this.alarma, "Bearer "+ Token.getToken().getAccess());
        call.enqueue(new Callback<Alarma>() {
            @Override
            public void onResponse(Call<Alarma> call, Response<Alarma> response) {
                Toast.makeText(getContext(), "Alarma guardada con éxito",  Toast.LENGTH_LONG).show();
                volver();
            }

            @Override
            public void onFailure(Call<Alarma> call, Throwable t) {
                Toast.makeText(getContext(), "Error: "+t.getMessage(), Toast.LENGTH_LONG).show();
            }
        });
    }

    @Override
    public void onClick(View view) {
        switch(view.getId()){
            case R.id.buttonGuardarAlarma:
                guardarDatos();
                persistirAlarma();
                break;
            case R.id.buttonVolverAlarma:
                volver();
                break;
        }
    }
}