package com.example.teleappsistencia.fragments.centroSanitarioEnAlarma;

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
import com.example.teleappsistencia.api.clases.CentroSanitario;
import com.example.teleappsistencia.api.clases.CentroSanitarioEnAlarma;
import com.example.teleappsistencia.api.clases.Token;
import com.example.teleappsistencia.api.servicios.APIService;
import com.example.teleappsistencia.utilidad.ClienteRetrofit;
import com.example.teleappsistencia.utilidad.Utilidad;

import java.util.List;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class CentroSanitarioEnAlarmaAdapter extends RecyclerView.Adapter<CentroSanitarioEnAlarmaAdapter.CentroEnAlarmaViewHolder> {
    private List<CentroSanitarioEnAlarma> items;

    public static class CentroEnAlarmaViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener {

        // Campos respectivos de un item.
        private Context context;
        private TextView txtCardIdCentroSanitarioEnAlarma;
        private TextView txtCardFechaCentroEnAlarma;
        private TextView txtCardPersonaCentroEnAlarma;
        private TextView txtCardAlarmaCentroEnAlarma;
        private TextView txtCardNombreCentroEnAlarma;
        private ImageButton imageButtonVerCentroSanitarioEnAlarma;
        private ImageButton imageButtonModificarCentroSanitarioEnAlarma;
        private ImageButton imageButtonBorrarCentroSanitarioEnAlarma;
        private CentroSanitarioEnAlarma centroSanitarioEnAlarma;

        public CentroEnAlarmaViewHolder(View v) {
            super(v);
            this.context = v.getContext();
            this.txtCardIdCentroSanitarioEnAlarma = (TextView) v.findViewById(R.id.txtCardIdCentroSanitarioEnAlarma);
            this.txtCardFechaCentroEnAlarma = (TextView) v.findViewById(R.id.txtCardFechaCentroEnAlarma);
            this.txtCardPersonaCentroEnAlarma = (TextView) v.findViewById(R.id.txtCardPersonaCentroEnAlarma);
            this.txtCardAlarmaCentroEnAlarma = (TextView) v.findViewById(R.id.txtCardAlarmaCentroEnAlarma);
            this.txtCardNombreCentroEnAlarma = (TextView) v.findViewById(R.id.txtCardNombreCentroEnAlarma);
            this.imageButtonVerCentroSanitarioEnAlarma = (ImageButton) v.findViewById(R.id.imageButtonVerCentroSanitarioEnAlarma);
            this.imageButtonModificarCentroSanitarioEnAlarma = (ImageButton) v.findViewById(R.id.imageButtonModificarCentroSanitarioEnAlarma);
            this.imageButtonBorrarCentroSanitarioEnAlarma = (ImageButton) v.findViewById(R.id.imageButtonBorrarCentroSanitarioEnAlarma);
        }

        public void setOnClickListeners() {
            this.imageButtonVerCentroSanitarioEnAlarma.setOnClickListener(this);
            this.imageButtonModificarCentroSanitarioEnAlarma.setOnClickListener(this);
            this.imageButtonBorrarCentroSanitarioEnAlarma.setOnClickListener(this);
        }

        @Override
        public void onClick(View view) {
            MainActivity activity = (MainActivity) context;
            switch (view.getId()) {
                case R.id.imageButtonVerCentroSanitarioEnAlarma:
                    ConsultarCentroSanitarioEnAlarmaFragment cCSEA = ConsultarCentroSanitarioEnAlarmaFragment.newInstance(this.centroSanitarioEnAlarma);
                    activity.getSupportFragmentManager().beginTransaction()
                            .replace(R.id.main_fragment, cCSEA)
                            .addToBackStack(null)
                            .commit();
                    break;
                case R.id.imageButtonModificarCentroSanitarioEnAlarma:
                    ModificarCentroSanitarioEnAlarmaFragment mCSEA = ModificarCentroSanitarioEnAlarmaFragment.newInstance(this.centroSanitarioEnAlarma);
                    activity.getSupportFragmentManager().beginTransaction()
                            .replace(R.id.main_fragment, mCSEA)
                            .addToBackStack(null)
                            .commit();
                    break;
                case R.id.imageButtonBorrarCentroSanitarioEnAlarma:
                    borrarCentroSanitarioEnAlarma();
                    break;
            }
        }

        public void setCentroSanitarioEnAlarma(CentroSanitarioEnAlarma centroSanitarioEnAlarma){
            this.centroSanitarioEnAlarma = centroSanitarioEnAlarma;
        }

        private void borrarCentroSanitarioEnAlarma(){
            APIService apiService = ClienteRetrofit.getInstance().getAPIService();
            Call<ResponseBody> call = apiService.deleteCentroSanitarioEnAlarmabyId(this.centroSanitarioEnAlarma.getId(), "Bearer "+ Token.getToken().getAccess());
            call.enqueue(new Callback<ResponseBody>() {
                @Override
                public void onResponse(Call<ResponseBody> call, Response<ResponseBody> response) {
                    Toast.makeText(context, "Centro Sanitario en Alarma borrado correctamente.", Toast.LENGTH_LONG).show();
                    MainActivity activity = (MainActivity) context;
                    ListarCentrosSanitariosEnAlarmaFragment lCSEA = new ListarCentrosSanitariosEnAlarmaFragment();
                    activity.getSupportFragmentManager().beginTransaction()
                            .replace(R.id.main_fragment, lCSEA)
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

    public CentroSanitarioEnAlarmaAdapter(List<CentroSanitarioEnAlarma> items) {
        this.items = items;
    }

    @Override
    public int getItemCount() {
        return items.size();
    }

    @Override
    public CentroEnAlarmaViewHolder onCreateViewHolder(ViewGroup viewGroup, int i) {
        View v = LayoutInflater.from(viewGroup.getContext())
                .inflate(R.layout.fragment_centro_sanitario_en_alarma_card, viewGroup, false);
        return new CentroEnAlarmaViewHolder(v);
    }

    @Override
    public void onBindViewHolder(CentroEnAlarmaViewHolder viewHolder, int i) {
        viewHolder.setOnClickListeners();
        CentroSanitarioEnAlarma centroSanitarioEnAlarma = items.get(i);
        viewHolder.setCentroSanitarioEnAlarma(centroSanitarioEnAlarma);

        Alarma alarma = (Alarma) Utilidad.getObjeto(centroSanitarioEnAlarma.getIdAlarma(), "Alarma");
        CentroSanitario centroSanitario = (CentroSanitario) Utilidad.getObjeto(centroSanitarioEnAlarma.getIdCentroSanitario(), "CentroSanitario");

        viewHolder.txtCardIdCentroSanitarioEnAlarma.setText("ID: " + String.valueOf(centroSanitarioEnAlarma.getId()));
        viewHolder.txtCardFechaCentroEnAlarma.setText("Fecha: " + centroSanitarioEnAlarma.getFechaRegistro());
        viewHolder.txtCardPersonaCentroEnAlarma.setText("Persona: " + centroSanitarioEnAlarma.getPersona());
        viewHolder.txtCardAlarmaCentroEnAlarma.setText("ID Alarma: " + String.valueOf(alarma.getId()));
        viewHolder.txtCardNombreCentroEnAlarma.setText("Centro: " + centroSanitario.getNombre());
    }
}
