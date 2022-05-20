package com.example.teleappsistencia.fragments.tipoAlarma;

import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;

import com.example.teleappsistencia.R;
import com.example.teleappsistencia.api.clases.ClasificacionAlarma;
import com.example.teleappsistencia.api.clases.TipoAlarma;
import com.example.teleappsistencia.api.clases.Token;
import com.example.teleappsistencia.api.servicios.APIService;
import com.example.teleappsistencia.fragments.clasificacionAlarma.ClasificacionAlarmaAdapter;
import com.example.teleappsistencia.utilidad.ClienteRetrofit;
import com.example.teleappsistencia.utilidad.Utilidad;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link ListarTipoAlarmaFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class ListarTipoAlarmaFragment extends Fragment {

    private List<TipoAlarma> lTipoAlarma;
    private RecyclerView recycler;
    private RecyclerView.Adapter adapter;
    private RecyclerView.LayoutManager lManager;

    public ListarTipoAlarmaFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @return A new instance of fragment ListarTipoAlarmaFragment.
     */

    public static ListarTipoAlarmaFragment newInstance() {
        ListarTipoAlarmaFragment fragment = new ListarTipoAlarmaFragment();
        Bundle args = new Bundle();
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        // Inflar layout
        View root = inflater.inflate(R.layout.fragment_listar_tipo_alarma, container, false);

        // Obtener el Recycler.
        recycler = (RecyclerView) root.findViewById(R.id.listRecyclerView);
        recycler.setHasFixedSize(true);

        // Usar un administrador para LinearLayout.
        lManager = new LinearLayoutManager(getContext());
        recycler.setLayoutManager(lManager);

        //Cargamos un adaptador vacío mientras se carga la lista desde la API REST
        this.lTipoAlarma = new ArrayList<>();
        adapter = new TipoAlarmaAdapter(lTipoAlarma);
        recycler.setAdapter(adapter);

        //Cargamos lista desde la API REST
        cargarLista();

        return root;
    }

    private void cargarLista(){
        APIService apiService = ClienteRetrofit.getInstance().getAPIService();
        Call<List<Object>> call = apiService.getTiposAlarma("Bearer " + Token.getToken().getAccess());
        call.enqueue(new Callback<List<Object>>() {
            @Override
            public void onResponse(Call<List<Object>> call, Response<List<Object>> response) {
                List<Object> lObjetos = response.body();
                lTipoAlarma = (ArrayList<TipoAlarma>) Utilidad.getObjeto(lObjetos, "ArrayList<TipoAlarma>");
                adapter = new TipoAlarmaAdapter(lTipoAlarma);
                recycler.setAdapter(adapter);
            }

            @Override
            public void onFailure(Call<List<Object>> call, Throwable t) {
                Toast.makeText(getContext(), "Error: "+t.getMessage(), Toast.LENGTH_LONG).show();
            }
        });
    }
}