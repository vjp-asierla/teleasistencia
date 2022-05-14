
import {Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {ILogin} from "../../interfaces/i-login";
import {Title} from "@angular/platform-browser";
import {Login} from "../../clases/login";
import {LoginService} from "../../servicios/login.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {token} from "../../interfaces/i-token";
import {NgForm} from "@angular/forms";




@Component({
  selector: 'app-pantalla-login',
  templateUrl: './pantalla-login.component.html',
  styleUrls: ['./pantalla-login.component.scss']
})
export class PantallaLoginComponent implements OnInit, DoCheck {
  public login: ILogin;
  public estaLogin: boolean;

  @ViewChild('formLogin') formLogin!: NgForm



  constructor(private titleService: Title, private loginService: LoginService,private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.titleService.setTitle('Login');
    this.login = new Login();

  }

  ngDoCheck(): void {
    this.estaLogin = this.loginService.estaLogin();
  }

  hacerLogin(): void {
   this.http.post<token>('http://localhost:8000/api/token/',
     this.formLogin.value
   ).subscribe(
      resp=>{
        // console.log(resp)
        localStorage.setItem('token',resp.access)
      }
    )
    this.loginService.hacerLogin();
    console.log(this.formLogin.value)
    this.router.navigate(['/inicio']);
  }

  hacerLogout(): void {
    this.loginService.hacerLogout();
    this.router.navigate(['/login']);
  }





}
