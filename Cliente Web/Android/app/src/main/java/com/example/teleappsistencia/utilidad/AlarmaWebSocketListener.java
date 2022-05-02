package com.example.teleappsistencia.utilidad;

import android.app.Activity;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.graphics.BitmapFactory;
import android.os.Build;

import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;

import com.example.teleappsistencia.MainActivity;
import com.example.teleappsistencia.R;
import com.example.teleappsistencia.api.clases.Alarma;
import com.google.gson.Gson;

import org.json.JSONException;
import org.json.JSONObject;

import okhttp3.Response;
import okhttp3.WebSocket;
import okhttp3.WebSocketListener;
import okio.ByteString;

public class AlarmaWebSocketListener extends WebSocketListener {
    private static final int NORMAL_CLOSURE_STATUS = 1000;
    private MainActivity activity;
    private int alarmas;

    public AlarmaWebSocketListener(Activity activity){
        this.activity = (MainActivity) activity;
        this.alarmas = 0;
        createNotificationChannel(); // Hay que crear el canal de las notificaciones al iniciar (consultar API de Android)
    }

    @Override
    public void onOpen(WebSocket webSocket, Response response) {
        System.out.println("Conexión establecida con el WebSocket");
    }

    @Override
    public void onMessage(WebSocket webSocket, String text_data) {
        try {
            JSONObject object = new JSONObject(text_data);
            String action = object.getString("action");
            JSONObject alarma_object = object.getJSONObject("alarma");
            Gson gson= new Gson();
            Alarma alarma = gson.fromJson(alarma_object.toString(), Alarma.class);
            // Evaluamos la acción a realizar
            switch (action){
                case "new_alarm":
                    crearNotificacion(alarma);
                    break;
                case "alarm_assignment":
                    borrarNotificacion(alarma);
                    break;
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }

    }

    @Override
    public void onMessage(WebSocket webSocket, ByteString bytes) {
        System.out.println("Receiving bytes : " + bytes.hex());
        System.out.println("byteString bytes");
    }

    @Override
    public void onClosing(WebSocket webSocket, int code, String reason) {
        webSocket.close(NORMAL_CLOSURE_STATUS, null);
        System.out.println("Closing : " + code + " / " + reason);
    }

    @Override
    public void onFailure(WebSocket webSocket, Throwable t, Response response) {
        System.out.println("Error : " + t.getMessage());
        t.printStackTrace();
    }



    public void crearNotificacion(Alarma alarma){
        NotificationCompat.Builder builder = new NotificationCompat.Builder(activity.getApplicationContext(), "AlarmChannel")
                .setSmallIcon(R.drawable.ic_launcher_foreground)
                .setContentTitle("Nueva alarma")
                .setContentText("Alarma creada con id: "+ String.valueOf(alarma.getId()))
                .setPriority(NotificationCompat.PRIORITY_DEFAULT)
                .setLargeIcon(BitmapFactory.decodeResource(activity.getResources(), R.drawable.alarmicon));

        NotificationManagerCompat notificationManager = NotificationManagerCompat.from(activity.getApplicationContext());
        notificationManager.notify(alarma.getId(), builder.build());
        this.activity.incrementarBadge();
        this.activity.crearAlertDialog(alarma);
    }

    public void borrarNotificacion(Alarma alarma){
        NotificationManagerCompat notificationManager = NotificationManagerCompat.from(activity.getApplicationContext());
        notificationManager.cancel(alarma.getId());
        this.activity.decrementarBadge();
    }

    private void createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            int importance = NotificationManager.IMPORTANCE_DEFAULT;
            NotificationChannel channel = new NotificationChannel("AlarmChannel", "Canal Alarmas", importance);
            NotificationManager notificationManager = activity.getSystemService(NotificationManager.class);
            notificationManager.createNotificationChannel(channel);
        }
    }
}
