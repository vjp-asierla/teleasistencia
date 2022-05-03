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
    //console.log(this.router.url)
    if(this.router.url=='/'){
      return true
    }

      if(!token){
      this.router.navigate(['/login']);
      return false
    }

      else{
      return true
    }

  }
}


