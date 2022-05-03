import {Injectable} from '@angular/core';
import {interval} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor() {
  }

  

  estaLogin(): boolean {
    if (localStorage.getItem('token') != null) {
      return true;
    } else {
      return false;
    }
  }

  hacerLogout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username')

  }
}
