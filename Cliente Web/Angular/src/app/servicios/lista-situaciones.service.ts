import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {CargaTipoSituacionService} from "./carga-tipo-situacion.service";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {ITipoSituacion} from "../interfaces/i-tipo-situacion";

@Injectable({
  providedIn: 'root'
})
export class ListaSituacionesService {

  constructor(private router: Router, private cargaSituacion: CargaTipoSituacionService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITipoSituacion> {
    return this.cargaSituacion.getTiposSituaciones().pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    );
  }

}
