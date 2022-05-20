package com.example.teleappsistencia.ui.fragments.tipo_recurso_comunitario;

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
import com.example.teleappsistencia.modelos.TipoRecursoComunitario;

import java.util.List;

public class TipoRecursoComunitarioAdapter extends RecyclerView.Adapter<TipoRecursoComunitarioAdapter.TipoRecursoComunitarioViewHolder> {
    private List<TipoRecursoComunitario> items;
    private Activity activity;
    private RecyclerView recyclerView;
    private TipoRecursoComunitarioViewHolder tipoRecursoComunitarioViewHolder;

    public static class TipoRecursoComunitarioViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener {

        // Campos respectivos de un item.
        public Context context;
        public TextView nombreTipoRecursoComunitario;
        private ImageButton imageButtonModificarTipoRecursoComunitario;
        private ImageButton imageButtonVerTipoRecursoComunitario;
        private ImageButton imageButtonBorrarTipoRecursoComunitario;
        private TipoRecursoComunitario tipoRecursoComunitario;

        public void setTipoRecursoComunitario(TipoRecursoComunitario tipoRecursoComunitario) {
            this.tipoRecursoComunitario = tipoRecursoComunitario;
        }

        public TipoRecursoComunitarioViewHolder(View v) {
            super(v);
            this.context = v.getContext();
            this.nombreTipoRecursoComunitario = (TextView) v.findViewById(R.id.nombreTipoRecursoComunitario);
            this.imageButtonModificarTipoRecursoComunitario = (ImageButton) v.findViewById(R.id.imageButtonModificarTipoRecursoComunitario);
            this.imageButtonVerTipoRecursoComunitario = (ImageButton) v.findViewById(R.id.imageButtonVerTipoRecursoComunitario);
            this.imageButtonBorrarTipoRecursoComunitario = (ImageButton) v.findViewById(R.id.imageButtonBorrarTipoRecursoComunitario);
        }

        public void setOnClickListeners() {
            this.imageButtonModificarTipoRecursoComunitario.setOnClickListener(this);
            this.imageButtonVerTipoRecursoComunitario.setOnClickListener(this);
            this.imageButtonBorrarTipoRecursoComunitario.setOnClickListener(this);
        }

        @Override
        public void onClick(View view) {
            switch (view.getId()) {
                case R.id.imageButtonModificarTipoRecursoComunitario:
                    // Llamar al Fragment FragmentModificarTipoRecursoComunitario.
                    AppCompatActivity activityModificar = (AppCompatActivity) view.getContext();
                    FragmentModificarTipoRecursoComunitario fm = FragmentModificarTipoRecursoComunitario.newInstance(this.tipoRecursoComunitario);
                    activityModificar.getSupportFragmentManager().beginTransaction().replace(R.id.main_fragment, fm).addToBackStack(null).commit();
                    break;
                case R.id.imageButtonVerTipoRecursoComunitario:
                    // Llamar al Fragment ConsultarTipoRecursoComunitario.
                    AppCompatActivity activityVer = (AppCompatActivity) view.getContext();
                    ConsultarTipoRecursoComunitario fc = ConsultarTipoRecursoComunitario.newInstance(this.tipoRecursoComunitario);
                    activityVer.getSupportFragmentManager().beginTransaction().replace(R.id.main_fragment, fc).addToBackStack(null).commit();
                    break;
                case R.id.imageButtonBorrarTipoRecursoComunitario:
                    break;
            }
        }
    }

    public TipoRecursoComunitarioAdapter(List<TipoRecursoComunitario> items, Activity activity, RecyclerView recycler) {
        this.items = items;
        this.activity = activity;
        this.recyclerView = recycler;
    }

    @Override
    public int getItemCount() {
        return items.size();
    }

    @Override
    public TipoRecursoComunitarioViewHolder onCreateViewHolder(ViewGroup viewGroup, int i) {
        View v = LayoutInflater.from(viewGroup.getContext())
                .inflate(R.layout.fragment_tipo_recurso_comunitario_card, viewGroup, false);
        this.tipoRecursoComunitarioViewHolder = new TipoRecursoComunitarioViewHolder(v);
        return tipoRecursoComunitarioViewHolder;
    }

    @Override
    public void onBindViewHolder(TipoRecursoComunitarioViewHolder viewHolder, int i) {
        viewHolder.setOnClickListeners();
        viewHolder.nombreTipoRecursoComunitario.setText(items.get(i).getNombreTipoRecursoComunitario());
        this.tipoRecursoComunitarioViewHolder.setTipoRecursoComunitario(items.get(i));
    }
}
