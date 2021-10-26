import {Component, Input, OnInit} from '@angular/core';
import {ITipoCentroSanitario} from "../../interfaces/i-tipo-centro-sanitario";

@Component({
  selector: 'app-item-tipo-centro-sanitario, [app-item-tipo-centro-sanitario]',
  templateUrl: './item-tipo-centro-sanitario.component.html',
  styleUrls: ['./item-tipo-centro-sanitario.component.scss']
})

export class ItemTipoCentroSanitarioComponent implements OnInit {
  @Input() public tipo_centro_sanitario: ITipoCentroSanitario;

  constructor() {
  }

  ngOnInit(): void {
  }
}
