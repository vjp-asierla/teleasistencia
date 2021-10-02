import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListaUsersComponent} from "./componentes/lista-users/lista-users.component";
import {ListaUsersResolveService} from "./servicios/lista-users-resolve.service";
import {DetallesUserComponent} from "./componentes/detalles-user/detalles-user.component";
import {DetallesUserResolveService} from "./servicios/detalles-user-resolve.service";
import {HomeComponent} from "./componentes/home/home.component";
import {NuevoUserComponent} from "./componentes/nuevo-user/nuevo-user.component";
import {ListaClasificacionesAlarmasComponent} from "./componentes/lista-clasificaciones-alarmas/lista-clasificaciones-alarmas.component";
import {DetallesClasificacionAlarmaComponent} from "./componentes/detalles-clasificacion-alarma/detalles-clasificacion-alarma.component";
import {ListaClasificacionesAlarmasResolveService} from "./servicios/lista-clasificaciones-alarmas-resolve.service";
import {DetallesClasificacionAlarmaResolveService} from "./servicios/detalles-clasificacion-alarma-resolve.service";
import {NuevaClasificacionAlarmaComponent} from "./componentes/nueva-clasificacion-alarma/nueva-clasificacion-alarma.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'inicio', component: HomeComponent},
    {
      path: 'usuarios',
      component: ListaUsersComponent,
      resolve: {
        users: ListaUsersResolveService
      }
    },
    {
      path: 'usuarios/modificar/:id',
      component: DetallesUserComponent,
      resolve: {
        user: DetallesUserResolveService
      }
    },
    {path: 'usuarios/nuevo', component: NuevoUserComponent},
    {
      path: 'clasificaciones_alarmas',
      component: ListaClasificacionesAlarmasComponent,
      resolve: {
        clasificaciones_alarmas: ListaClasificacionesAlarmasResolveService
      }
    },
    {
      path: 'clasificaciones_alarmas/modificar/:id',
      component: DetallesClasificacionAlarmaComponent,
      resolve: {
        clasificacion_alarma: DetallesClasificacionAlarmaResolveService
      }
    },
    {path: 'clasificaciones_alarmas/nueva', component: NuevaClasificacionAlarmaComponent},
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: '**', redirectTo: '/inicio', pathMatch: 'full'}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
