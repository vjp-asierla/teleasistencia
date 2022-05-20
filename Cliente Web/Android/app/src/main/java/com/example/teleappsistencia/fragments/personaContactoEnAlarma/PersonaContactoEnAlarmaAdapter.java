package com.example.teleappsistencia.fragments.personaContactoEnAlarma;

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
import com.example.teleappsistencia.api.clases.Persona;
import com.example.teleappsistencia.api.clases.PersonaContactoEnAlarma;
import com.example.teleappsistencia.api.clases.Token;
import com.example.teleappsistencia.api.servicios.APIService;
import com.example.teleappsistencia.utilidad.ClienteRetrofit;
import com.example.teleappsistencia.utilidad.Utilidad;

import java.util.List;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;


public class PersonaContactoEnAlarmaAdapter extends RecyclerView.Adapter<PersonaContactoEnAlarmaAdapter.PersonaContactoEnAlarmaViewHolder> {
    private List<PersonaContactoEnAlarma> items;

    public static class PersonaContactoEnAlarmaViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener {

        // Campos respectivos de un item.
        private Context context;
        private TextView txtCardIdPersonaContactoEnAlarma;
        private TextView txtCardFechaPersonaContactoEnAlarma;
        private TextView txtCardIdAlarmaPersonaContactoEnAlarma;
        private TextView txtCardNombrePersonaContactoEnAlarma;
        private ImageButton imageButtonVerPersonaContactoEnAlarma;
        private ImageButton imageButtonModificarPersonaContactoEnAlarma;
        private ImageButton imageButtonBorrarPersonaContactoEnAlarma;
        private PersonaContactoEnAlarma personaContactoEnAlarma;

        public PersonaContactoEnAlarmaViewHolder(View v) {
            super(v);
            this.context = v.getContext();
            this.txtCardIdPersonaContactoEnAlarma = (TextView) v.findViewById(R.id.txtCardIdPersonaContactoEnAlarma);
            this.txtCardFechaPersonaContactoEnAlarma = (TextView) v.findViewById(R.id.txtCardFechaPersonaContactoEnAlarma);
            this.txtCardIdAlarmaPersonaContactoEnAlarma = (TextView) v.findViewById(R.id.txtCardIdAlarmaPersonaContactoEnAlarma);
            this.txtCardNombrePersonaContactoEnAlarma = (TextView) v.findViewById(R.id.txtCardNombrePersonaContactoEnAlarma);
            this.imageButtonVerPersonaContactoEnAlarma = (ImageButton) v.findViewById(R.id.imageButtonVerPersonaContactoEnAlarma);
            this.imageButtonModificarPersonaContactoEnAlarma = (ImageButton) v.findViewById(R.id.imageButtonModificarPersonaContactoEnAlarma);
            this.imageButtonBorrarPersonaContactoEnAlarma = (ImageButton) v.findViewById(R.id.imageButtonBorrarPersonaContactoEnAlarma);
        }

        public void setOnClickListeners() {
            this.imageButtonVerPersonaContactoEnAlarma.setOnClickListener(this);
            this.imageButtonModificarPersonaContactoEnAlarma.setOnClickListener(this);
            this.imageButtonBorrarPersonaContactoEnAlarma.setOnClickListener(this);
        }

        @Override
        public void onClick(View view) {
            MainActivity activity = (MainActivity) context;
            switch (view.getId()) {
                case R.id.imageButtonVerPersonaContactoEnAlarma:
                    ConsultarPersonaContactoEnAlarmaFragment cPCEA = ConsultarPersonaContactoEnAlarmaFragment.newInstance(this.personaContactoEnAlarma);
                    activity.getSupportFragmentManager().beginTransaction()
                            .replace(R.id.main_fragment, cPCEA)
                            .addToBackStack(null)
                            .commit();
                    break;
                case R.id.imageButtonModificarPersonaContactoEnAlarma:
                    ModificarPersonaContactoEnAlarmaFragment mPCEA = ModificarPersonaContactoEnAlarmaFragment.newInstance(this.personaContactoEnAlarma);
                    activity.getSupportFragmentManager().beginTransaction()
                            .replace(R.id.main_fragment, mPCEA)
                            .addToBackStack(null)
                            .commit();
                    break;
                case R.id.imageButtonBorrarPersonaContactoEnAlarma:
                    borrarPersonaContactoEnAlarma();
                    break;
            }
        }

        public void setPersonaContactoEnAlarma(PersonaContactoEnAlarma personaContactoEnAlarma){
            this.personaContactoEnAlarma = personaContactoEnAlarma;
        }

        private void borrarPersonaContactoEnAlarma(){
            APIService apiService = ClienteRetrofit.getInstance().getAPIService();
            Call<ResponseBody> call = apiService.deletePersonaContactoEnAlarmabyId(this.personaContactoEnAlarma.getId(), "Bearer "+ Token.getToken().getAccess());
            call.enqueue(new Callback<ResponseBody>() {
                @Override
                public void onResponse(Call<ResponseBody> call, Response<ResponseBody> response) {
                    Toast.makeText(context, "Persona Contacto En Alarma borrado correctamente.", Toast.LENGTH_LONG).show();
                    MainActivity activity = (MainActivity) context;
                    ListarPersonasContactoEnAlarmaFragment lPCEN = new ListarPersonasContactoEnAlarmaFragment();
                    activity.getSupportFragmentManager().beginTransaction()
                            .replace(R.id.main_fragment, lPCEN)
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

    public PersonaContactoEnAlarmaAdapter(List<PersonaContactoEnAlarma> items) {
        this.items = items;
    }

    @Override
    public int getItemCount() {
        return items.size();
    }

    @Override
    public PersonaContactoEnAlarmaViewHolder onCreateViewHolder(ViewGroup viewGroup, int i) {
        View v = LayoutInflater.from(viewGroup.getContext())
                .inflate(R.layout.fragment_persona_contacto_en_alarma_card, viewGroup, false);
        return new PersonaContactoEnAlarmaViewHolder(v);
    }

    @Override
    public void onBindViewHolder(PersonaContactoEnAlarmaViewHolder viewHolder, int i) {
        viewHolder.setOnClickListeners();
        PersonaContactoEnAlarma personaContactoEnAlarma = items.get(i);
        viewHolder.setPersonaContactoEnAlarma(personaContactoEnAlarma);

        Alarma alarma = (Alarma) Utilidad.getObjeto(personaContactoEnAlarma.getIdAlarma(), "Alarma");
        Persona persona = (Persona) Utilidad.getObjeto(personaContactoEnAlarma.getIdPersonaContacto(), "Persona");

        viewHolder.txtCardIdPersonaContactoEnAlarma.setText("ID: " + String.valueOf(personaContactoEnAlarma.getId()));
        viewHolder.txtCardFechaPersonaContactoEnAlarma.setText("Fecha: " + personaContactoEnAlarma.getFechaRegistro());
        viewHolder.txtCardNombrePersonaContactoEnAlarma.setText("Persona: " + persona.getNombre() + " " + persona.getApellidos());
        viewHolder.txtCardIdAlarmaPersonaContactoEnAlarma.setText("ID Alarma: " + String.valueOf(alarma.getId()));
    }
}
