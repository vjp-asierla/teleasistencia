import {Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {ILogin} from "../../interfaces/i-login";
import {Title} from "@angular/platform-browser";
import {Login} from "../../clases/login";
import {LoginService} from "../../servicios/login.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {token} from "../../interfaces/i-token";
import {NgForm} from "@angular/forms";
import {environment} from "../../../environments/environment";
import {ProfileService} from "../../servicios/profile.service";
import {IProfileUser} from "../../interfaces/i-profile-user";




@Component({
  selector: 'app-pantalla-login',
  templateUrl: './pantalla-login.component.html',
  styleUrls: ['./pantalla-login.component.scss']
})
export class PantallaLoginComponent implements OnInit, DoCheck {
  public login: ILogin;
  public estaLogin: boolean;
  public username:string;
  public userlastname:string;
  public grupo:number;

  public img:string


  @ViewChild('formLogin') formLogin!: NgForm



  constructor(private titleService: Title, private loginService: LoginService,
              private http:HttpClient, private router: Router,private profileService:ProfileService) { }

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
        localStorage.setItem('token',resp.access)
        this.profileService.getProfile()
          .subscribe((resp:IProfileUser[])=>{
            this.username=resp[0].first_name
            this.userlastname=resp[0].last_name
            this.grupo=resp[0].groups[0].id
            localStorage.setItem('username',this.username)
            localStorage.setItem('userlastname',this.userlastname)
            localStorage.setItem('grupo',this.grupo.toString())
            if( resp[0].imagen == null){
              this.img=null
            } else{
              this.img=resp[0].imagen.imagen
            }
            localStorage.setItem('img',this.img)
            this.router.navigate(['/inicio']);

          })


      }, err=>{
        alert('Error login incorrecto')
       return
     }
    )



  }

  hacerLogout(): void {
    this.loginService.hacerLogout();
    this.router.navigate(['/login']);



  }





}
