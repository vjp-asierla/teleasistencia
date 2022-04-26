import {Component, Input, OnInit} from '@angular/core';
import {IDireccion} from '../../../interfaces/i-direccion';

@Component({
  selector: 'app-item-direccion, [app-item-direccion]',
  templateUrl: './item-direccion.component.html',
  styleUrls: ['./item-direccion.component.scss']
})

export class ItemDireccionComponent implements OnInit {
  @Input() public direccion: IDireccion;

  constructor() {
  }

  ngOnInit(): void {
  }
}
