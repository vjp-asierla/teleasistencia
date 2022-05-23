package com.example.teleappsistencia.ui.fragments.recursosComunitariosEnAlarma;

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
import com.example.teleappsistencia.modelos.Alarma;
import com.example.teleappsistencia.modelos.RecursoComunitario;
import com.example.teleappsistencia.modelos.RecursoComunitarioEnAlarma;
import com.example.teleappsistencia.modelos.Token;
import com.example.teleappsistencia.servicios.APIService;
import com.example.teleappsistencia.servicios.ClienteRetrofit;
import com.example.teleappsistencia.utilidades.Utilidad;
import java.util.List;
import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;


public class RecursoComunitarioEnAlarmaAdapter extends RecyclerView.Adapter<RecursoComunitarioEnAlarmaAdapter.RecursoComunitarioEnAlarmaViewHolder> {
    private List<RecursoComunitarioEnAlarma> items;

    public static class RecursoComunitarioEnAlarmaViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener {

        // Campos respectivos de un item.
        private Context context;
        private TextView txtCardIdRecursoComunitarioEnAlarma;
        private TextView txtCardFechaRecursoComunitarioEnAlarma;
        private TextView txtCardPersonaRecursoComunitarioEnAlarma;
        private TextView txtCardAlarmaRecursoComunitarioEnAlarma;
        private TextView txtCardNombreRecursoComunitarioEnAlarma;
        private ImageButton imageButtonVerRecursoComunitarioEnAlarma;
        private ImageButton imageButtonModificarRecursoComunitarioEnAlarma;
        private ImageButton imageButtonBorrarRecursoComunitarioEnAlarma;
        private RecursoComunitarioEnAlarma recursoComunitarioEnAlarma;

        public RecursoComunitarioEnAlarmaViewHolder(View v) {
            super(v);
            this.context = v.getContext();
            this.txtCardIdRecursoComunitarioEnAlarma = (TextView) v.findViewById(R.id.txtCardIdRecursoComunitarioEnAlarma);
            this.txtCardFechaRecursoComunitarioEnAlarma = (TextView) v.findViewById(R.id.txtCardFechaRecursoComunitarioEnAlarma);
            this.txtCardPersonaRecursoComunitarioEnAlarma = (TextView) v.findViewById(R.id.txtCardPersonaRecursoComunitarioEnAlarma);
            this.txtCardAlarmaRecursoComunitarioEnAlarma = (TextView) v.findViewById(R.id.txtCardAlarmaRecursoComunitarioEnAlarma);
            this.txtCardNombreRecursoComunitarioEnAlarma = (TextView) v.findViewById(R.id.txtCardNombreRecursoComunitarioEnAlarma);
            this.imageButtonVerRecursoComunitarioEnAlarma = (ImageButton) v.findViewById(R.id.imageButtonVerRecursoComunitarioEnAlarma);
            this.imageButtonModificarRecursoComunitarioEnAlarma = (ImageButton) v.findViewById(R.id.imageButtonModificarRecursoComunitarioEnAlarma);
            this.imageButtonBorrarRecursoComunitarioEnAlarma = (ImageButton) v.findViewById(R.id.imageButtonBorrarRecursoComunitarioEnAlarma);
        }

        public void setOnClickListeners() {
            this.imageButtonVerRecursoComunitarioEnAlarma.setOnClickListener(this);
            this.imageButtonModificarRecursoComunitarioEnAlarma.setOnClickListener(this);
            this.imageButtonBorrarRecursoComunitarioEnAlarma.setOnClickListener(this);
        }

