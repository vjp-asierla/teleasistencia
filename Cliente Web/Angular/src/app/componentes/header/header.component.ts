import {Component,  OnInit, } from '@angular/core';
import {LoginService} from "../../servicios/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  public estaLogin: boolean

  constructor(private loginService:LoginService) {
  }
  ngOnInit(): void {
    this.comprobarSilogin()
    console.log(this.estaLogin)
  }
  comprobarSilogin():boolean{
    if(this.loginService.estaLogin()){
      console.log(this.estaLogin)
      return this.estaLogin=true
    }else{
      console.log(this.estaLogin)
      return false
    }

  }









}
