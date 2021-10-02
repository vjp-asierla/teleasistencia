import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {ITipoCentroSanitario} from "../interfaces/i-tipo-centro-sanitario";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {CargaTipoCentroSanitarioService} from "./carga-tipo-centro-sanitario.service";

@Injectable({
  providedIn: 'root'
})
export class DetallesTipoCentroSanitarioResolveService implements Resolve<ITipoCentroSanitario> {

  constructor(private cargaTiposCentrosSanitarios: CargaTipoCentroSanitarioService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITipoCentroSanitario> {
    return this.cargaTiposCentrosSanitarios.getTipoCentroSanitario(route.params['id']).pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    );
  }
}
