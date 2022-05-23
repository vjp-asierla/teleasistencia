import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {Observable, of} from "rxjs";
import {IDireccion} from "../interfaces/i-direccion";
import {catchError} from "rxjs/operators";
import {CargaDireccionService} from "./carga-direccion.service";
import {CargaDesarrolladorTecnologiaService} from "./carga-desarrollador-tecnologia.service";

@Injectable({
  providedIn: 'root'
})
export class ListaDesarrolladorTecnologiaResolveService {

  constructor(private cargaDesarrolladorTecnologia: CargaDesarrolladorTecnologiaService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IDireccion> {
    return this.cargaDesarrolladorTecnologia.getDesarrolladorTecnologia().pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    );
  }
}

