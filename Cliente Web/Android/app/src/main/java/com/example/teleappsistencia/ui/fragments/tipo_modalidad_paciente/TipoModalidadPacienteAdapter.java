package com.example.teleappsistencia.ui.fragments.tipo_modalidad_paciente;

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
import com.example.teleappsistencia.modelos.TipoModalidadPaciente;

import java.util.List;

public class TipoModalidadPacienteAdapter extends RecyclerView.Adapter<TipoModalidadPacienteAdapter.TipoModalidadPacienteViewHolder> {
    private List<TipoModalidadPaciente> items;
    private Activity activity;
    private RecyclerView recyclerView;
    private TipoModalidadPacienteViewHolder tipoModalidadPacienteViewHolder;

    public static class TipoModalidadPacienteViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener {

        // Campos respectivos de un item.
        public Context context;
        public TextView nombreTipoModalidadPaciente;
        private ImageButton imageButtonModificarTipoModalidadPaciente;
        private ImageButton imageButtonVerTipoModalidadPaciente;
        private ImageButton imageButtonBorrarTipoModalidadPaciente;
        private TipoModalidadPaciente tipoModalidadPaciente;

        public void setTipoModalidadPaciente(TipoModalidadPaciente tipoModalidadPaciente) {
            this.tipoModalidadPaciente = tipoModalidadPaciente;
        }

        public TipoModalidadPacienteViewHolder(View v) {
            super(v);
            this.context = v.getContext();
            this.nombreTipoModalidadPaciente = (TextView) v.findViewById(R.id.nombreTipoModalidadPaciente);
            this.imageButtonModificarTipoModalidadPaciente = (ImageButton) v.findViewById(R.id.imageButtonModificarTipoModalidadPaciente);
            this.imageButtonVerTipoModalidadPaciente = (ImageButton) v.findViewById(R.id.imageButtonVerTipoModalidadPaciente);
            this.imageButtonBorrarTipoModalidadPaciente = (ImageButton) v.findViewById(R.id.imageButtonBorrarTipoModalidadPaciente);
        }

        public void setOnClickListeners() {
            this.imageButtonModificarTipoModalidadPaciente.setOnClickListener(this);
            this.imageButtonVerTipoModalidadPaciente.setOnClickListener(this);
            this.imageButtonBorrarTipoModalidadPaciente.setOnClickListener(this);
        }

        @Override
        public void onClick(View view) {
            switch (view.getId()) {
                case R.id.imageButtonModificarTipoModalidadPaciente:
                    // Llamar al Fragment FragmentModificarTipoModalidadPaciente.
                    AppCompatActivity activityModificar = (AppCompatActivity) view.getContext();
                    FragmentModificarTipoModalidadPaciente fm = FragmentModificarTipoModalidadPaciente.newInstance(this.tipoModalidadPaciente);
                    activityModificar.getSupportFragmentManager().beginTransaction().replace(R.id.main_fragment, fm).addToBackStack(null).commit();
                    break;
                case R.id.imageButtonVerTipoModalidadPaciente:
                    // Llamar al Fragment ConsultarTipoModalidadPaciente.
                    AppCompatActivity activityVer = (AppCompatActivity) view.getContext();
                    ConsultarTipoModalidadPaciente fc = ConsultarTipoModalidadPaciente.newInstance(this.tipoModalidadPaciente);
                    activityVer.getSupportFragmentManager().beginTransaction().replace(R.id.main_fragment, fc).addToBackStack(null).commit();
                    break;
                case R.id.imageButtonBorrarTipoModalidadPaciente:
                    break;
            }
        }
    }

    public TipoModalidadPacienteAdapter(List<TipoModalidadPaciente> items, Activity activity, RecyclerView recycler) {
        this.items = items;
        this.activity = activity;
        this.recyclerView = recycler;
    }

    @Override
    public int getItemCount() {
        return items.size();
    }

    @Override
    public TipoModalidadPacienteViewHolder onCreateViewHolder(ViewGroup viewGroup, int i) {
        View v = LayoutInflater.from(viewGroup.getContext())
                .inflate(R.layout.fragment_tipo_modalidad_paciente_card, viewGroup, false);
        this.tipoModalidadPacienteViewHolder = new TipoModalidadPacienteAdapter.TipoModalidadPacienteViewHolder(v);
        return tipoModalidadPacienteViewHolder;
    }

    @Override
    public void onBindViewHolder(TipoModalidadPacienteViewHolder viewHolder, int i) {
        viewHolder.setOnClickListeners();
        viewHolder.nombreTipoModalidadPaciente.setText(items.get(i).getNombreTipoModalidadPaciente());
        this.tipoModalidadPacienteViewHolder.setTipoModalidadPaciente(items.get(i));
    }
}
