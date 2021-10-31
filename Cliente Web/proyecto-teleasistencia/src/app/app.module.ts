import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListaUsersComponent} from './componentes/lista-users/lista-users.component';
import {ItemUserComponent} from './componentes/item-user/item-user.component';
import {DetallesUserComponent} from './componentes/detalles-user/detalles-user.component';
import {NuevoUserComponent} from './componentes/nuevo-user/nuevo-user.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './componentes/home/home.component';
import {CargaUserService} from './servicios/carga-user.service';
import {ItemClasificacionAlarmaComponent} from './componentes/item-clasificacion-alarma/item-clasificacion-alarma.component';
import {DetallesClasificacionAlarmaComponent} from './componentes/detalles-clasificacion-alarma/detalles-clasificacion-alarma.component';
import {NuevaClasificacionAlarmaComponent} from './componentes/nueva-clasificacion-alarma/nueva-clasificacion-alarma.component';
import {ListaClasificacionesAlarmasComponent} from './componentes/lista-clasificaciones-alarmas/lista-clasificaciones-alarmas.component';
import {ListaTiposCentrosSanitariosComponent} from './componentes/lista-tipos-centros-sanitarios/lista-tipos-centros-sanitarios.component';
import {ItemTipoCentroSanitarioComponent} from './componentes/item-tipo-centro-sanitario/item-tipo-centro-sanitario.component';
import {DetallesTipoCentroSanitarioComponent} from './componentes/detalles-tipo-centro-sanitario/detalles-tipo-centro-sanitario.component';
import {NuevoTipoCentroSanitarioComponent} from './componentes/nuevo-tipo-centro-sanitario/nuevo-tipo-centro-sanitario.component';
import {CargaClasificacionAlarmaService} from './servicios/carga-clasificacion-alarma.service';
import {CargaTipoCentroSanitarioService} from './servicios/carga-tipo-centro-sanitario.service';
import {ListaTiposRecursosComunitariosComponent} from './componentes/lista-tipos-recursos-comunitarios/lista-tipos-recursos-comunitarios.component';
import {ItemTipoRecursoComunitarioComponent} from './componentes/item-tipo-recurso-comunitario/item-tipo-recurso-comunitario.component';
import {DetallesTipoRecursoComunitarioComponent} from './componentes/detalles-tipo-recurso-comunitario/detalles-tipo-recurso-comunitario.component';
import {NuevoTipoRecursoComunitarioComponent} from './componentes/nuevo-tipo-recurso-comunitario/nuevo-tipo-recurso-comunitario.component';
import {CargaTipoRecursoComunitarioService} from './servicios/carga-tipo-recurso-comunitario.service';
import { ListaTiposModalidadesPacientesComponent } from './componentes/lista-tipos-modalidades-pacientes/lista-tipos-modalidades-pacientes.component';
import { ItemTipoModalidadPacienteComponent } from './componentes/item-tipo-modalidad-paciente/item-tipo-modalidad-paciente.component';
import { DetallesTipoModalidadPacienteComponent } from './componentes/detalles-tipo-modalidad-paciente/detalles-tipo-modalidad-paciente.component';
import { NuevoTipoModalidadPacienteComponent } from './componentes/nuevo-tipo-modalidad-paciente/nuevo-tipo-modalidad-paciente.component';
import {CargaTipoModalidadPacienteService} from './servicios/carga-tipo-modalidad-paciente.service';
import { ListaTiposAlarmasComponent } from './componentes/lista-tipos-alarmas/lista-tipos-alarmas.component';
import { ItemTipoAlarmaComponent } from './componentes/item-tipo-alarma/item-tipo-alarma.component';
import { DetallesTipoAlarmaComponent } from './componentes/detalles-tipo-alarma/detalles-tipo-alarma.component';
import { NuevoTipoAlarmaComponent } from './componentes/nuevo-tipo-alarma/nuevo-tipo-alarma.component';
import {CargaTipoAlarmaService} from './servicios/carga-tipo-alarma.service';
import { ListaCentrosSanitariosComponent } from './componentes/lista-centros-sanitarios/lista-centros-sanitarios.component';
import { ItemCentroSanitarioComponent } from './componentes/item-centro-sanitario/item-centro-sanitario.component';
import { DetallesCentroSanitarioComponent } from './componentes/detalles-centro-sanitario/detalles-centro-sanitario.component';
import { NuevoCentroSanitarioComponent } from './componentes/nuevo-centro-sanitario/nuevo-centro-sanitario.component';
import { ListaRecursosComunitariosComponent } from './componentes/lista-recursos-comunitarios/lista-recursos-comunitarios.component';
import { ItemResursoComunitarioComponent } from './componentes/item-resurso-comunitario/item-resurso-comunitario.component';
import { DetallesRecursoComunitarioComponent } from './componentes/detalles-recurso-comunitario/detalles-recurso-comunitario.component';
import { NuevoRecursoComunitarioComponent } from './componentes/nuevo-recurso-comunitario/nuevo-recurso-comunitario.component';
import { ListaPersonasComponent } from './componentes/lista-personas/lista-personas.component';
import { ItemPersonaComponent } from './componentes/item-persona/item-persona.component';
import { DetallesPersonaComponent } from './componentes/detalles-persona/detalles-persona.component';
import { NuevaPersonaComponent } from './componentes/nueva-persona/nueva-persona.component';
import { ListaDireccionesComponent } from './componentes/lista-direcciones/lista-direcciones.component';
import { ItemDireccionComponent } from './componentes/item-direccion/item-direccion.component';
import { DetallesDireccionComponent } from './componentes/detalles-direccion/detalles-direccion.component';
import { NuevaDireccionComponent } from './componentes/nueva-direccion/nueva-direccion.component';
import {CargaDireccionService} from './servicios/carga-direccion.service';
import {CargaCentroSanitarioService} from './servicios/carga-centro-sanitario.service';
import {CargaPersonaService} from './servicios/carga-persona.service';
import {CargaRecursoComunitarioService} from './servicios/carga-recurso-comunitario.service';

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
    NuevaDireccionComponent
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
