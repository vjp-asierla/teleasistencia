package com.example.teleappsistencia.utilidad;

import android.app.Activity;

import com.example.teleappsistencia.api.clases.Paciente;
import com.example.teleappsistencia.api.clases.Persona;
import com.example.teleappsistencia.api.clases.Teleoperador;
import com.example.teleappsistencia.api.clases.Terminal;
import com.example.teleappsistencia.api.servicios.APIService;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import java.lang.reflect.Type;
import java.util.concurrent.TimeUnit;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.WebSocket;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class Utilidad {

    public static APIService loadApiService(){
        OkHttpClient client;
        Gson gson = new GsonBuilder()
                .setDateFormat("yyyy-MM-dd'T'HH:mm:ssZ").create();

        client = new OkHttpClient.Builder()
                .connectTimeout(30, TimeUnit.SECONDS)
                .readTimeout(30, TimeUnit.SECONDS)
                //Si la conexión del servidor es lenta, no intenta de nuevo y evita una nueva petición (OKHTTP si la conexión es lenta, intenta de nuevo)
                .retryOnConnectionFailure(Boolean.FALSE)
                .build();

        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://10.0.2.2:8000")
                .client(client)
                .addConverterFactory(GsonConverterFactory.create(gson))
                .build();

        return retrofit.create(APIService.class);
    }

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
        }
        if(type != null){
            objeto = gson.fromJson(gson.toJson(lTM), type);
        }
        return objeto;
    }

}
