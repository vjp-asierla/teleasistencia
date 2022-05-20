package com.example.teleappsistencia.fragments.gestionAlarmasFragments;

import android.content.res.ColorStateList;
import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import com.example.teleappsistencia.R;
import com.example.teleappsistencia.api.clases.Alarma;
import com.example.teleappsistencia.api.clases.ClasificacionAlarma;
import com.example.teleappsistencia.api.clases.Contacto;
import com.example.teleappsistencia.api.clases.Paciente;
import com.example.teleappsistencia.api.clases.Persona;
import com.example.teleappsistencia.api.clases.Terminal;
import com.example.teleappsistencia.api.clases.TipoAlarma;
import com.example.teleappsistencia.api.clases.Token;
import com.example.teleappsistencia.api.servicios.APIService;
import com.example.teleappsistencia.utilidad.ClienteRetrofit;
import com.example.teleappsistencia.utilidad.Utilidad;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link InfoGestionAlarmaFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class InfoGestionAlarmaFragment extends Fragment {

    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_ALARMAAGESTIONAR = "Alarma";

    private Alarma alarma;
    private int color;
    private TextView textViewIdAlarma;
    private TextView textViewTipoAlarma;
    private TextView textViewClasificacionAlarma;
    private TextView textViewNumTerminal;
    private TextView textViewNombreyApellidos;
    private TextView textViewNumeroTelefono;
    private ListView listViewContactos;
    private Button btnGestionar;
    private int idAlarma;
    private String tipoAlarma;
    private String clasificacionAlarma;
    private int numTerminal;
    private String nombrePaciente;
    private String numeroTelefono;
    private ArrayList<Object> lContactos;
    private Terminal terminal;
    private Paciente paciente;


    public InfoGestionAlarmaFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @return A new instance of fragment InfoGestionAlarmaFragment.
     */
    public static InfoGestionAlarmaFragment newInstance(Alarma alarma) {
        InfoGestionAlarmaFragment fragment = new InfoGestionAlarmaFragment();
        Bundle args = new Bundle();
        args.putSerializable(ARG_ALARMAAGESTIONAR, alarma);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            this.alarma = (Alarma) getArguments().getSerializable(ARG_ALARMAAGESTIONAR);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_info_gestion_alarma, container, false);

        // Capturar los elementos del layout
        capturarElementos(view);

        //Asignamos el listener a los botones
        asignarListener();

        if(this.alarma != null){
            extraerDatos();
            cargarDatos();
        }

        return view;
    }

    private void capturarElementos(View view) {
        this.textViewIdAlarma = (TextView) view.findViewById(R.id.textViewIdAlarma);
        this.textViewTipoAlarma = (TextView) view.findViewById(R.id.textViewTipoAlarma);
        this.textViewClasificacionAlarma = (TextView) view.findViewById(R.id.textViewClasificacionAlarma);
        this.textViewNumTerminal = (TextView) view.findViewById(R.id.textViewNumTerminal);
        this.textViewNombreyApellidos = (TextView) view.findViewById(R.id.textViewNombreyApellidos);
        this.textViewNumeroTelefono = (TextView) view.findViewById(R.id.textViewNumeroTelefono);
        this.btnGestionar = (Button) view.findViewById(R.id.btnGestionar);
        this.listViewContactos = (ListView) view.findViewById(R.id.listViewContactos);

    }

    private void asignarListener(){
        this.btnGestionar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                GestionAlarmaFragment gAF = GestionAlarmaFragment.newInstance(alarma, nombrePaciente, numeroTelefono, lContactos, paciente, terminal, color);
                getActivity().getSupportFragmentManager().beginTransaction()
                        .replace(R.id.main_fragment, gAF)
                        .addToBackStack(null)
                        .commit();
            }
        });
    }

    private void extraerDatos(){
        Persona persona;
        TipoAlarma tipoAlarma;
        ClasificacionAlarma clasificacionAlarma;
        if(this.alarma.getId_paciente_ucr() != null){
            this.color = getResources().getColor(R.color.azul, getActivity().getTheme());
            this.paciente = (Paciente) Utilidad.getObjeto(this.alarma.getId_paciente_ucr(), "Paciente");
            this.terminal = (Terminal) Utilidad.getObjeto(paciente.getId_terminal(), "Terminal");
        }
        else{
            this.color = getResources().getColor(R.color.verde, getActivity().getTheme());
            this.terminal = (Terminal) Utilidad.getObjeto(this.alarma.getId_terminal(), "Terminal");
            this.paciente = (Paciente) Utilidad.getObjeto(terminal.getId_titular(), "Paciente");
        }
        persona = (Persona) Utilidad.getObjeto(paciente.getId_persona(), "Persona");
        tipoAlarma = (TipoAlarma) Utilidad.getObjeto(this.alarma.getId_tipo_alarma(), "TipoAlarma");
        clasificacionAlarma = (ClasificacionAlarma) Utilidad.getObjeto(tipoAlarma.getClasificacionAlarma(), "ClasificacionAlarma");

        this.idAlarma = this.alarma.getId();
        this.tipoAlarma = tipoAlarma.getNombre() + " ("+ tipoAlarma.getCodigo() + ")";
        this.clasificacionAlarma = clasificacionAlarma.getNombre() + " (" + clasificacionAlarma.getCodigo() + ")";
        this.numTerminal = terminal.getId();
        this.nombrePaciente = persona.getNombre()+" "+persona.getApellidos();
        this.numeroTelefono = persona.getTelefono_movil() + "/" + persona.getTelefono_fijo();
        cargarDatos();
        extraerContactos(paciente.getId());
    }

    private void cargarDatos(){
        ColorStateList csl = ColorStateList.valueOf(this.color);
        this.btnGestionar.setBackgroundTintList(csl);

        this.textViewIdAlarma.setText("ID Alarma: "+this.idAlarma);
        this.textViewTipoAlarma.setText("Tipo: "+this.tipoAlarma);
        this.textViewClasificacionAlarma.setText("Clasificación: "+this.clasificacionAlarma);
        this.textViewNumTerminal.setText("Terminal: "+this.numTerminal);
        this.textViewNombreyApellidos.setText("Paciente: "+this.nombrePaciente);
        this.textViewNumeroTelefono.setText("Teléfono: "+this.numeroTelefono);
    }

    private void extraerContactos(int idPaciente) {
        APIService apiService = ClienteRetrofit.getInstance().getAPIService();
        Call<List<Object>> call = apiService.getContactosbyIdPaciente(idPaciente, "Bearer " + Token.getToken().getAccess());
        call.enqueue(new Callback<List<Object>>() {
            @Override
            public void onResponse(Call<List<Object>> call, Response<List<Object>> response) {
                lContactos = (ArrayList<Object>) response.body();
                cargarListViewContactos(lContactos);
            }

            @Override
            public void onFailure(Call<List<Object>> call, Throwable t) {
                System.out.println("error");
                Toast.makeText(getContext(), "Error. No se han podido obtener los contactos", Toast.LENGTH_LONG).show();
            }
        });
    }

    private void cargarListViewContactos(List<Object> lContactos){
        List<String> lDatosContactos = new ArrayList<>();
        Contacto contacto;
        Persona persona;
        String datoContacto;
        if(lContactos.isEmpty()){
            lDatosContactos.add("No hay personas de contacto para este paciente");
        }
        else{
            for(Object object : lContactos){
                contacto = (Contacto) Utilidad.getObjeto(object, "Contacto");
                persona = (Persona) Utilidad.getObjeto(contacto.getPersonaEnContacto(), "Persona");
                datoContacto = persona.getNombre() + " " + persona.getApellidos() + " (" +contacto.getTipo_relacion()+ ")";
                lDatosContactos.add(datoContacto);
            }
        }

        ArrayAdapter adapter = new ArrayAdapter(getContext(), android.R.layout.simple_list_item_1,  lDatosContactos);
        this.listViewContactos.setAdapter(adapter);
    }
}