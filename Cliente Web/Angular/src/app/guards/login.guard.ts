import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {LoginService} from '../servicios/login.service';

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {

  constructor(public router: Router) {
  }
//el guard no permite activar el modulo si no hay token grabado
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const token= localStorage.getItem('token')
    //console.log(this.router.url)
    if(this.router.url=='/'){
      return true
    }
    // si no hay token retorno false y le redirijo al login
      if(!token){
      this.router.navigate(['/login']);
      return false
    }

      else{
      return true
    }

  }
}


