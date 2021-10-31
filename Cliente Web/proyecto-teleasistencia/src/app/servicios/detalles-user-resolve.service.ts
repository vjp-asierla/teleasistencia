import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {CargaUserService} from './carga-user.service';
import {Observable, of} from 'rxjs';
import {IUsers} from '../interfaces/i-users';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DetallesUserResolveService implements Resolve<IUsers> {

  constructor(private cargaUsers: CargaUserService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUsers> {
    return this.cargaUsers.getUser(route.params['id']).pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    );
  }
}
