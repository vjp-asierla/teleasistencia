import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {ICentroSanitario} from '../../interfaces/i-centro-sanitario';
import {CargaCentroSanitarioService} from './carga-centro-sanitario.service';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DetallesCentroSanitarioResolveService implements Resolve<ICentroSanitario> {

  constructor(private cargaCentrosSanitarios: CargaCentroSanitarioService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICentroSanitario> {
    return this.cargaCentrosSanitarios.getCentroSanitario(route.params['id']).pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    );
  }
}
