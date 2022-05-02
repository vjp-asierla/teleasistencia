package com.example.teleappsistencia.fragments.otrosFragments;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.example.teleappsistencia.R;
import com.example.teleappsistencia.api.clases.Alarma;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link InfoGestionAlarmaFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class InfoGestionAlarmaFragment extends Fragment {

    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_ALARMA = "Alarma";
    private Alarma alarma;

    public InfoGestionAlarmaFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @return A new instance of fragment InfoGestionAlarmaFragment.
     */
    public static InfoGestionAlarmaFragment newInstance(Alarma alarma) {
        InfoGestionAlarmaFragment fragment = new InfoGestionAlarmaFragment();
        Bundle args = new Bundle();
        args.putSerializable(ARG_ALARMA, alarma);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            alarma = (Alarma) getArguments().getSerializable(ARG_ALARMA);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_info_gestion_alarma, container, false);
        return view;
    }
}