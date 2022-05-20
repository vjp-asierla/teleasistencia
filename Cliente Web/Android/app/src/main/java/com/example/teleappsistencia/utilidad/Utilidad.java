package com.example.teleappsistencia.utilidad;

import android.app.Activity;
import android.app.DatePickerDialog;
import android.content.Context;
import android.widget.DatePicker;
import android.widget.EditText;

import com.example.teleappsistencia.api.clases.Alarma;
import com.example.teleappsistencia.api.clases.CentroSanitario;
import com.example.teleappsistencia.api.clases.CentroSanitarioEnAlarma;
import com.example.teleappsistencia.api.clases.ClasificacionAlarma;
import com.example.teleappsistencia.api.clases.Contacto;
import com.example.teleappsistencia.api.clases.Direccion;
import com.example.teleappsistencia.api.clases.Paciente;
import com.example.teleappsistencia.api.clases.Persona;
import com.example.teleappsistencia.api.clases.PersonaContactoEnAlarma;
import com.example.teleappsistencia.api.clases.RecursoComunitario;
import com.example.teleappsistencia.api.clases.RecursoComunitarioEnAlarma;
import com.example.teleappsistencia.api.clases.RelacionTerminalRecursoComunitario;
import com.example.teleappsistencia.api.clases.RelacionUsuarioCentro;
import com.example.teleappsistencia.api.clases.Teleoperador;
import com.example.teleappsistencia.api.clases.Terminal;
import com.example.teleappsistencia.api.clases.TipoAlarma;
import com.example.teleappsistencia.api.servicios.APIService;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import java.lang.reflect.Type;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.concurrent.TimeUnit;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.WebSocket;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class Utilidad {

    public static void iniciarEscuchaAlarmas(Activity activity) {
        OkHttpClient client = new OkHttpClient();
        Request request = new Request.Builder().url("ws://10.0.2.2:8000/ws/socket-server/").build();
        AlarmaWebSocketListener aWSListener = new AlarmaWebSocketListener(activity);
        WebSocket ws = client.newWebSocket(request, aWSListener);
        client.dispatcher().executorService().shutdown();
    }

    public static Object getObjeto(Object lTM, String tipo) {
        Gson gson = new Gson();
        Type type = null;
        Object objeto = null;
        switch(tipo){
            case "Teleoperador":
                type = new TypeToken<Teleoperador>(){}.getType();
                break;
            case "Terminal":
                type = new TypeToken<Terminal>(){}.getType();
                break;
            case "Paciente":
                type = new TypeToken<Paciente>(){}.getType();
                break;
            case "Persona":
                type = new TypeToken<Persona>(){}.getType();
                break;
            case "TipoAlarma":
                type = new TypeToken<TipoAlarma>(){}.getType();
                break;
            case "ClasificacionAlarma":
                type = new TypeToken<ClasificacionAlarma>(){}.getType();
                break;
            case "Contacto":
                type = new TypeToken<Contacto>(){}.getType();
                break;
            case "ArrayList<Contacto>":
                type = new TypeToken<ArrayList<Contacto>>(){}.getType();
                break;
            case "ArrayList<RecursoComunitario>":
                type = new TypeToken<ArrayList<RecursoComunitario>>(){}.getType();
                break;
            case "ArrayList<RelacionUsuarioCentro>":
                type = new TypeToken<ArrayList<RelacionUsuarioCentro>>(){}.getType();
                break;
            case "ArrayList<RelacionTerminalRecursoComunitario>":
                type = new TypeToken<ArrayList<RelacionTerminalRecursoComunitario>>(){}.getType();
                break;
            case "CentroSanitario":
                type = new TypeToken<CentroSanitario>(){}.getType();
                break;
            case "RecursoComunitario":
                type = new TypeToken<RecursoComunitario>(){}.getType();
                break;
            case "Direccion":
                type = new TypeToken<Direccion>(){}.getType();
                break;
            case "ArrayList<Alarma>":
                type = new TypeToken<ArrayList<Alarma>>(){}.getType();
                break;
            case "ArrayList<CentroSanitarioEnAlarma>":
                type = new TypeToken<ArrayList<CentroSanitarioEnAlarma>>(){}.getType();
                break;
            case "ArrayList<TipoAlarma>":
                type = new TypeToken<ArrayList<TipoAlarma>>(){}.getType();
                break;
            case "ArrayList<Terminal>":
                type = new TypeToken<ArrayList<Terminal>>(){}.getType();
                break;
            case "ArrayList<Paciente>":
                type = new TypeToken<ArrayList<Paciente>>(){}.getType();
                break;
            case "Alarma":
                type = new TypeToken<Alarma>(){}.getType();
                break;
            case "ArrayList<ClasificacionAlarma>":
                type = new TypeToken<ArrayList<ClasificacionAlarma>>(){}.getType();
                break;
            case "ArrayList<PersonaContactoEnAlarma>":
                type = new TypeToken<ArrayList<PersonaContactoEnAlarma>>(){}.getType();
                break;
            case "ArrayList<RecursoComunitarioEnAlarma>":
                type = new TypeToken<ArrayList<RecursoComunitarioEnAlarma>>(){}.getType();
                break;
        }
        if(type != null){
            objeto = gson.fromJson(gson.toJson(lTM), type);
        }
        return objeto;
    }

    public static String trueSifalseNo(boolean condicion){
        if(condicion){
            return "Sí";
        }
        return "No";
    }

    public static String getStringFechaNowYYYYMMDD(){
        Date fecha;
        SimpleDateFormat sdf= new SimpleDateFormat("YYYY-MM-dd");
        fecha = Date.from(LocalDate.now().atStartOfDay(ZoneId.systemDefault()).toInstant());
        return sdf.format(fecha);
    }

    /* Este método crea un Dialogo de selección de fecha. Le asigna el valor a una variable y además
       escribe la fecha en el EditText. */
    public static void dialogoFecha(Context context, EditText editText){
        DatePickerDialog dpd = new DatePickerDialog(context, new DatePickerDialog.OnDateSetListener() {
            @Override
            public void onDateSet(DatePicker datePicker, int year, int month, int day) {
                String mes = String.valueOf(month+1);;
                String dia = String.valueOf(day);
                if(month < 9){
                    mes = "0"+String.valueOf(month+1);
                }
                if(day < 10){
                    dia = "0"+String.valueOf(day);
                }

                editText.setText(year+"-"+mes+"-"+dia);
            }
        }, LocalDate.now().getYear(), LocalDate.now().getMonthValue()-1, LocalDate.now().getDayOfMonth());
        dpd.show();
    }
}
