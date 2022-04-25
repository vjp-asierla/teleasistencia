import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListaUsersComponent} from './componentes/user/lista-users/lista-users.component';
import {ItemUserComponent} from './componentes/user/item-user/item-user.component';
import {ModificarUserComponent} from './componentes/user/modificar-user/modificar-user.component';
import {CrearUserComponent} from './componentes/user/crear-user/crear-user.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './componentes/home/home.component';
import {CargaUserService} from './servicios/carga-user.service';
import {ItemClasificacionAlarmaComponent} from './componentes/clasificacion-alarma/item-clasificacion-alarma/item-clasificacion-alarma.component';
import {ModificarClasificacionAlarmaComponent} from './componentes/clasificacion-alarma/modificar-clasificacion-alarma/modificar-clasificacion-alarma.component';
import {CrearClasificacionAlarmaComponent} from './componentes/clasificacion-alarma/crear-clasificacion-alarma/crear-clasificacion-alarma.component';
import {ListaClasificacionesAlarmasComponent} from './componentes/clasificacion-alarma/lista-clasificaciones-alarmas/lista-clasificaciones-alarmas.component';
import {ListaTiposCentrosSanitariosComponent} from './componentes/tipo-centro-sanitario/lista-tipos-centros-sanitarios/lista-tipos-centros-sanitarios.component';
import {ItemTipoCentroSanitarioComponent} from './componentes/tipo-centro-sanitario/item-tipo-centro-sanitario/item-tipo-centro-sanitario.component';
import {ModificarTipoCentroSanitarioComponent} from './componentes/tipo-centro-sanitario/modificar-tipo-centro-sanitario/modificar-tipo-centro-sanitario.component';
import {CrearTipoCentroSanitarioComponent} from './componentes/tipo-centro-sanitario/crear-tipo-centro-sanitario/crear-tipo-centro-sanitario.component';
import {CargaClasificacionAlarmaService} from './servicios/carga-clasificacion-alarma.service';
import {CargaTipoCentroSanitarioService} from './servicios/carga-tipo-centro-sanitario.service';
import {ListaTiposRecursosComunitariosComponent} from './componentes/tipo-recurso-comunitario/lista-tipos-recursos-comunitarios/lista-tipos-recursos-comunitarios.component';
import {ItemTipoRecursoComunitarioComponent} from './componentes/tipo-recurso-comunitario/item-tipo-recurso-comunitario/item-tipo-recurso-comunitario.component';
import {ModificarTipoRecursoComunitarioComponent} from './componentes/tipo-recurso-comunitario/modificar-tipo-recurso-comunitario/modificar-tipo-recurso-comunitario.component';
import {CrearTipoRecursoComunitarioComponent} from './componentes/tipo-recurso-comunitario/crear-tipo-recurso-comunitario/crear-tipo-recurso-comunitario.component';
import {CargaTipoRecursoComunitarioService} from './servicios/carga-tipo-recurso-comunitario.service';
import {ListaTiposModalidadesPacientesComponent} from './componentes/tipo-modalidad-paciente/lista-tipos-modalidades-pacientes/lista-tipos-modalidades-pacientes.component';
import {ItemTipoModalidadPacienteComponent} from './componentes/tipo-modalidad-paciente/item-tipo-modalidad-paciente/item-tipo-modalidad-paciente.component';
import {ModificarTipoModalidadPacienteComponent} from './componentes/tipo-modalidad-paciente/modificar-tipo-modalidad-paciente/modificar-tipo-modalidad-paciente.component';
import {CrearTipoModalidadPacienteComponent} from './componentes/tipo-modalidad-paciente/crear-tipo-modalidad-paciente/crear-tipo-modalidad-paciente.component';
import {CargaTipoModalidadPacienteService} from './servicios/carga-tipo-modalidad-paciente.service';
import {ListaTiposAlarmasComponent} from './componentes/tipo-alarma/lista-tipos-alarmas/lista-tipos-alarmas.component';
import {ItemTipoAlarmaComponent} from './componentes/tipo-alarma/item-tipo-alarma/item-tipo-alarma.component';
import {ModificarTipoAlarmaComponent} from './componentes/tipo-alarma/modificar-tipo-alarma/modificar-tipo-alarma.component';
import {CrearTipoAlarmaComponent} from './componentes/tipo-alarma/crear-tipo-alarma/crear-tipo-alarma.component';
import {CargaTipoAlarmaService} from './servicios/carga-tipo-alarma.service';
import {ListaCentrosSanitariosComponent} from './componentes/centro-sanitario/lista-centros-sanitarios/lista-centros-sanitarios.component';
import {ItemCentroSanitarioComponent} from './componentes/centro-sanitario/item-centro-sanitario/item-centro-sanitario.component';
import {ModificarCentroSanitarioComponent} from './componentes/centro-sanitario/modificar-centro-sanitario/modificar-centro-sanitario.component';
import {CrearCentroSanitarioComponent} from './componentes/centro-sanitario/crear-centro-sanitario/crear-centro-sanitario.component';
import {ListaRecursosComunitariosComponent} from './componentes/recurso-comunitario/lista-recursos-comunitarios/lista-recursos-comunitarios.component';
import {ItemResursoComunitarioComponent} from './componentes/recurso-comunitario/item-resurso-comunitario/item-resurso-comunitario.component';
import {ModificarRecursoComunitarioComponent} from './componentes/recurso-comunitario/modificar-recurso-comunitario/modificar-recurso-comunitario.component';
import {CrearRecursoComunitarioComponent} from './componentes/recurso-comunitario/crear-recurso-comunitario/crear-recurso-comunitario.component';
import {ListaPersonasComponent} from './componentes/persona/lista-personas/lista-personas.component';
import {ItemPersonaComponent} from './componentes/persona/item-persona/item-persona.component';
import {ModificarPersonaComponent} from './componentes/persona/modificar-persona/modificar-persona.component';
import {CrearPersonaComponent} from './componentes/persona/crear-persona/crear-persona.component';
import {ListaDireccionesComponent} from './componentes/direccion/lista-direcciones/lista-direcciones.component';
import {ItemDireccionComponent} from './componentes/direccion/item-direccion/item-direccion.component';
import {ModificarDireccionComponent} from './componentes/direccion/modificar-direccion/modificar-direccion.component';
import {CrearDireccionComponent} from './componentes/direccion/crear-direccion/crear-direccion.component';
import {CargaDireccionService} from './servicios/carga-direccion.service';
import {CargaCentroSanitarioService} from './servicios/carga-centro-sanitario.service';
import {CargaPersonaService} from './servicios/carga-persona.service';
import {CargaRecursoComunitarioService} from './servicios/carga-recurso-comunitario.service';
import {PantallaLoginComponent} from './componentes/pantalla-login/pantalla-login.component';
import {HeaderComponent} from './componentes/header/header.component';
import {FooterComponent} from './componentes/footer/footer.component';
import {BotonesLoginComponent} from './componentes/botones-login/botones-login.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {OrdenacionTablasService} from "./servicios/ordenacion-tablas.service";
import { FiltroBusquedaPipe } from './pipes/filtro-busqueda.pipe';
import { ListaTiposViviendaComponent } from './componentes/tipo-vivienda/lista-tipos-vivienda/lista-tipos-vivienda.component';
import { ListaTiposSituacionComponent } from './componentes/tipo-situacion/lista-tipos-situacion/lista-tipos-situacion.component';
import { ItemTipoViviendaComponent } from './componentes/tipo-vivienda/item-tipo-vivienda/item-tipo-vivienda.component';
import { CrearViviendaComponent } from './componentes/tipo-vivienda/crear-tipo-vivienda/crear-vivienda.component';
import { ModificarTipoViviendaComponent } from './componentes/tipo-vivienda/modificar-tipo-vivienda/modificar-tipo-vivienda.component';
import {CargaViviendaService} from "./servicios/carga-vivienda.service";
import { ItemTipoSituacionComponent } from './componentes/tipo-situacion/item-tipo-situacion/item-tipo-situacion.component';
import { CrearTipoSituacionComponent } from './componentes/tipo-situacion/crear-tipo-situacion/crear-tipo-situacion.component';
import { ModificarTipoSituacionComponent } from './componentes/tipo-situacion/modificar-tipo-situacion/modificar-tipo-situacion.component';
import { BorrarTipoViviendaComponent } from './componentes/tipo-vivienda/borrar-tipo-vivienda/borrar-tipo-vivienda.component';
import { BorrarTipoSituacionComponent } from './componentes/tipo-situacion/borrar-tipo-situacion/borrar-tipo-situacion.component';
import {InterceptorService} from "./interceptors/interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    ListaUsersComponent,
    ItemUserComponent,
    ModificarUserComponent,
    CrearUserComponent,
    HomeComponent,
    ItemClasificacionAlarmaComponent,
    ModificarClasificacionAlarmaComponent,
    CrearClasificacionAlarmaComponent,
    ListaClasificacionesAlarmasComponent,
    ListaTiposCentrosSanitariosComponent,
    ItemTipoCentroSanitarioComponent,
    ModificarTipoCentroSanitarioComponent,
    CrearTipoCentroSanitarioComponent,
    ListaTiposRecursosComunitariosComponent,
    ItemTipoRecursoComunitarioComponent,
    ModificarTipoRecursoComunitarioComponent,
    CrearTipoRecursoComunitarioComponent,
    ListaTiposModalidadesPacientesComponent,
    ItemTipoModalidadPacienteComponent,
    ModificarTipoModalidadPacienteComponent,
    CrearTipoModalidadPacienteComponent,
    ListaTiposAlarmasComponent,
    ItemTipoAlarmaComponent,
    ModificarTipoAlarmaComponent,
    CrearTipoAlarmaComponent,
    ListaCentrosSanitariosComponent,
    ItemCentroSanitarioComponent,
    ModificarCentroSanitarioComponent,
    CrearCentroSanitarioComponent,
    ListaRecursosComunitariosComponent,
    ItemResursoComunitarioComponent,
    ModificarRecursoComunitarioComponent,
    CrearRecursoComunitarioComponent,
    ListaPersonasComponent,
    ItemPersonaComponent,
    ModificarPersonaComponent,
    CrearPersonaComponent,
    ListaDireccionesComponent,
    ItemDireccionComponent,
    ModificarDireccionComponent,
    CrearDireccionComponent,
    PantallaLoginComponent,
    HeaderComponent,
    FooterComponent,
    BotonesLoginComponent,
    FiltroBusquedaPipe,
    ListaTiposViviendaComponent,
    ListaTiposSituacionComponent,
    ItemTipoViviendaComponent,
    CrearViviendaComponent,
    ModificarTipoViviendaComponent,
    ItemTipoSituacionComponent,
    CrearTipoSituacionComponent,
    ModificarTipoSituacionComponent,
    BorrarTipoViviendaComponent,
    BorrarTipoSituacionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [
    CargaUserService,
    CargaClasificacionAlarmaService,
    CargaTipoCentroSanitarioService,
    CargaTipoRecursoComunitarioService,
    CargaTipoModalidadPacienteService,
    CargaTipoAlarmaService,
    CargaDireccionService,
    CargaCentroSanitarioService,
    CargaRecursoComunitarioService,
    CargaPersonaService,
    CargaViviendaService,
    Title,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
