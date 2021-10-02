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
import {ListaTiposCentrosSanitariosComponent} from "./componentes/lista-tipos-centros-sanitarios/lista-tipos-centros-sanitarios.component";
import {ListaTiposCentrosSanitariosResolveService} from "./servicios/lista-tipos-centros-sanitarios-resolve.service";
import {DetallesTipoCentroSanitarioComponent} from "./componentes/detalles-tipo-centro-sanitario/detalles-tipo-centro-sanitario.component";
import {DetallesTipoCentroSanitarioResolveService} from "./servicios/detalles-tipo-centro-sanitario-resolve.service";
import {NuevoTipoCentroSanitarioComponent} from "./componentes/nuevo-tipo-centro-sanitario/nuevo-tipo-centro-sanitario.component";

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
    {
      path: 'tipos_centros_sanitarios',
      component: ListaTiposCentrosSanitariosComponent,
      resolve: {
        tipos_centros_sanitarios: ListaTiposCentrosSanitariosResolveService
      }
    },
    {
      path: 'tipos_centros_sanitarios/modificar/:id',
      component: DetallesTipoCentroSanitarioComponent,
      resolve: {
        tipo_centro_sanitario: DetallesTipoCentroSanitarioResolveService
      }
    },
    {path: 'tipos_centros_sanitarios/nuevo', component: NuevoTipoCentroSanitarioComponent},
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: '**', redirectTo: '/inicio', pathMatch: 'full'}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
