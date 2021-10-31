import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {ITipoCentroSanitario} from '../interfaces/i-tipo-centro-sanitario';
import {CargaTipoCentroSanitarioService} from './carga-tipo-centro-sanitario.service';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ListaTiposCentrosSanitariosResolveService implements Resolve<ITipoCentroSanitario> {

  constructor(private cargaTiposCentrosSanitarios: CargaTipoCentroSanitarioService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITipoCentroSanitario> {
    return this.cargaTiposCentrosSanitarios.getTiposCentrosSanitarios().pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    );
  }
}
