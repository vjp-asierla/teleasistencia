import {Component, DoCheck, OnInit} from '@angular/core';
import {ILogin} from "../../interfaces/i-login";
import {Title} from "@angular/platform-browser";
import {Login} from "../../clases/login";
import {LoginService} from "../../servicios/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pantalla-login',
  templateUrl: './pantalla-login.component.html',
  styleUrls: ['./pantalla-login.component.scss']
})
export class PantallaLoginComponent implements OnInit, DoCheck {
  public login: ILogin;
  public estaLogin: boolean;

  constructor(private titleService: Title, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.titleService.setTitle('Login');
    this.login = new Login();
  }

  ngDoCheck(): void {
    this.estaLogin = this.loginService.estaLogin();
  }

  hacerLogin(): void {
    this.loginService.hacerLogin();
    console.log(this.login);
    this.router.navigate(['/inicio']);
  }

  hacerLogout(): void {
    this.loginService.hacerLogout();
    this.router.navigate(['/login']);
  }
}
