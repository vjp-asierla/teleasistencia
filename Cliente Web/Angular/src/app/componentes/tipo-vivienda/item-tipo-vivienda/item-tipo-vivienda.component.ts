import {Component, Input, OnInit} from '@angular/core';
import {ITipoVivienda} from "../../../interfaces/i-tipo-vivienda";

@Component({
  selector: 'app-item-tipo-vivienda, [app-item-tipo-vivienda]',
  templateUrl: './item-tipo-vivienda.component.html',
  styleUrls: ['./item-tipo-vivienda.component.scss']
})
export class ItemTipoViviendaComponent implements OnInit {
  @Input() public tipo_vivenda: ITipoVivienda;

  constructor() { }

  ngOnInit(): void {
  }

}
