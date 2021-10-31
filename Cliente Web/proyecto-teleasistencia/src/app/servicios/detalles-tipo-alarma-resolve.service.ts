import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {ITipoAlarma} from '../interfaces/i-tipo-alarma';
import {CargaTipoAlarmaService} from './carga-tipo-alarma.service';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DetallesTipoAlarmaResolveService implements Resolve<ITipoAlarma> {

  constructor(private cargaTiposAlarmas: CargaTipoAlarmaService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITipoAlarma> {
    return this.cargaTiposAlarmas.getTipoAlarma(route.params['id']).pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    );
  }
}
