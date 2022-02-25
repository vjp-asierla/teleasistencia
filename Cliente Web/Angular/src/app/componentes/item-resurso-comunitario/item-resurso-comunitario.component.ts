import {Component, Input, OnInit} from '@angular/core';
import {IRecursoComunitario} from '../../interfaces/i-recurso-comunitario';

@Component({
  selector: 'app-item-resurso-comunitario, [app-item-resurso-comunitario]',
  templateUrl: './item-resurso-comunitario.component.html',
  styleUrls: ['./item-resurso-comunitario.component.scss']
})

export class ItemResursoComunitarioComponent implements OnInit {
  @Input() public recurso_comunitario: IRecursoComunitario;

  constructor() {
  }

  ngOnInit(): void {
  }
}
