import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {ITipoVivienda} from "../interfaces/i-tipo-vivienda";
import {CargaViviendaService} from "./carga-vivienda.service";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ListaViviendasResolveService implements Resolve<ITipoVivienda>{

  constructor(private router: Router, private cargaVivienda: CargaViviendaService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITipoVivienda> {
    return this.cargaVivienda.getViviendas().pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    );
  }

}
