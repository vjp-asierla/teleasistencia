import { Component, OnInit } from '@angular/core';
import {RecursosComunitariosPerosnalesService} from "../../servicios/recursos-comunitarios-perosnales.service";
import {IRecursoComunitarioPersonal} from "../../interfaces/i-recurso-comunitario-persona";

@Component({
  selector: 'app-recursos-comunitarios-personales',
  templateUrl: './recursos-comunitarios-personales.component.html',
  styleUrls: ['./recursos-comunitarios-personales.component.scss']
})
export class RecursosComunitariosPersonalesComponent implements OnInit {
  public RCP:IRecursoComunitarioPersonal[]=[]

  constructor(private RecursosComunitariosPersonalesService: RecursosComunitariosPerosnalesService) { }



  ngOnInit(): void {
    this.RecursosComunitariosPersonalesService.getRecursoComunitarioPersonal().subscribe(resp=>{
      console.log(resp)
      this.RCP=resp
    })

  }

}
