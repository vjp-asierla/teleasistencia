import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {

  constructor(private loginService: LoginService, public router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const token= localStorage.getItem('token')

    if(!token){
      console.log('no hay token')
      this.router.navigate(['/login']);
    } else{
      console.log('hay token')
      return true
    }
    // if (!this.loginService.estaLogin()) {
    //   this.router.navigate(['/login']);
    //   return false;
    // }
    // return true;
  }
}


