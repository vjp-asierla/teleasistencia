import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListaUsersComponent} from './componentes/user/lista-users/lista-users.component';
import {ItemUserComponent} from './componentes/user/item-user/item-user.component';
import {DetallesUserComponent} from './componentes/user/detalles-user/detalles-user.component';
import {NuevoUserComponent} from './componentes/user/nuevo-user/nuevo-user.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './componentes/home/home.component';
import {CargaUserService} from './servicios/carga-user.service';
import {ItemClasificacionAlarmaComponent} from './componentes/alarma/clasificacion-alarma/item-clasificacion-alarma/item-clasificacion-alarma.component';
import {DetallesClasificacionAlarmaComponent} from './componentes/alarma/clasificacion-alarma/detalles-clasificacion-alarma/detalles-clasificacion-alarma.component';
import {NuevaClasificacionAlarmaComponent} from './componentes/alarma/clasificacion-alarma/nueva-clasificacion-alarma/nueva-clasificacion-alarma.component';
import {ListaClasificacionesAlarmasComponent} from './componentes/alarma/clasificacion-alarma/lista-clasificaciones-alarmas/lista-clasificaciones-alarmas.component';
import {ListaTiposCentrosSanitariosComponent} from './componentes/centro-sanitario/tipo-centro-sanitario/lista-tipos-centros-sanitarios/lista-tipos-centros-sanitarios.component';
import {ItemTipoCentroSanitarioComponent} from './componentes/centro-sanitario/tipo-centro-sanitario/item-tipo-centro-sanitario/item-tipo-centro-sanitario.component';
import {DetallesTipoCentroSanitarioComponent} from './componentes/centro-sanitario/tipo-centro-sanitario/detalles-tipo-centro-sanitario/detalles-tipo-centro-sanitario.component';
import {NuevoTipoCentroSanitarioComponent} from './componentes/centro-sanitario/tipo-centro-sanitario/nuevo-tipo-centro-sanitario/nuevo-tipo-centro-sanitario.component';
import {CargaClasificacionAlarmaService} from './servicios/carga-clasificacion-alarma.service';
import {CargaTipoCentroSanitarioService} from './servicios/carga-tipo-centro-sanitario.service';
import {ListaTiposRecursosComunitariosComponent} from './componentes/recurso-comunitario/tipo-recurso-comunitario/lista-tipos-recursos-comunitarios/lista-tipos-recursos-comunitarios.component';
import {ItemTipoRecursoComunitarioComponent} from './componentes/recurso-comunitario/tipo-recurso-comunitario/item-tipo-recurso-comunitario/item-tipo-recurso-comunitario.component';
import {DetallesTipoRecursoComunitarioComponent} from './componentes/recurso-comunitario/tipo-recurso-comunitario/detalles-tipo-recurso-comunitario/detalles-tipo-recurso-comunitario.component';
import {NuevoTipoRecursoComunitarioComponent} from './componentes/recurso-comunitario/tipo-recurso-comunitario/nuevo-tipo-recurso-comunitario/nuevo-tipo-recurso-comunitario.component';
import {CargaTipoRecursoComunitarioService} from './servicios/carga-tipo-recurso-comunitario.service';
import {ListaTiposModalidadesPacientesComponent} from './componentes/modalidad-paciente/lista-tipos-modalidades-pacientes/lista-tipos-modalidades-pacientes.component';
import {ItemTipoModalidadPacienteComponent} from './componentes/modalidad-paciente/item-tipo-modalidad-paciente/item-tipo-modalidad-paciente.component';
import {DetallesTipoModalidadPacienteComponent} from './componentes/modalidad-paciente/detalles-tipo-modalidad-paciente/detalles-tipo-modalidad-paciente.component';
import {NuevoTipoModalidadPacienteComponent} from './componentes/modalidad-paciente/nuevo-tipo-modalidad-paciente/nuevo-tipo-modalidad-paciente.component';
import {CargaTipoModalidadPacienteService} from './servicios/carga-tipo-modalidad-paciente.service';
import {ListaTiposAlarmasComponent} from './componentes/alarma/lista-tipos-alarmas/lista-tipos-alarmas.component';
import {ItemTipoAlarmaComponent} from './componentes/alarma/item-tipo-alarma/item-tipo-alarma.component';
import {DetallesTipoAlarmaComponent} from './componentes/alarma/detalles-tipo-alarma/detalles-tipo-alarma.component';
import {NuevoTipoAlarmaComponent} from './componentes/alarma/nuevo-tipo-alarma/nuevo-tipo-alarma.component';
import {CargaTipoAlarmaService} from './servicios/carga-tipo-alarma.service';
import {ListaCentrosSanitariosComponent} from './componentes/centro-sanitario/lista-centros-sanitarios/lista-centros-sanitarios.component';
import {ItemCentroSanitarioComponent} from './componentes/centro-sanitario/item-centro-sanitario/item-centro-sanitario.component';
import {DetallesCentroSanitarioComponent} from './componentes/centro-sanitario/detalles-centro-sanitario/detalles-centro-sanitario.component';
import {NuevoCentroSanitarioComponent} from './componentes/centro-sanitario/nuevo-centro-sanitario/nuevo-centro-sanitario.component';
import {ListaRecursosComunitariosComponent} from './componentes/recurso-comunitario/lista-recursos-comunitarios/lista-recursos-comunitarios.component';
import {ItemResursoComunitarioComponent} from './componentes/recurso-comunitario/item-resurso-comunitario/item-resurso-comunitario.component';
import {DetallesRecursoComunitarioComponent} from './componentes/recurso-comunitario/detalles-recurso-comunitario/detalles-recurso-comunitario.component';
import {NuevoRecursoComunitarioComponent} from './componentes/recurso-comunitario/nuevo-recurso-comunitario/nuevo-recurso-comunitario.component';
import {ListaPersonasComponent} from './componentes/persona/lista-personas/lista-personas.component';
import {ItemPersonaComponent} from './componentes/persona/item-persona/item-persona.component';
import {DetallesPersonaComponent} from './componentes/persona/detalles-persona/detalles-persona.component';
import {NuevaPersonaComponent} from './componentes/persona/nueva-persona/nueva-persona.component';
import {ListaDireccionesComponent} from './componentes/direccion/lista-direcciones/lista-direcciones.component';
import {ItemDireccionComponent} from './componentes/direccion/item-direccion/item-direccion.component';
import {DetallesDireccionComponent} from './componentes/direccion/detalles-direccion/detalles-direccion.component';
import {NuevaDireccionComponent} from './componentes/direccion/nueva-direccion/nueva-direccion.component';
import {CargaDireccionService} from './servicios/carga-direccion.service';
import {CargaCentroSanitarioService} from './servicios/carga-centro-sanitario.service';
import {CargaPersonaService} from './servicios/carga-persona.service';
import {CargaRecursoComunitarioService} from './servicios/carga-recurso-comunitario.service';
import {PantallaLoginComponent} from './componentes/login/pantalla-login/pantalla-login.component';
import {HeaderComponent} from './componentes/header/header.component';
import {FooterComponent} from './componentes/footer/footer.component';
import {BotonesLoginComponent} from './componentes/login/botones-login/botones-login.component';
import { BorrarDireccionComponent } from './componentes/direccion/borrar-direccion/borrar-direccion.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsersComponent,
    ItemUserComponent,
    DetallesUserComponent,
    NuevoUserComponent,
    HomeComponent,
    ItemClasificacionAlarmaComponent,
    DetallesClasificacionAlarmaComponent,
    NuevaClasificacionAlarmaComponent,
    ListaClasificacionesAlarmasComponent,
    ListaTiposCentrosSanitariosComponent,
    ItemTipoCentroSanitarioComponent,
    DetallesTipoCentroSanitarioComponent,
    NuevoTipoCentroSanitarioComponent,
    ListaTiposRecursosComunitariosComponent,
    ItemTipoRecursoComunitarioComponent,
    DetallesTipoRecursoComunitarioComponent,
    NuevoTipoRecursoComunitarioComponent,
    ListaTiposModalidadesPacientesComponent,
    ItemTipoModalidadPacienteComponent,
    DetallesTipoModalidadPacienteComponent,
    NuevoTipoModalidadPacienteComponent,
    ListaTiposAlarmasComponent,
    ItemTipoAlarmaComponent,
    DetallesTipoAlarmaComponent,
    NuevoTipoAlarmaComponent,
    ListaCentrosSanitariosComponent,
    ItemCentroSanitarioComponent,
    DetallesCentroSanitarioComponent,
    NuevoCentroSanitarioComponent,
    ListaRecursosComunitariosComponent,
    ItemResursoComunitarioComponent,
    DetallesRecursoComunitarioComponent,
    NuevoRecursoComunitarioComponent,
    ListaPersonasComponent,
    ItemPersonaComponent,
    DetallesPersonaComponent,
    NuevaPersonaComponent,
    ListaDireccionesComponent,
    ItemDireccionComponent,
    DetallesDireccionComponent,
    NuevaDireccionComponent,
    PantallaLoginComponent,
    HeaderComponent,
    FooterComponent,
    BotonesLoginComponent,
    BorrarDireccionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
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
    Title
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
