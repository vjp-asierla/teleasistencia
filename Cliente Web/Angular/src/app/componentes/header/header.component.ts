import {Component, DoCheck, OnInit,} from '@angular/core';
import {LoginService} from "../../servicios/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit , DoCheck{

  public estaLogin: boolean
  constructor(private loginService:LoginService) {
  }
  ngOnInit(): void {
  }
  ngDoCheck(): void {
    this.estaLogin=this.loginService.estaLogin()
  }









}
