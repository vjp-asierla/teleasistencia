package com.example.teleappsistencia.utilidad;

import android.app.Activity;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.os.Build;

import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;

import com.example.teleappsistencia.MainActivity;
import com.example.teleappsistencia.R;

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
        createNotificationChannel();
    }

    @Override
    public void onOpen(WebSocket webSocket, Response response) {

    }

    @Override
    public void onMessage(WebSocket webSocket, String text) {
        System.out.println("Receiving : " + text);
        System.out.println("mensaje texto");

        NotificationCompat.Builder builder = new NotificationCompat.Builder(activity.getApplicationContext(), "AlarmChannel")
                .setSmallIcon(R.drawable.ic_launcher_foreground)
                .setContentTitle("Título")
                .setContentText("Tienes una alarma")
                .setPriority(NotificationCompat.PRIORITY_DEFAULT);

        NotificationManagerCompat notificationManager = NotificationManagerCompat.from(activity.getApplicationContext());
        notificationManager.notify(1, builder.build());
        this.activity.incrementarBadge();
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

    private void createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            CharSequence name = "Canal Alarma";
            String description = "Canal para alarmas";
            int importance = NotificationManager.IMPORTANCE_DEFAULT;
            NotificationChannel channel = new NotificationChannel("AlarmChannel", name, importance);
            channel.setDescription(description);
            // Register the channel with the system; you can't change the importance
            // or other notification behaviors after this
            NotificationManager notificationManager = activity.getSystemService(NotificationManager.class);
            notificationManager.createNotificationChannel(channel);
        }
    }
}
