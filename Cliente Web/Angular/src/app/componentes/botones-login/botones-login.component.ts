import {Component, DoCheck, OnInit} from '@angular/core';
import {LoginService} from '../../servicios/login.service';
import {Router} from '@angular/router';
import {CargaUserService} from "../../servicios/carga-user.service";

@Component({
  selector: 'app-botones-login',
  templateUrl: './botones-login.component.html',
  styleUrls: ['./botones-login.component.scss']
})

export class BotonesLoginComponent implements OnInit, DoCheck {
  public estaLogin: boolean;
  public username:string= localStorage.getItem('username');
  constructor(private loginService: LoginService, private router: Router, private userService:CargaUserService) {
  }

  public img:string
  ngOnInit(): void {
    this.userService.getUser(14).subscribe(
      (resp:any)=>{
        //console.log(resp.imagen)
        const {imagen}=resp.imagen
        //console.log(imagen)
        this.img=imagen
      }
    )

  }

  ngDoCheck(): void {
    this.estaLogin = this.loginService.estaLogin();
  }

  hacerLogout(): void {
    this.loginService.hacerLogout();
    this.router.navigate(['/inicio']);
  }
}
