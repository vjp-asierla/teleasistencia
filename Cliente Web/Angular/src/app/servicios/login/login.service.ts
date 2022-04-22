import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor() {
  }

  hacerLogin(): void {
    localStorage.setItem('token', 'usuario');
  }

  estaLogin(): boolean {
    if (localStorage.getItem('token') === 'usuario') {
      return true;
    } else {
      return false;
    }
  }

  hacerLogout(): void {
    localStorage.removeItem('token');
  }
}
