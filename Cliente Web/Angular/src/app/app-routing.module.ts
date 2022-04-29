import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListaUsersComponent} from './componentes/user/lista-users/lista-users.component';
import {ListaUsersResolveService} from './servicios/user/lista-users-resolve.service';
import {DetallesUserComponent} from './componentes/user/detalles-user/detalles-user.component';
import {DetallesUserResolveService} from './servicios/user/detalles-user-resolve.service';
import {HomeComponent} from './componentes/home/home.component';
import {NuevoUserComponent} from './componentes/user/nuevo-user/nuevo-user.component';
import {ListaClasificacionesAlarmasComponent} from './componentes/alarma/clasificacion-alarma/lista-clasificaciones-alarmas/lista-clasificaciones-alarmas.component';
import {DetallesClasificacionAlarmaComponent} from './componentes/alarma/clasificacion-alarma/detalles-clasificacion-alarma/detalles-clasificacion-alarma.component';
import {ListaClasificacionesAlarmasResolveService} from './servicios/alarma/lista-clasificaciones-alarmas-resolve.service';
import {DetallesClasificacionAlarmaResolveService} from './servicios/alarma/detalles-clasificacion-alarma-resolve.service';
import {NuevaClasificacionAlarmaComponent} from './componentes/alarma/clasificacion-alarma/nueva-clasificacion-alarma/nueva-clasificacion-alarma.component';
import {ListaTiposCentrosSanitariosComponent} from './componentes/centro-sanitario/tipo-centro-sanitario/lista-tipos-centros-sanitarios/lista-tipos-centros-sanitarios.component';
import {ListaTiposCentrosSanitariosResolveService} from './servicios/centro-sanitario/tipo-centro-sanitario/lista-tipos-centros-sanitarios-resolve.service';
import {DetallesTipoCentroSanitarioComponent} from './componentes/centro-sanitario/tipo-centro-sanitario/detalles-tipo-centro-sanitario/detalles-tipo-centro-sanitario.component';
import {DetallesTipoCentroSanitarioResolveService} from './servicios/centro-sanitario/tipo-centro-sanitario/detalles-tipo-centro-sanitario-resolve.service';
import {NuevoTipoCentroSanitarioComponent} from './componentes/centro-sanitario/tipo-centro-sanitario/nuevo-tipo-centro-sanitario/nuevo-tipo-centro-sanitario.component';
import {ListaTiposRecursosComunitariosComponent} from './componentes/recurso-comunitario/tipo-recurso-comunitario/lista-tipos-recursos-comunitarios/lista-tipos-recursos-comunitarios.component';
import {ListaTiposRecursosComunitariosResolveService} from './servicios/recurso-comunitario/tipo-recurso-comunitario/lista-tipos-recursos-comunitarios-resolve.service';
import {DetallesTipoRecursoComunitarioComponent} from './componentes/recurso-comunitario/tipo-recurso-comunitario/detalles-tipo-recurso-comunitario/detalles-tipo-recurso-comunitario.component';
import {DetallesTipoRecursoComunitarioResolveService} from './servicios/recurso-comunitario/tipo-recurso-comunitario/detalles-tipo-recurso-comunitario-resolve.service';
import {NuevoTipoRecursoComunitarioComponent} from './componentes/recurso-comunitario/tipo-recurso-comunitario/nuevo-tipo-recurso-comunitario/nuevo-tipo-recurso-comunitario.component';
import {ListaTiposModalidadesPacientesComponent} from './componentes/modalidad-paciente/lista-tipos-modalidades-pacientes/lista-tipos-modalidades-pacientes.component';
import {ListaTiposModalidadesPacientesResolveService} from './servicios/modalidad-paciente/lista-tipos-modalidades-pacientes-resolve.service';
import {DetallesTipoModalidadPacienteComponent} from './componentes/modalidad-paciente/detalles-tipo-modalidad-paciente/detalles-tipo-modalidad-paciente.component';
import {DetallesTipoModalidadPacienteResolveService} from './servicios/modalidad-paciente/detalles-tipo-modalidad-paciente-resolve.service';
import {NuevoTipoModalidadPacienteComponent} from './componentes/modalidad-paciente/nuevo-tipo-modalidad-paciente/nuevo-tipo-modalidad-paciente.component';
import {ListaTiposAlarmasComponent} from './componentes/alarma/lista-tipos-alarmas/lista-tipos-alarmas.component';
import {ListaTiposAlarmasResolveService} from './servicios/alarma/tipo-alarma/lista-tipos-alarmas-resolve.service';
import {DetallesTipoAlarmaComponent} from './componentes/alarma/detalles-tipo-alarma/detalles-tipo-alarma.component';
import {DetallesTipoAlarmaResolveService} from './servicios/alarma/tipo-alarma/detalles-tipo-alarma-resolve.service';
import {NuevoTipoAlarmaComponent} from './componentes/alarma/nuevo-tipo-alarma/nuevo-tipo-alarma.component';
import {ListaDireccionesComponent} from './componentes/direccion/lista-direcciones/lista-direcciones.component';
import {ListaDireccionesResolveService} from './servicios/direccion/lista-direcciones-resolve.service';
import {DetallesDireccionComponent} from './componentes/direccion/detalles-direccion/detalles-direccion.component';
import {DetallesDireccionResolveService} from './servicios/direccion/detalles-direccion-resolve.service';
import {NuevaDireccionComponent} from './componentes/direccion/nueva-direccion/nueva-direccion.component';
import {ListaCentrosSanitariosComponent} from './componentes/centro-sanitario/lista-centros-sanitarios/lista-centros-sanitarios.component';
import {ListaCentrosSanitariosResolveService} from './servicios/centro-sanitario/lista-centros-sanitarios-resolve.service';
import {DetallesCentroSanitarioComponent} from './componentes/centro-sanitario/detalles-centro-sanitario/detalles-centro-sanitario.component';
import {NuevoCentroSanitarioComponent} from './componentes/centro-sanitario/nuevo-centro-sanitario/nuevo-centro-sanitario.component';
import {ListaPersonasComponent} from './componentes/persona/lista-personas/lista-personas.component';
import {ListaPersonasResolveService} from './servicios/persona/lista-personas-resolve.service';
import {DetallesPersonaComponent} from './componentes/persona/detalles-persona/detalles-persona.component';
import {DetallesPersonaResolveService} from './servicios/persona/detalles-persona-resolve.service';
import {NuevaPersonaComponent} from './componentes/persona/nueva-persona/nueva-persona.component';
import {DetallesCentroSanitarioResolveService} from './servicios/centro-sanitario/detalles-centro-sanitario-resolve.service';
import {ListaRecursosComunitariosComponent} from './componentes/recurso-comunitario/lista-recursos-comunitarios/lista-recursos-comunitarios.component';
import {ListaRecursosComunitariosResolveService} from './servicios/recurso-comunitario/lista-recursos-comunitarios-resolve.service';
import {DetallesRecursoComunitarioComponent} from './componentes/recurso-comunitario/detalles-recurso-comunitario/detalles-recurso-comunitario.component';
import {DetallesRecursoComunitarioResolveService} from './servicios/recurso-comunitario/detalles-recurso-comunitario-resolve.service';
import {NuevoRecursoComunitarioComponent} from './componentes/recurso-comunitario/nuevo-recurso-comunitario/nuevo-recurso-comunitario.component';
import {PantallaLoginComponent} from './componentes/login/pantalla-login/pantalla-login.component';
import {LoginGuard} from './servicios/login/login.guard';

