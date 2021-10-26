import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {IDireccion} from "../interfaces/i-direccion";
import {CargaDireccionService} from "./carga-direccion.service";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DetallesDireccionResolveService implements Resolve<IDireccion> {

  constructor(private cargaDirecciones: CargaDireccionService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IDireccion> {
    return this.cargaDirecciones.getDireccion(route.params['id']).pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    );
  }
}
