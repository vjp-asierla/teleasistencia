import { Component, OnInit } from '@angular/core';
import {ITipoRecursoComunitario} from "../../interfaces/i-tipo-recurso-comunitario";
import {IGrupo} from "../../interfaces/i-grupo";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss']
})
export class GruposComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  public grupo: IGrupo[];

  ngOnInit(): void {
    this.grupo = this.route.snapshot.data['grupos'];

  }

}
