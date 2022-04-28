import { Component, OnInit } from '@angular/core';
import {CargaPersonaService} from "../../servicios/carga-persona.service";
import {IPersona} from "../../interfaces/i-persona";
import {CargaRecursoComunitarioService} from "../../servicios/carga-recurso-comunitario.service";
import {IRecursoComunitario} from "../../interfaces/i-recurso-comunitario";

@Component({
  selector: 'app-recursos-comunitarios-personales',
  templateUrl: './recursos-comunitarios-personales.component.html',
  styleUrls: ['./recursos-comunitarios-personales.component.scss']
})
export class RecursosComunitariosPersonalesComponent implements OnInit {

  constructor(private cargaPersonas: CargaPersonaService, public cargarRecursos: CargaRecursoComunitarioService) { }

  public personas:IPersona[]
  public recursos:IRecursoComunitario[]

  ngOnInit(): void {
    this.cargaPersonas.getPersonas().subscribe(resp=>{
      this.personas=resp
    })
    this.cargarRecursos.getRecursosComunitarios().subscribe(resp=>{
      this.recursos=resp
    })
  }

}
