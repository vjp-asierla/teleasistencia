package com.example.teleappsistencia.ui.tipo_centro_sanitario;

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

import java.util.List;

public class TipoCentroSanitarioAdapter extends RecyclerView.Adapter<TipoCentroSanitarioAdapter.TipoCentroSanitarioViewHolder> {
    private List<TipoCentroSanitario> items;
    private Activity activity;
    private RecyclerView recyclerView;
    private TipoCentroSanitarioViewHolder tipoCentroSanitarioViewHolder;

    public static class TipoCentroSanitarioViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener {

        // Campos respectivos de un item.
        public Context context;
        public TextView nombreTipoCentroSanitario;
        private ImageButton imageButtonModificarTipoCentroSanitario;
        private ImageButton imageButtonVerTipoCentroSanitario;
        private ImageButton imageButtonBorrarTipoCentroSanitario;
        private TipoCentroSanitario tipoCentroSanitario;

        public void setTipoCentroSanitario(TipoCentroSanitario tipoCentroSanitario) {
            this.tipoCentroSanitario = tipoCentroSanitario;
        }

        public TipoCentroSanitarioViewHolder(View v) {
            super(v);
            this.context = v.getContext();
            this.nombreTipoCentroSanitario = (TextView) v.findViewById(R.id.nombreTipoCentroSanitario);
            this.imageButtonModificarTipoCentroSanitario = (ImageButton) v.findViewById(R.id.imageButtonModificarTipoCentroSanitario);
            this.imageButtonVerTipoCentroSanitario = (ImageButton) v.findViewById(R.id.imageButtonVerTipoCentroSanitario);
            this.imageButtonBorrarTipoCentroSanitario = (ImageButton) v.findViewById(R.id.imageButtonBorrarTipoCentroSanitario);
        }

        public void setOnClickListeners() {
            this.imageButtonModificarTipoCentroSanitario.setOnClickListener(this);
            this.imageButtonVerTipoCentroSanitario.setOnClickListener(this);
            this.imageButtonBorrarTipoCentroSanitario.setOnClickListener(this);
        }

        @Override
        public void onClick(View view) {
            switch (view.getId()) {
                case R.id.imageButtonModificarTipoCentroSanitario:
                    // Llamar al Fragment FragmentModificarTipoCentroSanitario.
                    AppCompatActivity activityModificar = (AppCompatActivity) view.getContext();
                    FragmentModificarTipoCentroSanitario fm = FragmentModificarTipoCentroSanitario.newInstance(this.tipoCentroSanitario);
                    activityModificar.getSupportFragmentManager().beginTransaction().replace(R.id.main_fragment, fm).addToBackStack(null).commit();
                    break;
                case R.id.imageButtonVerTipoCentroSanitario:
                    // Llamar al Fragment ConsultarTipoCentroSanitario.
                    AppCompatActivity activityVer = (AppCompatActivity) view.getContext();
                    ConsultarTipoCentroSanitario fc = ConsultarTipoCentroSanitario.newInstance(this.tipoCentroSanitario);
                    activityVer.getSupportFragmentManager().beginTransaction().replace(R.id.main_fragment, fc).addToBackStack(null).commit();
                    break;
                case R.id.imageButtonBorrarTipoCentroSanitario:
                    break;
            }
        }
    }

    public TipoCentroSanitarioAdapter(List<TipoCentroSanitario> items, Activity activity, RecyclerView recycler) {
        this.items = items;
        this.activity = activity;
        this.recyclerView = recycler;
    }

    @Override
    public int getItemCount() {
        return items.size();
    }

    @Override
    public TipoCentroSanitarioViewHolder onCreateViewHolder(ViewGroup viewGroup, int i) {
        View v = LayoutInflater.from(viewGroup.getContext())
                .inflate(R.layout.fragment_tipo_centro_sanitario_card, viewGroup, false);
        this.tipoCentroSanitarioViewHolder = new TipoCentroSanitarioViewHolder(v);
        return tipoCentroSanitarioViewHolder;
    }

    @Override
    public void onBindViewHolder(TipoCentroSanitarioViewHolder viewHolder, int i) {
        viewHolder.setOnClickListeners();
        viewHolder.nombreTipoCentroSanitario.setText(items.get(i).getNombreTipoCentroSanitario());
        this.tipoCentroSanitarioViewHolder.setTipoCentroSanitario(items.get(i));
    }
}
