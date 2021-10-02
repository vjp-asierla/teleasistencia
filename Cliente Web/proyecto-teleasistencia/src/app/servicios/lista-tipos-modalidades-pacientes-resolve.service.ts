import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {ITipoModalidadPaciente} from "../interfaces/i-tipo-modalidad-paciente";
import {CargaTipoModalidadPacienteService} from "./carga-tipo-modalidad-paciente.service";
import {Observable, of} from "rxjs";
import {ITipoCentroSanitario} from "../interfaces/i-tipo-centro-sanitario";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ListaTiposModalidadesPacientesResolveService implements Resolve<ITipoModalidadPaciente> {

  constructor(private cargaTiposModalidadesPacientes: CargaTipoModalidadPacienteService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITipoModalidadPaciente> {
    return this.cargaTiposModalidadesPacientes.getTiposModalidadesPacientes().pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    );
  }
}
