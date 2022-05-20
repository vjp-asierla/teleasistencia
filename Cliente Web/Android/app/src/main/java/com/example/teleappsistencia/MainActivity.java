package com.example.teleappsistencia;

import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.view.Menu;
import android.widget.ExpandableListView;
import com.andremion.counterfab.CounterFab;
import com.example.teleappsistencia.api.clases.Alarma;
import com.example.teleappsistencia.api.clases.Token;
import com.example.teleappsistencia.fragments.alarma.InsertarAlarmaFragment;
import com.example.teleappsistencia.fragments.alarma.ListarAlarmasFragment;
import com.example.teleappsistencia.fragments.centroSanitarioEnAlarma.InsertarCentroSanitarioEnAlarmaFragment;
import com.example.teleappsistencia.fragments.centroSanitarioEnAlarma.ListarCentrosSanitariosEnAlarmaFragment;
import com.example.teleappsistencia.fragments.clasificacionAlarma.InsertarClasificacionAlarmaFragment;
import com.example.teleappsistencia.fragments.clasificacionAlarma.ListarClasificacionAlarmaFragment;
import com.example.teleappsistencia.fragments.gestionAlarmasFragments.AlarmAlertFragment;
import com.example.teleappsistencia.fragments.personaContactoEnAlarma.InsertarPersonaContactoEnAlarmaFragment;
import com.example.teleappsistencia.fragments.personaContactoEnAlarma.ListarPersonasContactoEnAlarmaFragment;
import com.example.teleappsistencia.fragments.recursosComunitariosEnAlarma.InsertarRecursosComunitariosEnAlarmaFragment;
import com.example.teleappsistencia.fragments.recursosComunitariosEnAlarma.ListarRecursosComunitariosEnAlarmaFragment;
import com.example.teleappsistencia.fragments.tipoAlarma.InsertarTipoAlarmaFragment;
import com.example.teleappsistencia.fragments.tipoAlarma.ListarTipoAlarmaFragment;
import com.example.teleappsistencia.utilidad.Utilidad;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.navigation.NavigationView;
import androidx.appcompat.app.ActionBarDrawerToggle;
import androidx.appcompat.widget.Toolbar;
import androidx.core.view.GravityCompat;
import androidx.fragment.app.DialogFragment;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.appcompat.app.AppCompatActivity;
import com.google.android.material.snackbar.Snackbar;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class MainActivity extends AppCompatActivity implements NavigationView.OnNavigationItemSelectedListener {

    private ExpandableListAdapter expandableListAdapter;
    private ExpandableListView expandableListView;
    private List<MenuModel> headerList = new ArrayList<>();
    private HashMap<MenuModel, List<MenuModel>> childList = new HashMap<>();
    private CounterFab counterFab;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        this.counterFab = (CounterFab) findViewById(R.id.fab);

        this.counterFab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG).setAction("Action", null).show();
            }
        });

        //Iniciamos el servicio de notificación de Alarmas
        Utilidad.iniciarEscuchaAlarmas(this);

        //Iniciamos el token
        Token.cargarToken("admin", "admin");

        // Realizo una petición a la API para cargar la cabecera del menu con los datos del usuario logueado.
        //loadMenuHeader();

        FloatingActionButton fab = findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });

        expandableListView = findViewById(R.id.expandableListView);
        prepareMenuData();
        populateExpandableList();

        DrawerLayout drawer = findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        drawer.addDrawerListener(toggle);
        toggle.syncState();

        NavigationView navigationView = findViewById(R.id.nav_view);
        navigationView.setNavigationItemSelectedListener(this);
    }

    @Override
    public void onBackPressed() {
        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        if (drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START);
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }
        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);

        return super.onOptionsItemSelected(item);
    }

    @Override
    public boolean onNavigationItemSelected(MenuItem item) {
        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        drawer.closeDrawer(GravityCompat.START);
        return true;
    }

    private void prepareMenuData() {
        String[] childNames = {getResources().getString(R.string.insertar), getResources().getString(R.string.listar)};
        List<MenuModel> childModelsList;
        MenuModel menuModel;

        // Menu Tipo Alarma.
        childModelsList = new ArrayList<>();
        menuModel = new MenuModel(getResources().getString(R.string.menu_tipo_alarma), true, true, null);
        headerList.add(menuModel);
        childModelsList.add(new MenuModel(childNames[0], false, false, new InsertarTipoAlarmaFragment()));
        childModelsList.add(new MenuModel(childNames[1], false, false, new ListarTipoAlarmaFragment()));

        if (menuModel.hasChildren()) {
            childList.put(menuModel, childModelsList);
        } else{
            childList.put(menuModel, null);
        }

        // Menu Clasificacion Alarma.
        childModelsList = new ArrayList<>();
        menuModel = new MenuModel(getResources().getString(R.string.menu_clasificacion_alarma), true, true, null);
        headerList.add(menuModel);
        childModelsList.add(new MenuModel(childNames[0], false, false, new InsertarClasificacionAlarmaFragment()));
        childModelsList.add(new MenuModel(childNames[1], false, false, new ListarClasificacionAlarmaFragment()));

        if (menuModel.hasChildren()) {
            childList.put(menuModel, childModelsList);
        } else{
            childList.put(menuModel, null);
        }

        // Menu Alarma.
        childModelsList = new ArrayList<>();
        menuModel = new MenuModel(getResources().getString(R.string.menu_alarma), true, true, null);
        headerList.add(menuModel);
        childModelsList.add(new MenuModel(childNames[0], false, false, new InsertarAlarmaFragment()));
        childModelsList.add(new MenuModel(childNames[1], false, false, new ListarAlarmasFragment()));

        if (menuModel.hasChildren()) {
            childList.put(menuModel, childModelsList);
        } else{
            childList.put(menuModel, null);
        }

        // Menu Centro Sanitario en Alarma.
        childModelsList = new ArrayList<>();
        menuModel = new MenuModel(getResources().getString(R.string.menu_centro_sanitario_en_alarma), true, true, null);
        headerList.add(menuModel);
        childModelsList.add(new MenuModel(childNames[0], false, false, new InsertarCentroSanitarioEnAlarmaFragment()));
        childModelsList.add(new MenuModel(childNames[1], false, false, new ListarCentrosSanitariosEnAlarmaFragment()));

        if (menuModel.hasChildren()) {
            childList.put(menuModel, childModelsList);
        } else{
            childList.put(menuModel, null);
        }

        // Menu Recursos Comunitarios en Alarma.
        childModelsList = new ArrayList<>();
        menuModel = new MenuModel(getResources().getString(R.string.menu_recursos_comunitarios_en_alarma), true, true, null);
        headerList.add(menuModel);
        childModelsList.add(new MenuModel(childNames[0], false, false, new InsertarRecursosComunitariosEnAlarmaFragment()));
        childModelsList.add(new MenuModel(childNames[1], false, false, new ListarRecursosComunitariosEnAlarmaFragment()));

        if (menuModel.hasChildren()) {
            childList.put(menuModel, childModelsList);
        } else{
            childList.put(menuModel, null);
        }

        // Menu Persona de contacto en alarma.
        childModelsList = new ArrayList<>();
        menuModel = new MenuModel(getResources().getString(R.string.menu_persona_de_contacto_en_alarma), true, true, null);
        headerList.add(menuModel);
        childModelsList.add(new MenuModel(childNames[0], false, false, new InsertarPersonaContactoEnAlarmaFragment()));
        childModelsList.add(new MenuModel(childNames[1], false, false, new ListarPersonasContactoEnAlarmaFragment()));

        if (menuModel.hasChildren()) {
            childList.put(menuModel, childModelsList);
        } else{
            childList.put(menuModel, null);
        }

    }

    private void populateExpandableList() {

        expandableListAdapter = new ExpandableListAdapter(this, headerList, childList);
        expandableListView.setAdapter(expandableListAdapter);

        expandableListView.setOnGroupClickListener(new ExpandableListView.OnGroupClickListener() {
            @Override
            public boolean onGroupClick(ExpandableListView parent, View v, int groupPosition, long id) {

                if (headerList.get(groupPosition).isGroup()) {
                    if (!headerList.get(groupPosition).hasChildren()) {
                    }
                }

                return false;
            }
        });

        expandableListView.setOnChildClickListener(new ExpandableListView.OnChildClickListener() {
            @Override
            public boolean onChildClick(ExpandableListView parent, View v, int groupPosition, int childPosition, long id) {

                if (childList.get(headerList.get(groupPosition)) != null) {
                    MenuModel model = childList.get(headerList.get(groupPosition)).get(childPosition);

                    getSupportFragmentManager().beginTransaction()
                            .replace(R.id.main_fragment, model.getFragment())
                            .addToBackStack(null)
                            .commit();
                }
                DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
                if (drawer.isDrawerOpen(GravityCompat.START)) {
                    drawer.closeDrawer(GravityCompat.START);
                }
                return false;
            }
        });
    }

    public void incrementarBadge(){
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                counterFab.increase();
            }
        });
    }

    public void decrementarBadge(){
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                counterFab.decrease();
            }
        });
    }

    public void crearAlertDialog(Alarma alarmaNotificada){
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                AlarmAlertFragment aAF = AlarmAlertFragment.newInstance(alarmaNotificada);
                aAF.setStyle(DialogFragment.STYLE_NO_TITLE, R.style.AppTheme_Dialog_MyDialogTheme);
                aAF.show(getSupportFragmentManager(), null);
            }
        });
    }

    public void ocultarFAB(){
        this.counterFab.setVisibility(View.INVISIBLE);
    }

    public void mostrarFAB(){
        this.counterFab.setVisibility(View.VISIBLE);
    }

}