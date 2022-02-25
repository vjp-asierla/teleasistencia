import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {ITipoModalidadPaciente} from '../interfaces/i-tipo-modalidad-paciente';
import {CargaTipoModalidadPacienteService} from './carga-tipo-modalidad-paciente.service';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DetallesTipoModalidadPacienteResolveService implements Resolve<ITipoModalidadPaciente> {

  constructor(private cargaTiposModalidadesPacientes: CargaTipoModalidadPacienteService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITipoModalidadPaciente> {
    return this.cargaTiposModalidadesPacientes.getTipoModalidadPaciente(route.params['id']).pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    );
  }
}
