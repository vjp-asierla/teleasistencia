import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {IPersona} from "../interfaces/i-persona";
import {CargaPersonaService} from "./carga-persona.service";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class DetallesPersonaResolveService implements Resolve<IPersona> {

  constructor(private cargaPersonas: CargaPersonaService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPersona> {
    return this.cargaPersonas.getPersona(route.params['id']).pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    );
  }
}
