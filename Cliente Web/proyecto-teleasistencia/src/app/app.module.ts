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
import {CargaServidorService} from "./servicios/carga-servidor.service";

@NgModule({
  declarations: [
    AppComponent,
    ListaUsersComponent,
    ItemUserComponent,
    DetallesUserComponent,
    NuevoUserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CargaServidorService,
  Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
