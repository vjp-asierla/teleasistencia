package com.example.teleappsistencia.fragments.otrosFragments;

import android.content.res.ColorStateList;
import android.os.Bundle;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.fragment.app.DialogFragment;
import androidx.fragment.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.TextView;
import android.widget.Toast;
import com.example.teleappsistencia.R;
import com.example.teleappsistencia.api.clases.Alarma;
import com.example.teleappsistencia.api.clases.Paciente;
import com.example.teleappsistencia.api.clases.Persona;
import com.example.teleappsistencia.api.clases.Teleoperador;
import com.example.teleappsistencia.api.clases.Terminal;
import com.example.teleappsistencia.api.clases.Token;
import com.example.teleappsistencia.api.servicios.APIService;
import com.example.teleappsistencia.utilidad.Utilidad;
import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link AlarmAlertFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class AlarmAlertFragment extends DialogFragment implements View.OnClickListener {

    private static final String ARG_ALARMANOTIFICADA = "Alarma";
    private Alarma alarmaNotificada;
    private TextView textViewIdTerminal;
    private TextView textViewNombrePaciente;
    private TextView textViewTelefono;
    private Button btnRechazarAlarma;
    private Button btnAceptarAlarma;
    private ImageButton imageButtonCerrarAlerta;
    private ConstraintLayout cabeceraAlerta;
    private int color;
    private int numTerminal;
    private String nombrePaciente;
    private String numeroTelefono;
    private APIService apiService;


    public AlarmAlertFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @return A new instance of fragment AlarmAlertFragment.
     */
    public static AlarmAlertFragment newInstance(Alarma alarma) {
        AlarmAlertFragment fragment = new AlarmAlertFragment();
        Bundle args = new Bundle();
        args.putSerializable(ARG_ALARMANOTIFICADA, alarma);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            alarmaNotificada = (Alarma) getArguments().getSerializable(ARG_ALARMANOTIFICADA);
        }

    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_alarm_alert, container, false);

        // Capturar los elementos del layout
        this.textViewIdTerminal = (TextView) view.findViewById(R.id.textViewIdTerminal);
        this.textViewNombrePaciente = (TextView) view.findViewById(R.id.textViewNombrePaciente);
        this.textViewTelefono = (TextView) view.findViewById(R.id.textViewTelefono);
        this.btnRechazarAlarma = (Button) view.findViewById(R.id.btnRechazarAlarma);
        this.btnAceptarAlarma = (Button) view.findViewById(R.id.btnAceptarAlarma);
        this.imageButtonCerrarAlerta = (ImageButton) view.findViewById(R.id.imageButtonCerrarAlerta);
        this.cabeceraAlerta = (ConstraintLayout) view.findViewById(R.id.cabeceraAlerta);

        //Asignamos el listener a los botones
        this.btnRechazarAlarma.setOnClickListener(this);
        this.btnAceptarAlarma.setOnClickListener(this);
        this.imageButtonCerrarAlerta.setOnClickListener(this);

        if(alarmaNotificada != null){
            extraerDatos();
            cargarDatos();
        }
        return view;
    }

    public void extraerDatos(){
        Terminal terminal;
        Paciente paciente;
        Persona persona;
        if(alarmaNotificada.getId_paciente_ucr() != null){
            this.color = getResources().getColor(R.color.azul, getActivity().getTheme());
            paciente = (Paciente) Utilidad.getObjeto(alarmaNotificada.getId_paciente_ucr(), "Paciente");
            terminal = (Terminal) Utilidad.getObjeto(paciente.getId_terminal(), "Terminal");
        }
        else{
            this.color = getResources().getColor(R.color.verde, getActivity().getTheme());
            terminal = (Terminal) Utilidad.getObjeto(alarmaNotificada.getId_terminal(), "Terminal");
            paciente = (Paciente) Utilidad.getObjeto(terminal.getId_titular(), "Paciente");
        }
        persona = (Persona) Utilidad.getObjeto(paciente.getId_persona(), "Persona");
        this.numTerminal = terminal.getId();
        this.nombrePaciente = persona.getNombre()+" "+persona.getApellidos();
        this.numeroTelefono = persona.getTelefono_movil() + "/" + persona.getTelefono_fijo();
    }

    public void cargarDatos(){
        ColorStateList csl = ColorStateList.valueOf(this.color);
        this.cabeceraAlerta.setBackgroundColor(this.color);
        this.btnRechazarAlarma.setBackgroundTintList(csl);
        this.btnAceptarAlarma.setBackgroundTintList(csl);

        this.apiService = Utilidad.loadApiService();

        this.textViewIdTerminal.setText("ID Terminal: "+String.valueOf(this.numTerminal));
        this.textViewNombrePaciente.setText("Paciente: "+this.nombrePaciente);
        this.textViewTelefono.setText("Telefono: "+this.numeroTelefono);
    }

    @Override
    public void onClick(View view) {
        switch(view.getId()){
            case R.id.btnAceptarAlarma:
                comprobarAlarma();
                break;
            case R.id.btnRechazarAlarma:
                    this.dismiss();
                break;
            case R.id.imageButtonCerrarAlerta:
                    this.dismiss();
                break;
        }
    }

    public void comprobarAlarma(){
        Call<Alarma> callAlarma = apiService.getAlarmabyId(this.alarmaNotificada.getId(), "Bearer "+ Token.getToken().getAccess());
        callAlarma.enqueue(new Callback<Alarma>() {
            @Override
            public void onResponse(Call<Alarma> callAlarma, Response<Alarma> response) {
                if(response.isSuccessful()){

                    Alarma alarmaRecibida = response.body();
                    Teleoperador teleoperador = (Teleoperador) Utilidad.getObjeto(alarmaRecibida.getId_teleoperador(), "Teleoperador");

                    if(teleoperador == null){
                        modificarAlarma(alarmaRecibida);
                    }else{
                        Toast.makeText(getContext(), "Esta alarma ya fue asignada a otro teleoperador", Toast.LENGTH_LONG).show();
                    }
                } else{
                    System.out.println(response.message());
                    System.out.println(response.body());
                    System.out.println(response.raw());
                }
            }
            @Override
            public void onFailure(Call<Alarma> callAlarma, Throwable t) {
                t.printStackTrace();
                System.out.println(t.getMessage());
            }
        });
    }

    public void modificarAlarma(Alarma alarmaRecibida){
        /* Cuando la aplicación funcione me imagino que ya habrá un usuario con su id */
        Teleoperador miUsuario = new Teleoperador();
        miUsuario.setId(1);

        alarmaRecibida.setId_teleoperador(miUsuario.getId());
        Call<ResponseBody> call = apiService.actualizarAlarma(alarmaRecibida.getId(), "Bearer "+ Token.getToken().getAccess(), alarmaRecibida);
        call.enqueue(new Callback<ResponseBody>() {
            @Override
            public void onResponse(Call<ResponseBody> call, Response<ResponseBody> response) {
                System.out.println("alarma asginada");
                InfoGestionAlarmaFragment iGAF = InfoGestionAlarmaFragment.newInstance(alarmaRecibida);
                /*getActivity().getSupportFragmentManager().beginTransaction()
                        .replace(R.id.nav_host_fragment_content_main, iGAF)
                        .addToBackStack(null)
                        .commit();*/
                getActivity().getSupportFragmentManager().beginTransaction()
                        .replace(R.id.main_fragment, iGAF)
                        .addToBackStack(null)
                        .commit();
                dismiss();
            }
            @Override
            public void onFailure(Call<ResponseBody> call, Throwable t) {
                System.out.println("Falló la modificación");
            }
        });
    }
}