import {Injectable} from '@angular/core';
import {interval} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor() {
  }

  hacerLogin(): void {

    //localStorage.setItem('token', 'usuario' );
    //JSON.stringify(data.token)
    const contador=interval(1000)
    contador.subscribe(()=>{
      window.location.reload()
    })
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
    const contador=interval(1000)
    contador.subscribe(()=>{
      window.location.reload()
    })
  }
}
