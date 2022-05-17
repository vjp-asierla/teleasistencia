import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {CargaViviendaService} from "./carga-vivienda.service";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {ITipoVivienda} from "../interfaces/i-tipo-vivienda";

@Injectable({
  providedIn: 'root'
})
export class DetallesViviendaResolveService implements Resolve<ITipoVivienda>{

  constructor(private cargaViviendas: CargaViviendaService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITipoVivienda> {
    return this.cargaViviendas.getVivienda(route.params['id']).pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    );
  }
}
