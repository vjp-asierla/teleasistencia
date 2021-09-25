import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListaUsersComponent} from "./componentes/lista-users/lista-users.component";
import {ListaUsersResolveService} from "./servicios/lista-users-resolve.service";
import {DetallesUserComponent} from "./componentes/detalles-user/detalles-user.component";
import {DetallesUserResolveService} from "./servicios/detalles-user-resolve.service";
import {HomeComponent} from "./componentes/home/home.component";
import {NuevoUserComponent} from "./componentes/nuevo-user/nuevo-user.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'inicio', component: HomeComponent},
    {
      path: 'users',
      component: ListaUsersComponent,
      resolve: {
        users: ListaUsersResolveService
      }
    },
    {
      path: 'users/modificar/:id',
      component: DetallesUserComponent,
      resolve: {
        user: DetallesUserResolveService
      }
    },
    {path: 'users/nuevo', component: NuevoUserComponent},
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: '**', redirectTo: '/inicio', pathMatch: 'full'}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