        @Override
        public void onClick(View view) {
            MainActivity activity = (MainActivity) context;
            switch (view.getId()) {
                case R.id.imageButtonVerRecursoComunitarioEnAlarma:
                    ConsultarRecursoComunitarioEnAlarmaFragment cRCEA =  ConsultarRecursoComunitarioEnAlarmaFragment.newInstance(this.recursoComunitarioEnAlarma);
                    activity.getSupportFragmentManager().beginTransaction()
                            .replace(R.id.main_fragment, cRCEA)
                            .addToBackStack(null)
                            .commit();
                    break;
                case R.id.imageButtonModificarRecursoComunitarioEnAlarma:
                    ModificarRecursoComunitarioEnAlarmaFragment mRCEA = ModificarRecursoComunitarioEnAlarmaFragment.newInstance(this.recursoComunitarioEnAlarma);
                    activity.getSupportFragmentManager().beginTransaction()
                            .replace(R.id.main_fragment, mRCEA)
                            .addToBackStack(null)
                            .commit();
                    break;
                case R.id.imageButtonBorrarRecursoComunitarioEnAlarma:
                    borrarRecursoComunitarioEnAlarma();
                    break;
            }
        }

        public void setRecursoComunitarioEnAlarma(RecursoComunitarioEnAlarma recursoComunitarioEnAlarma){
            this.recursoComunitarioEnAlarma = recursoComunitarioEnAlarma;
        }

        private void borrarRecursoComunitarioEnAlarma(){
            APIService apiService = ClienteRetrofit.getInstance().getAPIService();
            Call<ResponseBody> call = apiService.deleteRecursoComunitarioEnAlarmabyId(this.recursoComunitarioEnAlarma.getId(), "Bearer "+ Token.getToken().getAccess());
            call.enqueue(new Callback<ResponseBody>() {
                @Override
                public void onResponse(Call<ResponseBody> call, Response<ResponseBody> response) {
                    Toast.makeText(context, "Recurso Comunitario En Alarma borrado correctamente.", Toast.LENGTH_LONG).show();
                    MainActivity activity = (MainActivity) context;
                    ListarRecursosComunitariosEnAlarmaFragment lRCEA = new ListarRecursosComunitariosEnAlarmaFragment();
                    activity.getSupportFragmentManager().beginTransaction()
                            .replace(R.id.main_fragment, lRCEA)
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

    public RecursoComunitarioEnAlarmaAdapter(List<RecursoComunitarioEnAlarma> items) {
        this.items = items;
    }

    @Override
    public int getItemCount() {
        return items.size();
    }

    @Override
    public RecursoComunitarioEnAlarmaViewHolder onCreateViewHolder(ViewGroup viewGroup, int i) {
        View v = LayoutInflater.from(viewGroup.getContext())
                .inflate(R.layout.fragment_recursos_comunitariosen_alarma_card, viewGroup, false);
        return new RecursoComunitarioEnAlarmaViewHolder(v);
    }

    @Override
    public void onBindViewHolder(RecursoComunitarioEnAlarmaViewHolder viewHolder, int i) {
        viewHolder.setOnClickListeners();
        RecursoComunitarioEnAlarma recursoComunitarioEnAlarma = items.get(i);
        viewHolder.setRecursoComunitarioEnAlarma(recursoComunitarioEnAlarma);

        Alarma alarma = (Alarma) Utilidad.getObjeto(recursoComunitarioEnAlarma.getIdAlarma(), "Alarma");
        RecursoComunitario recursoComunitario = (RecursoComunitario) Utilidad.getObjeto(recursoComunitarioEnAlarma.getIdRecursoComunitairo(), "RecursoComunitario");

        viewHolder.txtCardIdRecursoComunitarioEnAlarma.setText("ID: " + String.valueOf(recursoComunitarioEnAlarma.getId()));
        viewHolder.txtCardFechaRecursoComunitarioEnAlarma.setText("Fecha: " + recursoComunitarioEnAlarma.getFechaRegistro());
        viewHolder.txtCardPersonaRecursoComunitarioEnAlarma.setText("Persona: " + recursoComunitarioEnAlarma.getPersona());
        viewHolder.txtCardAlarmaRecursoComunitarioEnAlarma.setText("ID Alarma: " + String.valueOf(alarma.getId()));
        viewHolder.txtCardNombreRecursoComunitarioEnAlarma.setText("Recurso Comunitario: " + recursoComunitario.getNombre());

    }
}
