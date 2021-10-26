import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {IClasificacionAlarma} from "../interfaces/i-clasificacion-alarma";
import {CargaClasificacionAlarmaService} from "./carga-clasificacion-alarma.service";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class DetallesClasificacionAlarmaResolveService implements Resolve<IClasificacionAlarma> {

  constructor(private cargaClasificacionesAlarmas: CargaClasificacionAlarmaService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IClasificacionAlarma> {
    return this.cargaClasificacionesAlarmas.getClasificacionAlarma(route.params['id']).pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    );
  }
}
