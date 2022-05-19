import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public nombreUser:string=localStorage.getItem('username')
  public apellidoUser:string=localStorage.getItem('userlastname')

  constructor() { }

  ngOnInit(): void {
  }

}
