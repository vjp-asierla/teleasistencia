import {Component, DoCheck, OnInit} from '@angular/core';
import {LoginService} from '../../../servicios/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-botones-login',
  templateUrl: './botones-login.component.html',
  styleUrls: ['./botones-login.component.scss']
})

export class BotonesLoginComponent implements OnInit, DoCheck {
  public estaLogin: boolean;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.estaLogin = this.loginService.estaLogin();
  }

  hacerLogout(): void {
    this.loginService.hacerLogout();
    this.router.navigate(['/inicio']);
  }
}
