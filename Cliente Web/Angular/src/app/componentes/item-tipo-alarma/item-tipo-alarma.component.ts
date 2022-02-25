import {Component, Input, OnInit} from '@angular/core';
import {ITipoAlarma} from '../../interfaces/i-tipo-alarma';

@Component({
  selector: 'app-item-tipo-alarma, [app-item-tipo-alarma]',
  templateUrl: './item-tipo-alarma.component.html',
  styleUrls: ['./item-tipo-alarma.component.scss']
})

export class ItemTipoAlarmaComponent implements OnInit {
  @Input() public tipo_alarma: ITipoAlarma;

  constructor() {
  }

  ngOnInit(): void {
  }
}