const routes: Routes = [
  {path: 'login', component: PantallaLoginComponent},
  {path: 'inicio', component: HomeComponent},
  {
    path: 'usuarios',
    component: ListaUsersComponent,
    canActivate: [LoginGuard],
    resolve: {
      users: ListaUsersResolveService
    }
  },
  {
    path: 'usuarios/modificar/:id',
    component: DetallesUserComponent,
    canActivate: [LoginGuard],
    resolve: {
      user: DetallesUserResolveService
    }
  },
  {path: 'usuarios/nuevo', component: NuevoUserComponent, canActivate: [LoginGuard]},
  {
    path: 'clasificaciones_alarmas',
    component: ListaClasificacionesAlarmasComponent,
    canActivate: [LoginGuard],
    resolve: {
      clasificaciones_alarmas: ListaClasificacionesAlarmasResolveService
    }
  },
  {
    path: 'clasificaciones_alarmas/modificar/:id',
    component: DetallesClasificacionAlarmaComponent,
    canActivate: [LoginGuard],
    resolve: {
      clasificacion_alarma: DetallesClasificacionAlarmaResolveService
    }
  },
  {path: 'clasificaciones_alarmas/nueva', component: NuevaClasificacionAlarmaComponent, canActivate: [LoginGuard]},
  {
    path: 'tipos_centros_sanitarios',
    component: ListaTiposCentrosSanitariosComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipos_centros_sanitarios: ListaTiposCentrosSanitariosResolveService
    }
  },
  {
    path: 'tipos_centros_sanitarios/modificar/:id',
    component: DetallesTipoCentroSanitarioComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipo_centro_sanitario: DetallesTipoCentroSanitarioResolveService
    }
  },
  {path: 'tipos_centros_sanitarios/nuevo', component: NuevoTipoCentroSanitarioComponent, canActivate: [LoginGuard]},
  {
    path: 'tipos_recursos_comunitarios',
    component: ListaTiposRecursosComunitariosComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipos_recursos_comunitarios: ListaTiposRecursosComunitariosResolveService
    }
  },
  {
    path: 'tipos_recursos_comunitarios/modificar/:id',
    component: DetallesTipoRecursoComunitarioComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipo_recurso_comunitario: DetallesTipoRecursoComunitarioResolveService
    }
  },
  {
    path: 'tipos_recursos_comunitarios/nuevo',
    component: NuevoTipoRecursoComunitarioComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'tipos_modalidades_pacientes',
    component: ListaTiposModalidadesPacientesComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipos_modalidades_pacientes: ListaTiposModalidadesPacientesResolveService
    }
  },
  {
    path: 'tipos_modalidades_pacientes/modificar/:id',
    component: DetallesTipoModalidadPacienteComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipo_modalidad_paciente: DetallesTipoModalidadPacienteResolveService
    }
  },
  {
    path: 'tipos_modalidades_pacientes/nuevo',
    component: NuevoTipoModalidadPacienteComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'tipos_alarmas',
    component: ListaTiposAlarmasComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipos_alarmas: ListaTiposAlarmasResolveService
    }
  },
  {
    path: 'tipos_alarmas/modificar/:id',
    component: DetallesTipoAlarmaComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipo_alarma: DetallesTipoAlarmaResolveService,
      clasificaciones_alarmas: ListaClasificacionesAlarmasResolveService
    }
  },
  {
    path: 'tipos_alarmas/nuevo',
    component: NuevoTipoAlarmaComponent,
    canActivate: [LoginGuard],
    resolve: {
      clasificaciones_alarmas: ListaClasificacionesAlarmasResolveService
    }
  },
  {
    path: 'direcciones/borrado/:id',
    component: ListaDireccionesComponent,
    canActivate: [LoginGuard],
    resolve: {
      direcciones: ListaDireccionesResolveService
    }
  },
  {
    path: 'direcciones',
    component: ListaDireccionesComponent,
    canActivate: [LoginGuard],
    resolve: {
      direcciones: ListaDireccionesResolveService
    }
  },
  {
    path: 'direcciones/modificar/:id',
    component: DetallesDireccionComponent,
    canActivate: [LoginGuard],
    resolve: {
      direccion: DetallesDireccionResolveService
    }
  },



 /* {
    path: 'direcciones/eliminar/:id',
    component:  ,
    canActivate: [LoginGuard],
    resolve:{
      direccion:
    }

  },

  */

  {path: 'direcciones/nueva', component: NuevaDireccionComponent, canActivate: [LoginGuard]},
  {
    path: 'centros_sanitarios',
    component: ListaCentrosSanitariosComponent,
    canActivate: [LoginGuard],
    resolve: {
      centros_sanitarios: ListaCentrosSanitariosResolveService
    }
  },
  {
    path: 'centros_sanitarios/modificar/:id',
    component: DetallesCentroSanitarioComponent,
    canActivate: [LoginGuard],
    resolve: {
      centro_sanitario: DetallesCentroSanitarioResolveService,
      tipos_centros_sanitarios: ListaTiposCentrosSanitariosResolveService
    }
  },
  {
    path: 'centros_sanitarios/nuevo',
    component: NuevoCentroSanitarioComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipos_centros_sanitarios: ListaTiposCentrosSanitariosResolveService
    }
  },
  {
    path: 'recursos_comunitarios',
    component: ListaRecursosComunitariosComponent,
    canActivate: [LoginGuard],
    resolve: {
      recursos_comunitarios: ListaRecursosComunitariosResolveService
    }
  },
  {
    path: 'recursos_comunitarios/modificar/:id',
    component: DetallesRecursoComunitarioComponent,
    canActivate: [LoginGuard],
    resolve: {
      recurso_comunitario: DetallesRecursoComunitarioResolveService,
      tipos_recursos_comunitarios: ListaTiposRecursosComunitariosResolveService
    }
  },
  {
    path: 'recursos_comunitarios/nuevo',
    component: NuevoRecursoComunitarioComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipos_recursos_comunitarios: ListaTiposRecursosComunitariosResolveService
    }
  },
  {
    path: 'personas',
    component: ListaPersonasComponent,
    canActivate: [LoginGuard],
    resolve: {
      personas: ListaPersonasResolveService
    }
  },
  {
    path: 'personas/modificar/:id',
    component: DetallesPersonaComponent,
    canActivate: [LoginGuard],
    resolve: {
      persona: DetallesPersonaResolveService,
      direcciones: ListaDireccionesResolveService
    }
  },
  {
    path: 'personas/nueva',
    component: NuevaPersonaComponent,
    canActivate: [LoginGuard],
    resolve: {
      direcciones: ListaDireccionesResolveService
    }
  },
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: '**', redirectTo: '/inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

