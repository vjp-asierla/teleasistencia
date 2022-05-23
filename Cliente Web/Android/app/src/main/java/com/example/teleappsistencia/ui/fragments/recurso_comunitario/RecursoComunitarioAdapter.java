package com.example.teleappsistencia.ui.fragments.recurso_comunitario;

import android.app.Activity;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.RecyclerView;

import com.example.teleappsistencia.R;
import com.example.teleappsistencia.modelos.RecursoComunitario;

import java.util.List;

public class RecursoComunitarioAdapter extends RecyclerView.Adapter<RecursoComunitarioAdapter.RecursoComunitarioViewHolder> {
    private List<RecursoComunitario> items;
    private Activity activity;
    private RecyclerView recyclerView;
    private RecursoComunitarioViewHolder recursoComunitarioViewHolder;

    public static class RecursoComunitarioViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener {

        // Campos respectivos de un item.
        public Context context;
        private TextView nombreRecursoComunitario;
        private TextView telefonoRecursoComunitario;
        private TextView tipoRecursoComunitarioRecursoComunitario;
        private TextView direccionRecursoComunitario;
        private ImageButton imageButtonModificarRecursoComunitario;
        private ImageButton imageButtonVerRecursoComunitario;
        private ImageButton imageButtonBorrarRecursoComunitario;
        private RecursoComunitario recursoComunitario;

        public void setRecursoComunitario(RecursoComunitario recursoComunitario) {
            this.recursoComunitario = recursoComunitario;
        }

        public RecursoComunitarioViewHolder(View v) {
            super(v);
            this.context = v.getContext();
            this.nombreRecursoComunitario = (TextView) v.findViewById(R.id.nombreRecursoComunitario);
            this.telefonoRecursoComunitario = (TextView) v.findViewById(R.id.telefonoRecursoComunitario);
            this.tipoRecursoComunitarioRecursoComunitario = (TextView) v.findViewById(R.id.tipoRecursoComunitarioRecursoComunitario);
            this.direccionRecursoComunitario = (TextView) v.findViewById(R.id.direccionRecursoComunitario);
            this.imageButtonModificarRecursoComunitario = (ImageButton) v.findViewById(R.id.imageButtonModificarRecursoComunitario);
            this.imageButtonVerRecursoComunitario = (ImageButton) v.findViewById(R.id.imageButtonVerRecursoComunitario);
            this.imageButtonBorrarRecursoComunitario = (ImageButton) v.findViewById(R.id.imageButtonBorrarRecursoComunitario);
        }

        public void setOnClickListeners() {
            this.imageButtonModificarRecursoComunitario.setOnClickListener(this);
            this.imageButtonVerRecursoComunitario.setOnClickListener(this);
            this.imageButtonBorrarRecursoComunitario.setOnClickListener(this);
        }

        @Override
        public void onClick(View view) {
            switch (view.getId()) {
                case R.id.imageButtonModificarRecursoComunitario:
                    // Llamar al Fragment FragmentModificarRecursoComunitario.
                    AppCompatActivity activityModificar = (AppCompatActivity) view.getContext();
                    FragmentModificarRecursoComunitario fm = FragmentModificarRecursoComunitario.newInstance(this.recursoComunitario);
                    activityModificar.getSupportFragmentManager().beginTransaction().replace(R.id.main_fragment, fm).addToBackStack(null).commit();
                    break;
                case R.id.imageButtonVerRecursoComunitario:
                    // Llamar al Fragment ConsultarRecursoComunitario.
                    AppCompatActivity activityVer = (AppCompatActivity) view.getContext();
                    ConsultarRecursoComunitario fc = ConsultarRecursoComunitario.newInstance(this.recursoComunitario);
                    activityVer.getSupportFragmentManager().beginTransaction().replace(R.id.main_fragment, fc).addToBackStack(null).commit();
                    break;
                case R.id.imageButtonBorrarRecursoComunitario:
                    break;
            }
        }
    }

    public RecursoComunitarioAdapter(List<RecursoComunitario> items, Activity activity, RecyclerView recycler) {
        this.items = items;
        this.activity = activity;
        this.recyclerView = recycler;
    }

    @Override
    public int getItemCount() {
        return items.size();
    }

    @Override
    public RecursoComunitarioViewHolder onCreateViewHolder(ViewGroup viewGroup, int i) {
        View v = LayoutInflater.from(viewGroup.getContext())
                .inflate(R.layout.fragment_recurso_comunitario_card, viewGroup, false);
        this.recursoComunitarioViewHolder = new RecursoComunitarioViewHolder(v);
        return recursoComunitarioViewHolder;
    }

    @Override
    public void onBindViewHolder(RecursoComunitarioViewHolder viewHolder, int i) {
        viewHolder.setOnClickListeners();
        /* Hay que revisar el modelo para adaptarlo (hablar con Aaron) */
        /*viewHolder.nombreRecursoComunitario.setText(items.get(i).getNombreRecursoComunitario());
        viewHolder.telefonoRecursoComunitario.setText(items.get(i).getTelefonoRecursoComunitario());
        viewHolder.tipoRecursoComunitarioRecursoComunitario.setText(items.get(i).getTipoRecursoComunitario().get(0));
        viewHolder.direccionRecursoComunitario.setText(items.get(i).getDireccionRecursoComunitario());
        this.recursoComunitarioViewHolder.setRecursoComunitario(items.get(i));*/
    }
}
