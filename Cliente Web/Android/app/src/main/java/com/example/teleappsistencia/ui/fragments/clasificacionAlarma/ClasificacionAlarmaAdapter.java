package com.example.teleappsistencia.ui.fragments.clasificacionAlarma;

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
import com.example.teleappsistencia.modelos.ClasificacionAlarma;
import com.example.teleappsistencia.modelos.Token;
import com.example.teleappsistencia.servicios.APIService;
import com.example.teleappsistencia.servicios.ClienteRetrofit;

import java.util.List;
import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ClasificacionAlarmaAdapter extends RecyclerView.Adapter<ClasificacionAlarmaAdapter.ClasificacionAlarmaViewHolder> {
    private List<ClasificacionAlarma> items;

    public static class ClasificacionAlarmaViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener {

        // Campos respectivos de un item.
        private Context context;
        private TextView txtCardIdClasificacionAlarma;
        private TextView txtCardNombreClasificacionAlarma;
        private TextView txtCardCodigoClasificacionAlarma;
        private ImageButton imageButtonVerClasificacionAlarma;
        private ImageButton imageButtonModificarClasificacionAlarma;
        private ImageButton imageButtonBorrarClasificacionAlarma;
        private ClasificacionAlarma clasificacionAlarma;

        public ClasificacionAlarmaViewHolder(View v) {
            super(v);
            this.context = v.getContext();
            this.txtCardIdClasificacionAlarma = (TextView) v.findViewById(R.id.txtCardIdClasificacionAlarma);
            this.txtCardNombreClasificacionAlarma = (TextView) v.findViewById(R.id.txtCardNombreClasificacionAlarma);
            this.txtCardCodigoClasificacionAlarma = (TextView) v.findViewById(R.id.txtCardCodigoClasificacionAlarma);
            this.imageButtonVerClasificacionAlarma = (ImageButton) v.findViewById(R.id.imageButtonVerClasificacionAlarma);
            this.imageButtonModificarClasificacionAlarma = (ImageButton) v.findViewById(R.id.imageButtonModificarClasificacionAlarma);
            this.imageButtonBorrarClasificacionAlarma = (ImageButton) v.findViewById(R.id.imageButtonBorrarClasificacionAlarma);
        }

        public void setOnClickListeners() {
            this.imageButtonVerClasificacionAlarma.setOnClickListener(this);
            this.imageButtonModificarClasificacionAlarma.setOnClickListener(this);
            this.imageButtonBorrarClasificacionAlarma.setOnClickListener(this);
        }

        @Override
        public void onClick(View view) {
            MainActivity activity = (MainActivity) context;
            switch (view.getId()) {
                case R.id.imageButtonVerClasificacionAlarma:
                    ConsultarClasificacionAlarmaFragment consultarClasificacionAlarmaFragment = ConsultarClasificacionAlarmaFragment.newInstance(this.clasificacionAlarma);
                    activity.getSupportFragmentManager().beginTransaction()
                            .replace(R.id.main_fragment, consultarClasificacionAlarmaFragment)
                            .addToBackStack(null)
                            .commit();
                    break;
                case R.id.imageButtonModificarClasificacionAlarma:
                    ModificarClasificacionAlarmaFragment modificarClasificacionAlarmaFragment = ModificarClasificacionAlarmaFragment.newInstance(this.clasificacionAlarma);
                    activity.getSupportFragmentManager().beginTransaction()
                            .replace(R.id.main_fragment, modificarClasificacionAlarmaFragment)
                            .addToBackStack(null)
                            .commit();
                    break;
                case R.id.imageButtonBorrarClasificacionAlarma:
                    borrarClasificacionAlarma();
                    break;
            }
        }

        public void setClasificacionAlarma(ClasificacionAlarma clasificacionAlarma){
            this.clasificacionAlarma = clasificacionAlarma;
        }

        private void borrarClasificacionAlarma(){
            APIService apiService = ClienteRetrofit.getInstance().getAPIService();
            Call<ResponseBody> call = apiService.deleteClasificacionAlarmabyId(this.clasificacionAlarma.getId(), "Bearer "+ Token.getToken().getAccess());
            call.enqueue(new Callback<ResponseBody>() {
                @Override
                public void onResponse(Call<ResponseBody> call, Response<ResponseBody> response) {
                    Toast.makeText(context, "Clasificacion de Alarma borrada correctamente.", Toast.LENGTH_LONG).show();
                    MainActivity activity = (MainActivity) context;
                    ListarClasificacionAlarmaFragment listarClasificacionAlarmaFragment = new ListarClasificacionAlarmaFragment();
                    activity.getSupportFragmentManager().beginTransaction()
                            .replace(R.id.main_fragment, listarClasificacionAlarmaFragment)
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

    public ClasificacionAlarmaAdapter(List<ClasificacionAlarma> items) {
        this.items = items;
    }

    @Override
    public int getItemCount() {
        return items.size();
    }

    @Override
    public ClasificacionAlarmaAdapter.ClasificacionAlarmaViewHolder onCreateViewHolder(ViewGroup viewGroup, int i) {
        View v = LayoutInflater.from(viewGroup.getContext())
                .inflate(R.layout.fragment_clasificacion_alarma_card, viewGroup, false);
        return new ClasificacionAlarmaAdapter.ClasificacionAlarmaViewHolder(v);
    }

    @Override
    public void onBindViewHolder(ClasificacionAlarmaAdapter.ClasificacionAlarmaViewHolder viewHolder, int i) {
        viewHolder.setOnClickListeners();

        ClasificacionAlarma clasificacionAlarma = items.get(i);
        viewHolder.setClasificacionAlarma(clasificacionAlarma);

        viewHolder.txtCardIdClasificacionAlarma.setText("ID: "+ String.valueOf(clasificacionAlarma.getId()));
        viewHolder.txtCardNombreClasificacionAlarma.setText("Nombre: " + clasificacionAlarma.getNombre());
        viewHolder.txtCardCodigoClasificacionAlarma.setText("Código: "+clasificacionAlarma.getCodigo());
    }
}
