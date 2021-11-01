import {Component, Input, OnInit} from '@angular/core';
import {IPersona} from '../../interfaces/i-persona';

@Component({
  selector: 'app-item-persona, [app-item-persona]',
  templateUrl: './item-persona.component.html',
  styleUrls: ['./item-persona.component.scss']
})

export class ItemPersonaComponent implements OnInit {
  @Input() public persona: IPersona;

  constructor() {
  }

  ngOnInit(): void {
  }
}
