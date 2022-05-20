package com.example.teleappsistencia.fragments.gestionAlarmasFragments;

import android.content.DialogInterface;
import android.content.res.ColorStateList;
import android.os.Bundle;

import androidx.appcompat.app.AlertDialog;
import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import com.example.teleappsistencia.MainActivity;
import com.example.teleappsistencia.R;
import com.example.teleappsistencia.api.clases.Alarma;
import com.example.teleappsistencia.api.clases.CentroSanitario;
import com.example.teleappsistencia.api.clases.CentroSanitarioEnAlarma;
import com.example.teleappsistencia.api.clases.Contacto;
import com.example.teleappsistencia.api.clases.Direccion;
import com.example.teleappsistencia.api.clases.Paciente;
import com.example.teleappsistencia.api.clases.Persona;
import com.example.teleappsistencia.api.clases.PersonaContactoEnAlarma;
import com.example.teleappsistencia.api.clases.RecursoComunitario;
import com.example.teleappsistencia.api.clases.RecursoComunitarioEnAlarma;
import com.example.teleappsistencia.api.clases.RelacionTerminalRecursoComunitario;
import com.example.teleappsistencia.api.clases.RelacionUsuarioCentro;
import com.example.teleappsistencia.api.clases.Terminal;
import com.example.teleappsistencia.api.clases.Token;
import com.example.teleappsistencia.api.servicios.APIService;
import com.example.teleappsistencia.fragments.alarma.ListarAlarmasFragment;
import com.example.teleappsistencia.utilidad.ClienteRetrofit;
import com.example.teleappsistencia.utilidad.Utilidad;
import com.google.android.material.textfield.TextInputEditText;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link GestionAlarmaFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class GestionAlarmaFragment extends Fragment implements View.OnClickListener{

    // Constantes para la inicialización de parámetros
    private static final String ARG_ALARMAAGESTIONAR = "Alarma";
    private static final String ARG_NOMBREPACIENTE = "NombrePaciente";
    private static final String ARG_NUMEROTELEFONO = "NumeroTelefono";
    private static final String ARG_LCONTACTOS = "ListaContactos";
    private static final String ARG_PACIENTE = "Paciente";
    private static final String ARG_TERMINAL = "Terminal";
    private static final String ARG_COLOR = "Color";

    //Parámetros de inicio
    private Alarma alarma;
    private int color;
    private String nombrePaciente;
    private String numeroTelefono;
    private List<Object> lContactos;
    private Terminal terminal;
    private Paciente paciente;

    // Elementos del layout
    private TextView textViewNombre;
    private TextView textViewTelefono;
    private TextInputEditText editTextObservaciones;
    private Button btnRegistrarLlamadaPaciente;
    private Spinner spinnerContactos;
    private TextInputEditText editTextAcuerdoContacto;
    private Button btnRegistrarLlamadaContacto;
    private Spinner spinnerCentrosSanitarios;
    private TextInputEditText editTextPersonaLlamadaCentroSanitario;
    private TextInputEditText editTextAcuerdoCentro;
    private Button btnRegistrarLlamadaCentroSanitario;
    private Spinner spinnerRecursosComunitarios;
    private TextInputEditText editTextPersonaLlamadaRecursoComunitario;
    private TextInputEditText editTextAcuerdoRecursoComunitario;
    private Button btnRegistrarRecursosComunitarios;
    private Button buttonCrearAgenda;
    private ImageButton imageButtonInfoPaciente;
    private ImageButton imageButtonInfoContacto;
    private ImageButton imageButtonInfoCentroSanitario;
    private ImageButton imageButtonInfoRecursoComunitario;
    private TextInputEditText editTextResumen;
    private Button buttonFinalizar;
    private Button buttonCancelar;

    // Elementos Auxiliares
    private List<Contacto> lContactosParseada;
    private List<RelacionUsuarioCentro> lCentrosSanitarios;
    private List<RelacionTerminalRecursoComunitario> lRecursosComunitarios;


    public GestionAlarmaFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @return A new instance of fragment GestionAlarmaFragment.
     */
    public static GestionAlarmaFragment newInstance(Alarma alarma, String nombrePaciente, String numeroTelefono, ArrayList<Object> lContactos, Paciente paciente, Terminal terminal, int color) {
        GestionAlarmaFragment fragment = new GestionAlarmaFragment();
        Bundle args = new Bundle();
        args.putSerializable(ARG_ALARMAAGESTIONAR, alarma);
        args.putString(ARG_NOMBREPACIENTE, nombrePaciente);
        args.putString(ARG_NUMEROTELEFONO, numeroTelefono);
        args.putSerializable(ARG_LCONTACTOS, lContactos);
        args.putSerializable(ARG_PACIENTE, paciente);
        args.putSerializable(ARG_TERMINAL, terminal);
        args.putInt(ARG_COLOR, color);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            alarma = (Alarma) getArguments().getSerializable(ARG_ALARMAAGESTIONAR);
            nombrePaciente = getArguments().getString(ARG_NOMBREPACIENTE);
            numeroTelefono = getArguments().getString(ARG_NUMEROTELEFONO);
            lContactos = (ArrayList<Object>) getArguments().getSerializable(ARG_LCONTACTOS);
            paciente = (Paciente) getArguments().getSerializable(ARG_PACIENTE);
            terminal = (Terminal) getArguments().getSerializable(ARG_TERMINAL);
            color = getArguments().getInt(ARG_COLOR);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_gestion_alarma, container, false);

        // Capturar los elementos del layout
        capturarElementos(view);

        //Asignamos el listener a los botones
        asignarListener();

        if(this.alarma != null){
            extraerDatos();
            cargarDatos();
            MainActivity ma = (MainActivity) getActivity();
            ma.ocultarFAB();
        }

        return view;
    }

    private void capturarElementos(View view){
        //TextView
        this.textViewNombre = (TextView) view.findViewById(R.id.textViewNombrePacienteGestion);
        this.textViewTelefono = (TextView) view.findViewById(R.id.textViewTelefonoPacienteGestion);

        //TextInputEditText
        this.editTextObservaciones = (TextInputEditText) view.findViewById(R.id.textInputEditTextObservaciones);
        this.editTextAcuerdoContacto = (TextInputEditText) view.findViewById(R.id.textInputEditTextAcuerdoContacto);
        this.editTextPersonaLlamadaCentroSanitario = (TextInputEditText) view.findViewById(R.id.textInputEditTextPersonaLlamadaCentroSanitario);
        this.editTextAcuerdoCentro = (TextInputEditText) view.findViewById(R.id.textInputEditTextAcuerdoCentroSanitario);
        this.editTextPersonaLlamadaRecursoComunitario = (TextInputEditText) view.findViewById(R.id.textInputEditTextPersonaLlamadaRecursoComunitario);
        this.editTextAcuerdoRecursoComunitario = (TextInputEditText) view.findViewById(R.id.textInputEditTextAcuerdoRecursoComunitario);
        this.editTextResumen = (TextInputEditText) view.findViewById(R.id.textInputEditTextResumen);

        //Spinners
        this.spinnerContactos = (Spinner) view.findViewById(R.id.spinnerContactos);
        this.spinnerCentrosSanitarios = (Spinner) view.findViewById(R.id.spinnerCentrosSanitarios);
        this.spinnerRecursosComunitarios = (Spinner) view.findViewById(R.id.spinnerRecursosComunitarios);

        //Botones
        this.btnRegistrarLlamadaPaciente = (Button) view.findViewById(R.id.buttonRegistrarLlamadaPaciente);
        this.btnRegistrarLlamadaContacto = (Button) view.findViewById(R.id.buttonRegistrarLlamadaContacto);
        this.btnRegistrarLlamadaCentroSanitario = (Button) view.findViewById(R.id.buttonRegistrarLlamadaCentroSanitario);
        this.btnRegistrarRecursosComunitarios = (Button) view.findViewById(R.id.buttonRegistrarRecursosComunitarios);
        this.buttonCrearAgenda = (Button) view.findViewById(R.id.buttonCrearAgenda);
        this.buttonFinalizar = (Button) view.findViewById(R.id.buttonFinalizar);
        this.buttonCancelar = (Button) view.findViewById(R.id.buttonCancelar);

        //ImageButton (Info)
        this.imageButtonInfoPaciente = (ImageButton) view.findViewById(R.id.imageButtonInfoPaciente);
        this.imageButtonInfoContacto = (ImageButton) view.findViewById(R.id.imageButtonInfoContacto);
        this.imageButtonInfoCentroSanitario = (ImageButton) view.findViewById(R.id.imageButtonInfoCentroSanitario);
        this.imageButtonInfoRecursoComunitario = (ImageButton) view.findViewById(R.id.imageButtonInfoRecursoComunitario);
    }

    private void asignarListener(){
        this.btnRegistrarLlamadaPaciente.setOnClickListener(this);
        this.btnRegistrarLlamadaContacto.setOnClickListener(this);
        this.btnRegistrarLlamadaCentroSanitario.setOnClickListener(this);
        this.btnRegistrarRecursosComunitarios.setOnClickListener(this);
        this.buttonCrearAgenda.setOnClickListener(this);
        this.imageButtonInfoPaciente.setOnClickListener(this);
        this.imageButtonInfoContacto.setOnClickListener(this);
        this.imageButtonInfoCentroSanitario.setOnClickListener(this);
        this.imageButtonInfoRecursoComunitario.setOnClickListener(this);
        this.buttonFinalizar.setOnClickListener(this);
        this.buttonCancelar.setOnClickListener(this);
    }

    private void extraerDatos(){
        this.lContactosParseada = (ArrayList<Contacto>) Utilidad.getObjeto(lContactos, "ArrayList<Contacto>");
        if(lContactosParseada.isEmpty()){
            this.imageButtonInfoContacto.setVisibility(View.INVISIBLE);
            this.btnRegistrarLlamadaContacto.setEnabled(false);
        }
        recuperarListaCentrosSanitarios();
        recuperarListaRecursosComunitarios();
    }

    private void cargarDatos(){
        this.textViewNombre.setText(this.nombrePaciente);
        this.textViewTelefono.setText(this.numeroTelefono);
        cambiarColorbotones();
        cargarSpinnerContactos();
    }

    @Override
    public void onClick(View view) {
        switch(view.getId()){
            case R.id.buttonRegistrarLlamadaPaciente:
                    registrarLlamadaPaciente();
                break;
            case R.id.buttonRegistrarLlamadaContacto:
                    registrarLlamadaContacto();
                break;
            case R.id.buttonRegistrarLlamadaCentroSanitario:
                    registrarLlamadaCentroSanitario();
                break;
            case R.id.buttonRegistrarRecursosComunitarios:
                    registrarLlamadaRecursoComunitario();
                break;
            case R.id.buttonCrearAgenda:
                dialogoEnConstruccion();
                break;
            case R.id.imageButtonInfoPaciente:
                dialogoInfoPaciente();
                break;
            case R.id.imageButtonInfoContacto:
                dialogoInfoContacto();
                break;
            case R.id.imageButtonInfoCentroSanitario:
                dialogoInfoCentroSanitario();
                break;
            case R.id.imageButtonInfoRecursoComunitario:
                dialogoInfoRecursoComunitario();
                break;
            case R.id.buttonFinalizar:
                finalizarGestion();
                break;
            case R.id.buttonCancelar:
                cancelarGestion();
                break;
        }
    }

    private void registrarLlamadaPaciente(){
        LocalDate fecha;
        LocalTime hora;
        String observaciones = this.editTextObservaciones.getText().toString();
        if(!observaciones.isEmpty() && observaciones.length() >= 10) {
            fecha  = LocalDate.now();
            hora = LocalTime.now();
            this.alarma.setObservaciones(observaciones+"(Llamada registrada a " + fecha + " a las " + hora);
            this.btnRegistrarLlamadaPaciente.setText("Editar");
            Toast.makeText(getContext(), "Llamada registrada con éxito", Toast.LENGTH_LONG).show();
        }
        else{
            Toast.makeText(getContext(), "Texto mínimo de 10 caracteres.", Toast.LENGTH_LONG).show();
        }
    }

    private void registrarLlamadaContacto(){
        Contacto contacto;
        Persona personaEnContacto;
        PersonaContactoEnAlarma personaContactoEnAlarma;
        String acuerdoAlcanzado = editTextAcuerdoContacto.getText().toString();

        if(!acuerdoAlcanzado.isEmpty() && acuerdoAlcanzado.length() >= 10){
            contacto = (Contacto) this.spinnerContactos.getSelectedItem();
            personaEnContacto = (Persona) Utilidad.getObjeto(contacto.getPersonaEnContacto(), "Persona");

            personaContactoEnAlarma = new PersonaContactoEnAlarma();
            personaContactoEnAlarma.setFechaRegistro(Utilidad.getStringFechaNowYYYYMMDD());
            personaContactoEnAlarma.setIdAlarma(this.alarma.getId());
            personaContactoEnAlarma.setIdPersonaContacto(personaEnContacto.getId());
            personaContactoEnAlarma.setAcuerdoAlcanzado(acuerdoAlcanzado);

            registrarPersonaContactoEnAlarma(personaContactoEnAlarma);
        }
        else{
            Toast.makeText(getContext(), "Acuerdo alcanzado muy corto.Texto mínimo de 10 caracteres.", Toast.LENGTH_LONG).show();
        }

    }

    private void registrarLlamadaCentroSanitario(){
        RelacionUsuarioCentro relacionUsuarioCentro;
        CentroSanitario centroSanitario;
        CentroSanitarioEnAlarma centroSanitarioEnAlarma;
        String personaLlamada = this.editTextPersonaLlamadaCentroSanitario.getText().toString();
        String acuerdoAlcanzado = this.editTextAcuerdoCentro.getText().toString();

        if(!personaLlamada.isEmpty() && personaLlamada.length() >= 3){
            if(!acuerdoAlcanzado.isEmpty() && acuerdoAlcanzado.length() >= 10) {
                relacionUsuarioCentro = (RelacionUsuarioCentro) this.spinnerCentrosSanitarios.getSelectedItem();
                centroSanitario = (CentroSanitario) Utilidad.getObjeto(relacionUsuarioCentro.getIdCentroSanitario(), "CentroSanitario");

                centroSanitarioEnAlarma = new CentroSanitarioEnAlarma();
                centroSanitarioEnAlarma.setFechaRegistro(Utilidad.getStringFechaNowYYYYMMDD());
                centroSanitarioEnAlarma.setPersona(personaLlamada);
                centroSanitarioEnAlarma.setAcuerdoAlcanzado(acuerdoAlcanzado);
                centroSanitarioEnAlarma.setIdAlarma(this.alarma.getId());
                centroSanitarioEnAlarma.setIdCentroSanitario(centroSanitario.getId());

                registrarCentroSanitarioEnAlarma(centroSanitarioEnAlarma);
            }
            else{
                Toast.makeText(getContext(), "Acuerdo alcanzado muy corto. Texto mínimo de 10 caracteres.", Toast.LENGTH_LONG).show();
            }
        }
        else{
            Toast.makeText(getContext(), "Introducir el nombre de la persona que atendió la llamada.", Toast.LENGTH_LONG).show();
        }
    }

    private void registrarLlamadaRecursoComunitario(){
        RelacionTerminalRecursoComunitario relacionTerminalRecursoComunitario;
        RecursoComunitario recursoComunitario;
        RecursoComunitarioEnAlarma recursoComunitarioEnAlarma;
        String personaLlamada = this.editTextPersonaLlamadaRecursoComunitario.getText().toString();
        String acuerdoAlcanzado = this.editTextAcuerdoRecursoComunitario.getText().toString();

        if(!personaLlamada.isEmpty() && personaLlamada.length() >= 3){
            if(!acuerdoAlcanzado.isEmpty() && acuerdoAlcanzado.length() >= 10) {
                relacionTerminalRecursoComunitario = (RelacionTerminalRecursoComunitario) this.spinnerRecursosComunitarios.getSelectedItem();
                recursoComunitario = (RecursoComunitario) Utilidad.getObjeto(relacionTerminalRecursoComunitario.getRecursoComunitario(), "RecursoComunitario");

                recursoComunitarioEnAlarma = new RecursoComunitarioEnAlarma();
                recursoComunitarioEnAlarma.setFechaRegistro(Utilidad.getStringFechaNowYYYYMMDD());
                recursoComunitarioEnAlarma.setPersona(personaLlamada);
                recursoComunitarioEnAlarma.setAcuerdoAlcanzado(acuerdoAlcanzado);
                recursoComunitarioEnAlarma.setIdAlarma(this.alarma.getId());
                recursoComunitarioEnAlarma.setIdRecursoComunitairo(recursoComunitario.getId());

                registrarRecursoComunitarioEnAlarma(recursoComunitarioEnAlarma);
            }
            else{
                Toast.makeText(getContext(), "Acuerdo alcanzado muy corto. Texto mínimo de 10 caracteres.", Toast.LENGTH_LONG).show();
            }
        }
        else{
            Toast.makeText(getContext(), "Introducir el nombre de la persona que atendió la llamada.", Toast.LENGTH_LONG).show();
        }
    }

    private void finalizarGestion(){
        String resumen = this.editTextResumen.getText().toString();
        if(!this.alarma.getObservaciones().isEmpty()){
            if(resumen.length() > 10){
                this.alarma.setResumen(resumen);
                this.alarma.setEstado_alarma("Cerrada");
                guardarAlarma();
            }
            else{
                Toast.makeText(getContext(), "Debe escribir un resumen (mínimo 10 caracteres).", Toast.LENGTH_LONG).show();
            }
        }
        else{
            Toast.makeText(getContext(), "No se registró llamada al paciente.", Toast.LENGTH_LONG).show();
        }
    }

    private void cancelarGestion(){
        ListarAlarmasFragment listarAlarmasFragment = new ListarAlarmasFragment();
        getActivity().getSupportFragmentManager().beginTransaction()
                .replace(R.id.main_fragment, listarAlarmasFragment)
                .addToBackStack(null)
                .commit();
    }

    private void dialogoInfoPaciente() {
        AlertDialog.Builder builder = new AlertDialog.Builder(getContext());
        builder.setTitle("Información del Paciente");
        builder.setMessage("Número de expediente: "+this.paciente.getNumero_expediente() +
                           "\nNúmero de la SS: "+this.paciente.getNumero_seguridad_social() +
                           "\nObservaciones médicas: "+this.paciente.getObservaciones_medicas());
        builder.setNeutralButton("OK", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialogInterface, int i) {
                dialogInterface.dismiss();
            }
        });
        builder.show();
    }

    private void dialogoInfoContacto(){
        Contacto contacto = (Contacto) this.spinnerContactos.getSelectedItem();
        Persona personaEnContacto = (Persona) Utilidad.getObjeto(contacto.getPersonaEnContacto(), "Persona");
        AlertDialog.Builder builder = new AlertDialog.Builder(getContext());
        builder.setTitle("Información Contacto");
        builder.setMessage("Nombre: "+personaEnContacto.getNombre()+" "+personaEnContacto.getApellidos() +
                           "\nTeléfono móvil: "+personaEnContacto.getTelefono_movil() +
                           "\nTeléfono fijo: "+personaEnContacto.getTelefono_fijo() +
                           "\nRelación con paciente: "+contacto.getTipo_relacion() +
                           "\nDisponibilidad: "+contacto.getDisponibilidad() +
                           "\nObservaciones: "+contacto.getObservaciones() +
                           "\n¿Tiene llaves?: "+ Utilidad.trueSifalseNo(contacto.isTiene_llaves_vivienda()));
        builder.setNeutralButton("OK", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialogInterface, int i) {
                dialogInterface.dismiss();
            }
        });
        builder.show();
    }

    private void dialogoInfoCentroSanitario(){
        RelacionUsuarioCentro relacionUsuarioCentro = (RelacionUsuarioCentro) this.spinnerCentrosSanitarios.getSelectedItem();
        CentroSanitario centroSanitario = (CentroSanitario) Utilidad.getObjeto(relacionUsuarioCentro.getIdCentroSanitario(), "CentroSanitario");
        Direccion direccion = (Direccion) Utilidad.getObjeto(centroSanitario.getDireccion(), "Direccion");
        AlertDialog.Builder builder = new AlertDialog.Builder(getContext());
        builder.setTitle("Información Contacto");
        builder.setMessage("Nombre: "+centroSanitario.getNombre() +
                "\nTeléfono: "+centroSanitario.getTelefono() +
                "\nLocalidad: " + direccion.getLocalidad()+" ("+direccion.getProvincia()+")"+
                "\nDireccion: "+ direccion.getDirección());
        builder.setNeutralButton("OK", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialogInterface, int i) {
                dialogInterface.dismiss();
            }
        });
        builder.show();
    }

    private void dialogoInfoRecursoComunitario(){
        RelacionTerminalRecursoComunitario rTRC = (RelacionTerminalRecursoComunitario) this.spinnerRecursosComunitarios.getSelectedItem();
        RecursoComunitario recursoComunitario = (RecursoComunitario) Utilidad.getObjeto(rTRC.getRecursoComunitario(), "RecursoComunitario");
        Direccion direccion = (Direccion) Utilidad.getObjeto(recursoComunitario.getDirección(), "Direccion");
        AlertDialog.Builder builder = new AlertDialog.Builder(getContext());
        builder.setTitle("Información Contacto");
        builder.setMessage("Nombre: "+recursoComunitario.getNombre() +
                           "\nTeléfono: "+recursoComunitario.getTelefono() +
                           "\nLocalidad: " + direccion.getLocalidad()+" ("+direccion.getProvincia()+")" +
                           "\nDireccion: "+ direccion.getDirección());
        builder.setNeutralButton("OK", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialogInterface, int i) {
                dialogInterface.dismiss();
            }
        });
        builder.show();
    }

    private void dialogoEnConstruccion(){
        AlertDialog.Builder builder = new AlertDialog.Builder(getContext());
        builder.setTitle("ATENCIÓN");
        builder.setMessage("En construcción. Disculpe las molestias.");
        builder.setNeutralButton("OK", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialogInterface, int i) {
                dialogInterface.dismiss();
            }
        });
        builder.show();
    }

    private void recuperarListaCentrosSanitarios() {
        APIService apiService = ClienteRetrofit.getInstance().getAPIService();
        Call<List<Object>> call = apiService.getCentrosbyIdPaciente(this.paciente.getId(), "Bearer " + Token.getToken().getAccess());
        call.enqueue(new Callback<List<Object>>() {
            @Override
            public void onResponse(Call<List<Object>> call, Response<List<Object>> response) {
                List<Object> lista = response.body();
                lCentrosSanitarios = (ArrayList<RelacionUsuarioCentro>) Utilidad.getObjeto(lista, "ArrayList<RelacionUsuarioCentro>");
                if(!lCentrosSanitarios.isEmpty()){
                    cargarSpinnerCentrosSanitarios();
                }
                else{
                    imageButtonInfoCentroSanitario.setVisibility(View.INVISIBLE);
                    btnRegistrarLlamadaCentroSanitario.setEnabled(false);
                }
            }

            @Override
            public void onFailure(Call<List<Object>> call, Throwable t) {
                System.out.println("error");
                Toast.makeText(getContext(), "Error. No se han podido obtener los recursos comunitarios", Toast.LENGTH_LONG).show();
            }
        });
    }

    private void recuperarListaRecursosComunitarios() {
        APIService apiService = ClienteRetrofit.getInstance().getAPIService();
        Call<List<Object>> call = apiService.getRecursosComunitariosbyIdTerminal(this.terminal.getId(), "Bearer " + Token.getToken().getAccess());
        call.enqueue(new Callback<List<Object>>() {
            @Override
            public void onResponse(Call<List<Object>> call, Response<List<Object>> response) {
                List<Object> lista = response.body();
                lRecursosComunitarios = (ArrayList<RelacionTerminalRecursoComunitario>) Utilidad.getObjeto(lista, "ArrayList<RelacionTerminalRecursoComunitario>");
                if(!lRecursosComunitarios.isEmpty()) {
                    cargarSpinnerRecursosComunitarios();
                }
                else{
                    imageButtonInfoRecursoComunitario.setVisibility(View.INVISIBLE);
                    btnRegistrarRecursosComunitarios.setEnabled(false);
                }
            }

            @Override
            public void onFailure(Call<List<Object>> call, Throwable t) {
                System.out.println("error");
                Toast.makeText(getContext(), "Error. No se han podido obtener los recursos comunitarios", Toast.LENGTH_LONG).show();
            }
        });
    }

    private void cambiarColorbotones(){
        ColorStateList csl = ColorStateList.valueOf(this.color);
        this.btnRegistrarLlamadaPaciente.setBackgroundTintList(csl);
        this.btnRegistrarLlamadaContacto.setBackgroundTintList(csl);
        this.btnRegistrarLlamadaCentroSanitario.setBackgroundTintList(csl);
        this.btnRegistrarRecursosComunitarios.setBackgroundTintList(csl);
        this.buttonCrearAgenda.setBackgroundTintList(csl);
        this.imageButtonInfoPaciente.setColorFilter(this.color);
        this.imageButtonInfoContacto.setColorFilter(this.color);
        this.imageButtonInfoCentroSanitario.setColorFilter(this.color);
        this.imageButtonInfoRecursoComunitario.setColorFilter(this.color);
    }

    private void cargarSpinnerContactos(){
        ArrayAdapter<Contacto> adapter = new ArrayAdapter<Contacto>(getActivity(), android.R.layout.simple_spinner_dropdown_item, lContactosParseada);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        this.spinnerContactos.setAdapter(adapter);
    }

    private void cargarSpinnerCentrosSanitarios(){
        ArrayAdapter<RelacionUsuarioCentro> adapter = new ArrayAdapter<RelacionUsuarioCentro>(getActivity(), android.R.layout.simple_spinner_dropdown_item, lCentrosSanitarios);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        this.spinnerCentrosSanitarios.setAdapter(adapter);
    }

    private void cargarSpinnerRecursosComunitarios(){
        ArrayAdapter<RelacionTerminalRecursoComunitario> adapter = new ArrayAdapter<RelacionTerminalRecursoComunitario>(getActivity(), android.R.layout.simple_spinner_dropdown_item, lRecursosComunitarios);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        this.spinnerRecursosComunitarios.setAdapter(adapter);
    }

    private void registrarPersonaContactoEnAlarma(PersonaContactoEnAlarma personaContactoEnAlarma){
        APIService apiService = ClienteRetrofit.getInstance().getAPIService();
        Call<PersonaContactoEnAlarma> call = apiService.addPersonaContactoEnAlarma(personaContactoEnAlarma, "Bearer " + Token.getToken().getAccess());
        call.enqueue(new Callback<PersonaContactoEnAlarma>() {
            @Override
            public void onResponse(Call<PersonaContactoEnAlarma> call, Response<PersonaContactoEnAlarma> response) {
                System.out.println("Llamada registrada correctamente");
                Toast.makeText(getContext(), "Llamada registrada correctamente.", Toast.LENGTH_LONG).show();
                editTextAcuerdoContacto.setText("");
            }
            @Override
            public void onFailure(Call<PersonaContactoEnAlarma> call, Throwable t) {
                System.out.println("error");
                Toast.makeText(getContext(), "Error al registrar la llamada.", Toast.LENGTH_LONG).show();
            }
        });
    }

    private void registrarCentroSanitarioEnAlarma(CentroSanitarioEnAlarma centroSanitarioEnAlarma) {
        APIService apiService = ClienteRetrofit.getInstance().getAPIService();
        Call<CentroSanitarioEnAlarma> call = apiService.addCentroSanitarioEnAlarma(centroSanitarioEnAlarma, "Bearer " + Token.getToken().getAccess());
        call.enqueue(new Callback<CentroSanitarioEnAlarma>() {
            @Override
            public void onResponse(Call<CentroSanitarioEnAlarma> call, Response<CentroSanitarioEnAlarma> response) {
                System.out.println("Llamada registrada correctamente");
                Toast.makeText(getContext(), "Llamada registrada correctamente.", Toast.LENGTH_LONG).show();
                editTextPersonaLlamadaCentroSanitario.setText("");
                editTextAcuerdoCentro.setText("");
            }
            @Override
            public void onFailure(Call<CentroSanitarioEnAlarma> call, Throwable t) {
                System.out.println("error");
                Toast.makeText(getContext(), "Error al registrar la llamada.", Toast.LENGTH_LONG).show();
            }
        });
    }


    private void registrarRecursoComunitarioEnAlarma(RecursoComunitarioEnAlarma recursoComunitarioEnAlarma) {
        APIService apiService = ClienteRetrofit.getInstance().getAPIService();
        Call<RecursoComunitarioEnAlarma> call = apiService.addRecursoComunitarioEnAlarma(recursoComunitarioEnAlarma, "Bearer " + Token.getToken().getAccess());
        call.enqueue(new Callback<RecursoComunitarioEnAlarma>() {
            @Override
            public void onResponse(Call<RecursoComunitarioEnAlarma> call, Response<RecursoComunitarioEnAlarma> response) {
                System.out.println("Llamada registrada correctamente");
                Toast.makeText(getContext(), "Llamada registrada correctamente.", Toast.LENGTH_LONG).show();
                editTextPersonaLlamadaRecursoComunitario.setText("");
                editTextAcuerdoRecursoComunitario.setText("");
            }
            @Override
            public void onFailure(Call<RecursoComunitarioEnAlarma> call, Throwable t) {
                System.out.println("error");
                Toast.makeText(getContext(), "Error al registrar la llamada.", Toast.LENGTH_LONG).show();
            }
        });
    }

    private void guardarAlarma(){
        APIService apiService = ClienteRetrofit.getInstance().getAPIService();
        Call<ResponseBody> call = apiService.actualizarAlarma(this.alarma.getId(), "Bearer "+ Token.getToken().getAccess(), this.alarma);
        call.enqueue(new Callback<ResponseBody>() {
            @Override
            public void onResponse(Call<ResponseBody> call, Response<ResponseBody> response) {
                System.out.println("Alarma cerrada");
                Toast.makeText(getContext(), "Alarma gestionada correctamente.", Toast.LENGTH_LONG).show();
                ListarAlarmasFragment listarAlarmasFragment = new ListarAlarmasFragment();
                getActivity().getSupportFragmentManager().beginTransaction()
                        .replace(R.id.main_fragment, listarAlarmasFragment)
                        .addToBackStack(null)
                        .commit();
            }
            @Override
            public void onFailure(Call<ResponseBody> call, Throwable t) {
                System.out.println("Falló la modificación");
                Toast.makeText(getContext(), "Error al intentar guardar los datos.", Toast.LENGTH_LONG).show();
            }
        });
    }


    @Override
    public void onDestroyView() {
        MainActivity ma = (MainActivity) getActivity();
        ma.mostrarFAB();
        super.onDestroyView();
    }
}