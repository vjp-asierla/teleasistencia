import {Component, OnInit} from '@angular/core';
import {IPersona} from "../../interfaces/i-persona";
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.scss']
})
export class ListaPersonasComponent implements OnInit {
  public personas: IPersona[];

  constructor(private route: ActivatedRoute, private titleServide: Title) {
  }

  ngOnInit(): void {
    this.titleServide.setTitle('Personas');
    this.personas = this.route.snapshot.data['personas'];
  }

}
