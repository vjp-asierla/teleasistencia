import { Component, OnInit } from '@angular/core';
import {ILogin} from "../../interfaces/i-login";
import {Title} from "@angular/platform-browser";
import {Login} from "../../clases/login";

@Component({
  selector: 'app-pantalla-login',
  templateUrl: './pantalla-login.component.html',
  styleUrls: ['./pantalla-login.component.scss']
})
export class PantallaLoginComponent implements OnInit {
  public login: ILogin;

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Login');
    this.login = new Login();
  }

  hacerLogin(): void{

  }

}
