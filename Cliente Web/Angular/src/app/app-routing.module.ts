import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListaUsersComponent} from './componentes/user/lista-users/lista-users.component';
import {ListaUsersResolveService} from './servicios/lista-users-resolve.service';
import {ModificarUserComponent} from './componentes/user/modificar-user/modificar-user.component';
import {DetallesUserResolveService} from './servicios/detalles-user-resolve.service';
import {HomeComponent} from './componentes/home/home.component';
import {CrearUserComponent} from './componentes/user/crear-user/crear-user.component';
import {ListaClasificacionesAlarmasComponent} from './componentes/clasificacion-alarma/lista-clasificaciones-alarmas/lista-clasificaciones-alarmas.component';
import {ModificarClasificacionAlarmaComponent} from './componentes/clasificacion-alarma/modificar-clasificacion-alarma/modificar-clasificacion-alarma.component';
import {ListaClasificacionesAlarmasResolveService} from './servicios/lista-clasificaciones-alarmas-resolve.service';
import {DetallesClasificacionAlarmaResolveService} from './servicios/detalles-clasificacion-alarma-resolve.service';
import {CrearClasificacionAlarmaComponent} from './componentes/clasificacion-alarma/crear-clasificacion-alarma/crear-clasificacion-alarma.component';
import {ListaTiposCentrosSanitariosComponent} from './componentes/tipo-centro-sanitario/lista-tipos-centros-sanitarios/lista-tipos-centros-sanitarios.component';
import {ListaTiposCentrosSanitariosResolveService} from './servicios/lista-tipos-centros-sanitarios-resolve.service';
import {ModificarTipoCentroSanitarioComponent} from './componentes/tipo-centro-sanitario/modificar-tipo-centro-sanitario/modificar-tipo-centro-sanitario.component';
import {DetallesTipoCentroSanitarioResolveService} from './servicios/detalles-tipo-centro-sanitario-resolve.service';
import {CrearTipoCentroSanitarioComponent} from './componentes/tipo-centro-sanitario/crear-tipo-centro-sanitario/crear-tipo-centro-sanitario.component';
import {ListaTiposRecursosComunitariosComponent} from './componentes/tipo-recurso-comunitario/lista-tipos-recursos-comunitarios/lista-tipos-recursos-comunitarios.component';
import {ListaTiposRecursosComunitariosResolveService} from './servicios/lista-tipos-recursos-comunitarios-resolve.service';
import {ModificarTipoRecursoComunitarioComponent} from './componentes/tipo-recurso-comunitario/modificar-tipo-recurso-comunitario/modificar-tipo-recurso-comunitario.component';
import {DetallesTipoRecursoComunitarioResolveService} from './servicios/detalles-tipo-recurso-comunitario-resolve.service';
import {CrearTipoRecursoComunitarioComponent} from './componentes/tipo-recurso-comunitario/crear-tipo-recurso-comunitario/crear-tipo-recurso-comunitario.component';
import {ListaTiposModalidadesPacientesComponent} from './componentes/tipo-modalidad-paciente/lista-tipos-modalidades-pacientes/lista-tipos-modalidades-pacientes.component';
import {ListaTiposModalidadesPacientesResolveService} from './servicios/lista-tipos-modalidades-pacientes-resolve.service';
import {ModificarTipoModalidadPacienteComponent} from './componentes/tipo-modalidad-paciente/modificar-tipo-modalidad-paciente/modificar-tipo-modalidad-paciente.component';
import {DetallesTipoModalidadPacienteResolveService} from './servicios/detalles-tipo-modalidad-paciente-resolve.service';
import {CrearTipoModalidadPacienteComponent} from './componentes/tipo-modalidad-paciente/crear-tipo-modalidad-paciente/crear-tipo-modalidad-paciente.component';
import {ListaTiposAlarmasComponent} from './componentes/tipo-alarma/lista-tipos-alarmas/lista-tipos-alarmas.component';
import {ListaTiposAlarmasResolveService} from './servicios/lista-tipos-alarmas-resolve.service';
import {ModificarTipoAlarmaComponent} from './componentes/tipo-alarma/modificar-tipo-alarma/modificar-tipo-alarma.component';
import {DetallesTipoAlarmaResolveService} from './servicios/detalles-tipo-alarma-resolve.service';
import {CrearTipoAlarmaComponent} from './componentes/tipo-alarma/crear-tipo-alarma/crear-tipo-alarma.component';
import {ListaDireccionesComponent} from './componentes/direccion/lista-direcciones/lista-direcciones.component';
import {ListaDireccionesResolveService} from './servicios/lista-direcciones-resolve.service';
import {ModificarDireccionComponent} from './componentes/direccion/modificar-direccion/modificar-direccion.component';
import {DetallesDireccionResolveService} from './servicios/detalles-direccion-resolve.service';
import {CrearDireccionComponent} from './componentes/direccion/crear-direccion/crear-direccion.component';
import {ListaCentrosSanitariosComponent} from './componentes/centro-sanitario/lista-centros-sanitarios/lista-centros-sanitarios.component';
import {ListaCentrosSanitariosResolveService} from './servicios/lista-centros-sanitarios-resolve.service';
import {ModificarCentroSanitarioComponent} from './componentes/centro-sanitario/modificar-centro-sanitario/modificar-centro-sanitario.component';
import {CrearCentroSanitarioComponent} from './componentes/centro-sanitario/crear-centro-sanitario/crear-centro-sanitario.component';
import {ListaPersonasComponent} from './componentes/persona/lista-personas/lista-personas.component';
import {ListaPersonasResolveService} from './servicios/lista-personas-resolve.service';
import {ModificarPersonaComponent} from './componentes/persona/modificar-persona/modificar-persona.component';
import {DetallesPersonaResolveService} from './servicios/detalles-persona-resolve.service';
import {CrearPersonaComponent} from './componentes/persona/crear-persona/crear-persona.component';
import {DetallesCentroSanitarioResolveService} from './servicios/detalles-centro-sanitario-resolve.service';
import {ListaRecursosComunitariosComponent} from './componentes/recurso-comunitario/lista-recursos-comunitarios/lista-recursos-comunitarios.component';
import {ListaRecursosComunitariosResolveService} from './servicios/lista-recursos-comunitarios-resolve.service';
import {ModificarRecursoComunitarioComponent} from './componentes/recurso-comunitario/modificar-recurso-comunitario/modificar-recurso-comunitario.component';
import {DetallesRecursoComunitarioResolveService} from './servicios/detalles-recurso-comunitario-resolve.service';
import {CrearRecursoComunitarioComponent} from './componentes/recurso-comunitario/crear-recurso-comunitario/crear-recurso-comunitario.component';
import {PantallaLoginComponent} from './componentes/pantalla-login/pantalla-login.component';
import {LoginGuard} from './servicios/login.guard';
import {RecursosComunitariosPersonalesComponent} from "./componentes/recursos-comunitarios-personales/recursos-comunitarios-personales.component";
import {ListaTiposViviendaComponent} from "./componentes/tipo-vivienda/lista-tipos-vivienda/lista-tipos-vivienda.component";
import {ListaViviendasResolveService} from "./servicios/lista-viviendas-resolve.service";
import {CrearViviendaComponent} from "./componentes/tipo-vivienda/crear-tipo-vivienda/crear-vivienda.component";
import {ModificarTipoViviendaComponent} from "./componentes/tipo-vivienda/modificar-tipo-vivienda/modificar-tipo-vivienda.component";
import {ListaTiposSituacionComponent} from "./componentes/tipo-situacion/lista-tipos-situacion/lista-tipos-situacion.component";
import {DetallesViviendaResolveService} from "./servicios/detalles-vivienda-resolve.service";
import {ListaSituacionesService} from "./servicios/lista-situaciones.service";
import {CrearTipoSituacionComponent} from "./componentes/tipo-situacion/crear-tipo-situacion/crear-tipo-situacion.component";
import {ModificarTipoSituacionComponent} from "./componentes/tipo-situacion/modificar-tipo-situacion/modificar-tipo-situacion.component";
import {DetallesTipoSituacionService} from "./servicios/detalles-tipo-situacion.service";
import {BorrarTipoViviendaComponent} from "./componentes/tipo-vivienda/borrar-tipo-vivienda/borrar-tipo-vivienda.component";
import {BorrarTipoViviendaService} from "./servicios/borrar-tipo-vivienda.service";
import {BorrarTipoSituacionComponent} from "./componentes/tipo-situacion/borrar-tipo-situacion/borrar-tipo-situacion.component";
import {BorrarTipoSituacionService} from "./servicios/borrar-tipo-situacion.service";
import {ListaGruposService} from "./servicios/lista-grupos.service";
import {GruposComponent} from "./componentes/grupos/grupos.component";


