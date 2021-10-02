import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListaUsersComponent} from './componentes/lista-users/lista-users.component';
import {ItemUserComponent} from './componentes/item-user/item-user.component';
import {DetallesUserComponent} from './componentes/detalles-user/detalles-user.component';
import {NuevoUserComponent} from './componentes/nuevo-user/nuevo-user.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from './componentes/home/home.component';
import {CargaUserService} from "./servicios/carga-user.service";
import {ItemClasificacionAlarmaComponent} from './componentes/item-clasificacion-alarma/item-clasificacion-alarma.component';
import {DetallesClasificacionAlarmaComponent} from './componentes/detalles-clasificacion-alarma/detalles-clasificacion-alarma.component';
import {NuevaClasificacionAlarmaComponent} from './componentes/nueva-clasificacion-alarma/nueva-clasificacion-alarma.component';
import {ListaClasificacionesAlarmasComponent} from './componentes/lista-clasificaciones-alarmas/lista-clasificaciones-alarmas.component';
import {ListaTiposCentrosSanitariosComponent} from './componentes/lista-tipos-centros-sanitarios/lista-tipos-centros-sanitarios.component';
import {ItemTipoCentroSanitarioComponent} from './componentes/item-tipo-centro-sanitario/item-tipo-centro-sanitario.component';
import {DetallesTipoCentroSanitarioComponent} from './componentes/detalles-tipo-centro-sanitario/detalles-tipo-centro-sanitario.component';
import {NuevoTipoCentroSanitarioComponent} from './componentes/nuevo-tipo-centro-sanitario/nuevo-tipo-centro-sanitario.component';
import {CargaClasificacionAlarmaService} from "./servicios/carga-clasificacion-alarma.service";
import {CargaTipoCentroSanitarioService} from "./servicios/carga-tipo-centro-sanitario.service";
import {ListaTiposRecursosComunitariosComponent} from './componentes/lista-tipos-recursos-comunitarios/lista-tipos-recursos-comunitarios.component';
import {ItemTipoRecursoComunitarioComponent} from './componentes/item-tipo-recurso-comunitario/item-tipo-recurso-comunitario.component';
import {DetallesTipoRecursoComunitarioComponent} from './componentes/detalles-tipo-recurso-comunitario/detalles-tipo-recurso-comunitario.component';
import {NuevoTipoRecursoComunitarioComponent} from './componentes/nuevo-tipo-recurso-comunitario/nuevo-tipo-recurso-comunitario.component';
import {CargaTipoRecursoComunitarioService} from "./servicios/carga-tipo-recurso-comunitario.service";

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
    NuevoTipoRecursoComunitarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CargaUserService,
    CargaClasificacionAlarmaService,
    CargaTipoCentroSanitarioService,
    CargaTipoRecursoComunitarioService,
    Title],
  bootstrap: [AppComponent]
})
export class AppModule {
}
