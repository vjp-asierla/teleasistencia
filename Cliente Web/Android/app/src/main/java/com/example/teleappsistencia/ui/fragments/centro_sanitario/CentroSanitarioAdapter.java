package com.example.teleappsistencia.ui.fragments.centro_sanitario;

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
import com.example.teleappsistencia.modelos.CentroSanitario;

import java.util.List;

public class CentroSanitarioAdapter extends RecyclerView.Adapter<CentroSanitarioAdapter.CentroSanitarioViewHolder> {
    private List<CentroSanitario> items;
    private Activity activity;
    private RecyclerView recyclerView;
    private CentroSanitarioViewHolder centroSanitarioViewHolder;

    public static class CentroSanitarioViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener {

        // Campos respectivos de un item.
        public Context context;
        private TextView nombreCentroSanitario;
        private TextView telefonoCentroSanitario;
        private TextView tipoCentroSanitarioCentroSanitario;
        private TextView direccionCentroSanitario;
        private ImageButton imageButtonModificarCentroSanitario;
        private ImageButton imageButtonVerCentroSanitario;
        private ImageButton imageButtonBorrarCentroSanitario;
        private CentroSanitario centroSanitario;

        public void setCentroSanitario(CentroSanitario centroSanitario) {
            this.centroSanitario = centroSanitario;
        }

        public CentroSanitarioViewHolder(View v) {
            super(v);
            this.context = v.getContext();
            this.nombreCentroSanitario = (TextView) v.findViewById(R.id.nombreCentroSanitario);
            this.telefonoCentroSanitario = (TextView) v.findViewById(R.id.telefonoCentroSanitario);
            this.tipoCentroSanitarioCentroSanitario = (TextView) v.findViewById(R.id.tipoCentroSanitarioCentroSanitario);
            this.direccionCentroSanitario = (TextView) v.findViewById(R.id.direccionCentroSanitario);
            this.imageButtonModificarCentroSanitario = (ImageButton) v.findViewById(R.id.imageButtonModificarCentroSanitario);
            this.imageButtonVerCentroSanitario = (ImageButton) v.findViewById(R.id.imageButtonVerCentroSanitario);
            this.imageButtonBorrarCentroSanitario = (ImageButton) v.findViewById(R.id.imageButtonBorrarCentroSanitario);
        }

        public void setOnClickListeners() {
            this.imageButtonModificarCentroSanitario.setOnClickListener(this);
            this.imageButtonVerCentroSanitario.setOnClickListener(this);
            this.imageButtonBorrarCentroSanitario.setOnClickListener(this);
        }

        @Override
        public void onClick(View view) {
            switch (view.getId()) {
                case R.id.imageButtonModificarCentroSanitario:
                    // Llamar al Fragment FragmentModificarCentroSanitario.
                    AppCompatActivity activityModificar = (AppCompatActivity) view.getContext();
                    FragmentModificarCentroSanitario fm = FragmentModificarCentroSanitario.newInstance(this.centroSanitario);
                    activityModificar.getSupportFragmentManager().beginTransaction().replace(R.id.main_fragment, fm).addToBackStack(null).commit();
                    break;
                case R.id.imageButtonVerCentroSanitario:
                    // Llamar al Fragment ConsultarCentroSanitario.
                    AppCompatActivity activityVer = (AppCompatActivity) view.getContext();
                    ConsultarCentroSanitario fc = ConsultarCentroSanitario.newInstance(this.centroSanitario);
                    activityVer.getSupportFragmentManager().beginTransaction().replace(R.id.main_fragment, fc).addToBackStack(null).commit();
                    break;
                case R.id.imageButtonBorrarCentroSanitario:
                    break;
            }
        }
    }

    public CentroSanitarioAdapter(List<CentroSanitario> items, Activity activity, RecyclerView recycler) {
        this.items = items;
        this.activity = activity;
        this.recyclerView = recycler;
    }

    @Override
    public int getItemCount() {
        return items.size();
    }

    @Override
    public CentroSanitarioViewHolder onCreateViewHolder(ViewGroup viewGroup, int i) {
        View v = LayoutInflater.from(viewGroup.getContext())
                .inflate(R.layout.fragment_centro_sanitario_card, viewGroup, false);
        this.centroSanitarioViewHolder = new CentroSanitarioViewHolder(v);
        return centroSanitarioViewHolder;
    }

    @Override
    public void onBindViewHolder(CentroSanitarioViewHolder viewHolder, int i) {
        viewHolder.setOnClickListeners();
        viewHolder.nombreCentroSanitario.setText(items.get(i).getNombreCentroSanitario());
        viewHolder.telefonoCentroSanitario.setText(items.get(i).getTelefonoCentroSanitario());
        viewHolder.tipoCentroSanitarioCentroSanitario.setText(items.get(i).getTipoCentroSanitario().get(0));
        viewHolder.direccionCentroSanitario.setText(items.get(i).getDireccionCentroSanitario());
        this.centroSanitarioViewHolder.setCentroSanitario(items.get(i));
    }
}
