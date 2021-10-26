import {Component, OnInit} from '@angular/core';
import {ITipoAlarma} from "../../interfaces/i-tipo-alarma";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lista-tipos-alarmas',
  templateUrl: './lista-tipos-alarmas.component.html',
  styleUrls: ['./lista-tipos-alarmas.component.scss']
})

export class ListaTiposAlarmasComponent implements OnInit {
  public tipos_alarmas: ITipoAlarma[];

  constructor(private titleServide: Title, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.titleServide.setTitle('Tipos alarmas');
    this.tipos_alarmas = this.route.snapshot.data['tipos_alarmas'];
  }
}
