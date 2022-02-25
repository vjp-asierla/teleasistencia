import {Component, OnInit} from '@angular/core';
import {ITipoAlarma} from '../../interfaces/i-tipo-alarma';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-lista-tipos-alarmas',
  templateUrl: './lista-tipos-alarmas.component.html',
  styleUrls: ['./lista-tipos-alarmas.component.scss']
})

export class ListaTiposAlarmasComponent implements OnInit {
  public tipos_alarmas: ITipoAlarma[];

  constructor(private route: ActivatedRoute, private titleService: Title) {
  }

  ngOnInit(): void {
    this.tipos_alarmas = this.route.snapshot.data['tipos_alarmas'];
    this.titleService.setTitle('Tipos alarmas');
  }
}