const routes: Routes = [
  {path: 'login', component: PantallaLoginComponent},
  {path: 'inicio', canActivate: [LoginGuard], component: HomeComponent},
  {path: 'recurso-comunitarios-personales', canActivate: [LoginGuard], component: RecursosComunitariosPersonalesComponent},

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
    component: ModificarUserComponent,
    canActivate: [LoginGuard],
    resolve: {
      user: DetallesUserResolveService
    }
  },
  {
    path: 'usuarios/nuevo',
    component: CrearUserComponent,
    canActivate: [LoginGuard]},

  {
    path: 'grupos',
    component: GruposComponent,
    canActivate: [LoginGuard],
    resolve: {
      grupos: ListaGruposService
    },
  },
  {
    path: 'clasificaciones_alarmas',
    component: ListaClasificacionesAlarmasComponent,
    canActivate: [LoginGuard],
    resolve: {
      clasificaciones_alarmas: ListaClasificacionesAlarmasResolveService
    },
  },
  {
    path: 'clasificaciones_alarmas/modificar/:id',
    component: ModificarClasificacionAlarmaComponent,
    canActivate: [LoginGuard],
    resolve: {
      clasificacion_alarma: DetallesClasificacionAlarmaResolveService
    }
  },
  {path: 'clasificaciones_alarmas/nueva', component: CrearClasificacionAlarmaComponent, canActivate: [LoginGuard]},
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
    component: ModificarTipoCentroSanitarioComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipo_centro_sanitario: DetallesTipoCentroSanitarioResolveService
    }
  },
  {path: 'tipos_centros_sanitarios/nuevo', component: CrearTipoCentroSanitarioComponent, canActivate: [LoginGuard]},
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
    component: ModificarTipoRecursoComunitarioComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipo_recurso_comunitario: DetallesTipoRecursoComunitarioResolveService
    }
  },
  {
    path: 'tipos_recursos_comunitarios/nuevo',
    component: CrearTipoRecursoComunitarioComponent,
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
    component: ModificarTipoModalidadPacienteComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipo_modalidad_paciente: DetallesTipoModalidadPacienteResolveService
    }
  },
  {
    path: 'tipos_modalidades_pacientes/nuevo',
    component: CrearTipoModalidadPacienteComponent,
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
    component: ModificarTipoAlarmaComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipo_alarma: DetallesTipoAlarmaResolveService,
      clasificaciones_alarmas: ListaClasificacionesAlarmasResolveService
    }
  },
  {
    path: 'tipos_alarmas/nuevo',
    component: CrearTipoAlarmaComponent,
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
    component: ModificarDireccionComponent,
    canActivate: [LoginGuard],
    resolve: {
      direccion: DetallesDireccionResolveService
    }
  },
  {path: 'direcciones/nueva', component: CrearDireccionComponent, canActivate: [LoginGuard]},
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
    component: ModificarCentroSanitarioComponent,
    canActivate: [LoginGuard],
    resolve: {
      centro_sanitario: DetallesCentroSanitarioResolveService,
      tipos_centros_sanitarios: ListaTiposCentrosSanitariosResolveService
    }
  },
  {
    path: 'centros_sanitarios/nuevo',
    component: CrearCentroSanitarioComponent,
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
    component: ModificarRecursoComunitarioComponent,
    canActivate: [LoginGuard],
    resolve: {
      recurso_comunitario: DetallesRecursoComunitarioResolveService,
      tipos_recursos_comunitarios: ListaTiposRecursosComunitariosResolveService
    }
  },
  {
    path: 'recursos_comunitarios/nuevo',
    component: CrearRecursoComunitarioComponent,
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
    component: ModificarPersonaComponent,
    canActivate: [LoginGuard],
    resolve: {
      persona: DetallesPersonaResolveService,
      direcciones: ListaDireccionesResolveService
    }
  },
  {
    path: 'personas/nueva',
    component: CrearPersonaComponent,
    canActivate: [LoginGuard],
    resolve: {
      direcciones: ListaDireccionesResolveService
    }
  },
  {
    path: 'viviendas',
    component: ListaTiposViviendaComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipos_viviendas: ListaViviendasResolveService
    }
  },
  {
    path: 'viviendas/nueva',
    component: CrearViviendaComponent,
    canActivate: [LoginGuard],
    resolve: {
      clasificaciones_alarmas: ListaViviendasResolveService
    }
  },
  {
    path: 'viviendas/modificar/:id',
    component: ModificarTipoViviendaComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipo_vivienda: DetallesViviendaResolveService,
      clasificaciones_viviendas: ListaViviendasResolveService
    }
  },
  {
    path: 'viviendas/borrado/:id',
    component: BorrarTipoViviendaComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipo_vivienda: BorrarTipoViviendaService,
      clasificaciones_viviendas: ListaViviendasResolveService
    }
  },
  {
    path: 'usuarios/modificar/:id',
    component: ModificarUserComponent,
    canActivate: [LoginGuard],
    resolve: {
      user: DetallesUserResolveService
    }
  },
  {
    path: 'situaciones',
    component: ListaTiposSituacionComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipos_situaciones: ListaSituacionesService
    }
  },
  {
    path: 'situaciones/nueva',
    component: CrearTipoSituacionComponent,
    canActivate: [LoginGuard],
    resolve: {
      clasificaciones_situaciones: ListaSituacionesService
    }
  },
  {
    path: 'situaciones/modificar/:id',
    component: ModificarTipoSituacionComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipos_situaciones: DetallesTipoSituacionService,
      clasificaciones_situaciones: ListaSituacionesService
    }
  },
  {
    path: 'situaciones/borrado/:id',
    component: BorrarTipoSituacionComponent,
    canActivate: [LoginGuard],
    resolve: {
      tipos_situaciones: BorrarTipoSituacionService,
      clasificaciones_situaciones: ListaSituacionesService
    }
  },
  {
    path: 'usuarios/modificar/:id',
    component: ModificarUserComponent,
    canActivate: [LoginGuard],
    resolve: {
      user: DetallesUserResolveService
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

