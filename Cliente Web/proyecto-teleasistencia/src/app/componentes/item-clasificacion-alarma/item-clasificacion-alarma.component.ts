import {Component, Input, OnInit} from '@angular/core';
import {IClasificacionAlarma} from "../../interfaces/i-clasificacion-alarma";

@Component({
  selector: 'app-item-clasificacion-alarma , [app-item-clasificacion-alarma]',
  templateUrl: './item-clasificacion-alarma.component.html',
  styleUrls: ['./item-clasificacion-alarma.component.scss']
})
export class ItemClasificacionAlarmaComponent implements OnInit {
  @Input() public clasificacion_alarma: IClasificacionAlarma;

  constructor() { }

  ngOnInit(): void {
  }

}
