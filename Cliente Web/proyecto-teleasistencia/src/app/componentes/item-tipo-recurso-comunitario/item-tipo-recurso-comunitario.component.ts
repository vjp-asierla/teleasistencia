import {Component, Input, OnInit} from '@angular/core';
import {ITipoRecursoComunitario} from '../../interfaces/i-tipo-recurso-comunitario';

@Component({
  selector: 'app-item-tipo-recurso-comunitario, [app-item-tipo-recurso-comunitario]',
  templateUrl: './item-tipo-recurso-comunitario.component.html',
  styleUrls: ['./item-tipo-recurso-comunitario.component.scss']
})

export class ItemTipoRecursoComunitarioComponent implements OnInit {
  @Input() public tipo_recurso_comunitario: ITipoRecursoComunitario;

  constructor() {
  }

  ngOnInit(): void {
  }
}
