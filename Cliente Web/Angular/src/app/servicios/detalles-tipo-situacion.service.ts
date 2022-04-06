import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {ITipoSituacion} from "../interfaces/i-tipo-situacion";
import {CargaTipoSituacionService} from "./carga-tipo-situacion.service";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DetallesTipoSituacionService implements Resolve<ITipoSituacion>{

  constructor(private router: Router, private cargaSituacion: CargaTipoSituacionService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITipoSituacion> {
    return this.cargaSituacion.getTipoSituacion(route.params['id']).pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    );
  }

}
