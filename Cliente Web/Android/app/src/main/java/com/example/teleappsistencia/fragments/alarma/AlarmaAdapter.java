package com.example.teleappsistencia.fragments.alarma;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;
import android.widget.TextView;
import android.widget.Toast;

import androidx.recyclerview.widget.RecyclerView;

import com.example.teleappsistencia.MainActivity;
import com.example.teleappsistencia.R;
import com.example.teleappsistencia.api.clases.Alarma;
import com.example.teleappsistencia.api.clases.TipoAlarma;
import com.example.teleappsistencia.api.clases.Token;
import com.example.teleappsistencia.api.servicios.APIService;
import com.example.teleappsistencia.utilidad.ClienteRetrofit;
import com.example.teleappsistencia.utilidad.Utilidad;

import java.util.List;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class AlarmaAdapter extends RecyclerView.Adapter<AlarmaAdapter.AlarmaViewHolder> {
    private List<Alarma> items;

    public static class AlarmaViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener {

        // Campos respectivos de un item.
        private Context context;
        private TextView idAlarma;
        private TextView txtCardEstadoAlarma;
        private TextView txtCardFechaRegistroAlarma;
        private TextView txtCardTipoAlarma;
        private ImageButton imageButtonVerAlarma;
        private ImageButton imageButtonModificarAlarma;
        private ImageButton imageButtonBorrarAlarma;
        private Alarma alarma;

        public AlarmaViewHolder(View v) {
            super(v);
            this.context = v.getContext();
            this.idAlarma = (TextView) v.findViewById(R.id.txtCardIdAlarma);
            this.txtCardEstadoAlarma = (TextView) v.findViewById(R.id.txtCardEstadoAlarma);
            this.txtCardFechaRegistroAlarma = (TextView) v.findViewById(R.id.txtCardFechaRegistroAlarma);
            this.txtCardTipoAlarma = (TextView) v.findViewById(R.id.txtCardTipoAlarma);
            this.imageButtonVerAlarma = (ImageButton) v.findViewById(R.id.imageButtonVerAlarma);
            this.imageButtonModificarAlarma = (ImageButton) v.findViewById(R.id.imageButtonModificarAlarma);
            this.imageButtonBorrarAlarma = (ImageButton) v.findViewById(R.id.imageButtonBorrarAlarma);
        }

        public void setOnClickListeners() {
            this.imageButtonVerAlarma.setOnClickListener(this);
            this.imageButtonModificarAlarma.setOnClickListener(this);
            this.imageButtonBorrarAlarma.setOnClickListener(this);
        }

        @Override
        public void onClick(View view) {
            MainActivity activity = (MainActivity) context;
            switch (view.getId()) {
                case R.id.imageButtonVerAlarma:
                    ConsultarAlarmaFragment consultarAlarmaFragment = ConsultarAlarmaFragment.newInstance(this.alarma);
                    activity.getSupportFragmentManager().beginTransaction()
                            .replace(R.id.main_fragment, consultarAlarmaFragment)
                            .addToBackStack(null)
                            .commit();
                    break;
                case R.id.imageButtonModificarAlarma:
                    ModificarAlarmaFragment modificarAlarmaFragment = ModificarAlarmaFragment.newInstance(this.alarma);
                    activity.getSupportFragmentManager().beginTransaction()
                            .replace(R.id.main_fragment, modificarAlarmaFragment)
                            .addToBackStack(null)
                            .commit();
                    break;
                case R.id.imageButtonBorrarAlarma:
                    borrarAlarma();
                    break;
            }
        }

        public void setAlarma(Alarma alarma){
            this.alarma = alarma;
        }

        private void borrarAlarma(){
            APIService apiService = ClienteRetrofit.getInstance().getAPIService();
            Call<ResponseBody> call = apiService.deleteAlarmabyId(this.alarma.getId(), "Bearer "+ Token.getToken().getAccess());
            call.enqueue(new Callback<ResponseBody>() {
                @Override
                public void onResponse(Call<ResponseBody> call, Response<ResponseBody> response) {
                    Toast.makeText(context, "Alarma borrada correctamente.", Toast.LENGTH_LONG).show();
                    MainActivity activity = (MainActivity) context;
                    ListarAlarmasFragment listarAlarmasFragment = new ListarAlarmasFragment();
                    activity.getSupportFragmentManager().beginTransaction()
                            .replace(R.id.main_fragment, listarAlarmasFragment)
                            .addToBackStack(null)
                            .commit();
                }
                @Override
                public void onFailure(Call<ResponseBody> call, Throwable t) {
                    Toast.makeText(context, "Error al intentar borrar los datos.", Toast.LENGTH_LONG).show();
                }
            });
        }
    }

    public AlarmaAdapter(List<Alarma> items) {
        this.items = items;
    }

    @Override
    public int getItemCount() {
        return items.size();
    }

    @Override
    public AlarmaViewHolder onCreateViewHolder(ViewGroup viewGroup, int i) {
        View v = LayoutInflater.from(viewGroup.getContext())
                .inflate(R.layout.fragment_alarma_card, viewGroup, false);
        return new AlarmaViewHolder(v);
    }

    @Override
    public void onBindViewHolder(AlarmaViewHolder viewHolder, int i) {
        viewHolder.setOnClickListeners();
        Alarma alarma = items.get(i);
        viewHolder.setAlarma(alarma);
        TipoAlarma tipo = (TipoAlarma) Utilidad.getObjeto(alarma.getId_tipo_alarma(), "TipoAlarma");
        viewHolder.idAlarma.setText("ID Alarma: " + String.valueOf(alarma.getId()));
        viewHolder.txtCardEstadoAlarma.setText("Estado: " + alarma.getEstado_alarma());
        viewHolder.txtCardFechaRegistroAlarma.setText("Fecha: " + alarma.getFecha_registro());
        viewHolder.txtCardTipoAlarma.setText("Tipo: " + tipo.getNombre());
    }
}
