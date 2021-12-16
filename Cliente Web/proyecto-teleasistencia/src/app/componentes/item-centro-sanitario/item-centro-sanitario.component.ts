import {Component, Input, OnInit} from '@angular/core';
import {ICentroSanitario} from '../../interfaces/i-centro-sanitario';

@Component({
  selector: 'app-item-centro-sanitario, [app-item-centro-sanitario]',
  templateUrl: './item-centro-sanitario.component.html',
  styleUrls: ['./item-centro-sanitario.component.scss']
})

export class ItemCentroSanitarioComponent implements OnInit {
  @Input() public centro_sanitario: ICentroSanitario;

  constructor() {
  }

  ngOnInit(): void {
  }
}
