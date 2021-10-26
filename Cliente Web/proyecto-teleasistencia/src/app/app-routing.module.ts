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
import {ListaTiposRecursosComunitariosComponent} from "./componentes/lista-tipos-recursos-comunitarios/lista-tipos-recursos-comunitarios.component";
import {ListaTiposRecursosComunitariosResolveService} from "./servicios/lista-tipos-recursos-comunitarios-resolve.service";
import {DetallesTipoRecursoComunitarioComponent} from "./componentes/detalles-tipo-recurso-comunitario/detalles-tipo-recurso-comunitario.component";
import {DetallesTipoRecursoComunitarioResolveService} from "./servicios/detalles-tipo-recurso-comunitario-resolve.service";
import {NuevoTipoRecursoComunitarioComponent} from "./componentes/nuevo-tipo-recurso-comunitario/nuevo-tipo-recurso-comunitario.component";
import {ListaTiposModalidadesPacientesComponent} from "./componentes/lista-tipos-modalidades-pacientes/lista-tipos-modalidades-pacientes.component";
import {ListaTiposModalidadesPacientesResolveService} from "./servicios/lista-tipos-modalidades-pacientes-resolve.service";
import {DetallesTipoModalidadPacienteComponent} from "./componentes/detalles-tipo-modalidad-paciente/detalles-tipo-modalidad-paciente.component";
import {DetallesTipoModalidadPacienteResolveService} from "./servicios/detalles-tipo-modalidad-paciente-resolve.service";
import {NuevoTipoModalidadPacienteComponent} from "./componentes/nuevo-tipo-modalidad-paciente/nuevo-tipo-modalidad-paciente.component";
import {ListaTiposAlarmasComponent} from "./componentes/lista-tipos-alarmas/lista-tipos-alarmas.component";
import {ListaTiposAlarmasResolveService} from "./servicios/lista-tipos-alarmas-resolve.service";
import {DetallesTipoAlarmaComponent} from "./componentes/detalles-tipo-alarma/detalles-tipo-alarma.component";
import {DetallesTipoAlarmaResolveService} from "./servicios/detalles-tipo-alarma-resolve.service";
import {NuevoTipoAlarmaComponent} from "./componentes/nuevo-tipo-alarma/nuevo-tipo-alarma.component";
import {ListaDireccionesComponent} from "./componentes/lista-direcciones/lista-direcciones.component";
import {ListaDireccionesResolveService} from "./servicios/lista-direcciones-resolve.service";
import {DetallesDireccionComponent} from "./componentes/detalles-direccion/detalles-direccion.component";
import {DetallesDireccionResolveService} from "./servicios/detalles-direccion-resolve.service";
import {NuevaDireccionComponent} from "./componentes/nueva-direccion/nueva-direccion.component";
import {ListaCentrosSanitariosComponent} from "./componentes/lista-centros-sanitarios/lista-centros-sanitarios.component";
import {ListaCentrosSanitariosResolveService} from "./servicios/lista-centros-sanitarios-resolve.service";
import {DetallesCentroSanitarioComponent} from "./componentes/detalles-centro-sanitario/detalles-centro-sanitario.component";
import {NuevoCentroSanitarioComponent} from "./componentes/nuevo-centro-sanitario/nuevo-centro-sanitario.component";
import {ListaPersonasComponent} from "./componentes/lista-personas/lista-personas.component";
import {ListaPersonasResolveService} from "./servicios/lista-personas-resolve.service";
import {DetallesPersonaComponent} from "./componentes/detalles-persona/detalles-persona.component";
import {DetallesPersonaResolveService} from "./servicios/detalles-persona-resolve.service";
import {NuevaPersonaComponent} from "./componentes/nueva-persona/nueva-persona.component";

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
    {
      path: 'tipos_recursos_comunitarios',
      component: ListaTiposRecursosComunitariosComponent,
      resolve: {
        tipos_recursos_comunitarios: ListaTiposRecursosComunitariosResolveService
      }
    },
    {
      path: 'tipos_recursos_comunitarios/modificar/:id',
      component: DetallesTipoRecursoComunitarioComponent,
      resolve: {
        tipo_recurso_comunitario: DetallesTipoRecursoComunitarioResolveService
      }
    },
    {path: 'tipos_recursos_comunitarios/nuevo', component: NuevoTipoRecursoComunitarioComponent},
    {
      path: 'tipos_modalidades_pacientes',
      component: ListaTiposModalidadesPacientesComponent,
      resolve: {
        tipos_modalidades_pacientes: ListaTiposModalidadesPacientesResolveService
      }
    },
    {
      path: 'tipos_modalidades_pacientes/modificar/:id',
      component: DetallesTipoModalidadPacienteComponent,
      resolve: {
        tipo_modalidad_paciente: DetallesTipoModalidadPacienteResolveService
      }
    },
    {path: 'tipos_modalidades_pacientes/nuevo', component: NuevoTipoModalidadPacienteComponent},
    {
      path: 'tipos_alarmas',
      component: ListaTiposAlarmasComponent,
      resolve: {
        tipos_alarmas: ListaTiposAlarmasResolveService
      }
    },
    {
      path: 'tipos_alarmas/modificar/:id',
      component: DetallesTipoAlarmaComponent,
      resolve: {
        tipo_alarma: DetallesTipoAlarmaResolveService,
        clasificaciones_alarmas: ListaClasificacionesAlarmasResolveService
      }
    },
    {
      path: 'tipos_alarmas/nuevo',
      component: NuevoTipoAlarmaComponent,
      resolve: {
        clasificaciones_alarmas: ListaClasificacionesAlarmasResolveService
      }
    },
    {
      path: 'direcciones',
      component: ListaDireccionesComponent,
      resolve: {
        direcciones: ListaDireccionesResolveService
      }
    },
    {
      path: 'direcciones/modificar/:id',
      component: DetallesDireccionComponent,
      resolve: {
        direccion: DetallesDireccionResolveService
      }
    },
    {path: 'direcciones/nueva', component: NuevaDireccionComponent},
    {
      path: 'centros-sanitarios',
      component: ListaCentrosSanitariosComponent,
      resolve: {
        centros_sanitarios: ListaCentrosSanitariosResolveService
      }
    },
    {
      path: 'centros-sanitarios/modificar/:id',
      component: DetallesCentroSanitarioComponent,
      resolve: {
        centros_sanitario: DetallesTipoCentroSanitarioResolveService,
        tipos_centros_sanitarios: ListaTiposCentrosSanitariosResolveService,
        direcciones: ListaDireccionesResolveService
      }
    },
    {
      path: 'centros-sanitarios/nuevo',
      component: NuevoCentroSanitarioComponent,
      resolve: {
        tipos_centros_sanitarios: ListaTiposCentrosSanitariosResolveService,
        direcciones: ListaDireccionesResolveService
      }
    },
    {
      path: 'personas',
      component: ListaPersonasComponent,
      resolve: {
        personas: ListaPersonasResolveService
      }
    },
    {
      path: 'personas/modificar/:id',
      component: DetallesPersonaComponent,
      resolve: {
        persona: DetallesPersonaResolveService,
        direcciones: ListaDireccionesResolveService
      }
    },
    {
      path: 'personas/nueva',
      component: NuevaPersonaComponent,
      resolve: {
        direcciones: ListaDireccionesResolveService
      }
    },
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: '**', redirectTo: '/inicio', pathMatch: 'full'}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
