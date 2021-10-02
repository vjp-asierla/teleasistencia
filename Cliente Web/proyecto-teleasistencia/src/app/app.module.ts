import { NgModule } from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsersComponent } from './componentes/lista-users/lista-users.component';
import { ItemUserComponent } from './componentes/item-user/item-user.component';
import { DetallesUserComponent } from './componentes/detalles-user/detalles-user.component';
import { NuevoUserComponent } from './componentes/nuevo-user/nuevo-user.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './componentes/home/home.component';
import {CargaUserService} from "./servicios/carga-user.service";
import { ItemClasificacionAlarmaComponent } from './componentes/item-clasificacion-alarma/item-clasificacion-alarma.component';
import { DetallesClasificacionAlarmaComponent } from './componentes/detalles-clasificacion-alarma/detalles-clasificacion-alarma.component';
import { NuevaClasificacionAlarmaComponent } from './componentes/nueva-clasificacion-alarma/nueva-clasificacion-alarma.component';
import { ListaClasificacionesAlarmasComponent } from './componentes/lista-clasificaciones-alarmas/lista-clasificaciones-alarmas.component';

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
    ListaClasificacionesAlarmasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CargaUserService,
  Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
