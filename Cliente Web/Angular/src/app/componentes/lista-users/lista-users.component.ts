import {Component, OnInit} from '@angular/core';
import {IUsers} from '../../interfaces/i-users';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {FiltroTablasService} from "../../servicios/filtro-tablas.service";

@Component({
  selector: 'app-lista-users',
  templateUrl: './lista-users.component.html',
  styleUrls: ['./lista-users.component.scss']
})

export class ListaUsersComponent implements OnInit {
  public users: IUsers[];
  numPaginacion: number = 1;

  constructor(private route: ActivatedRoute, private titleService: Title, private filtradoTabla: FiltroTablasService) {
  }

  ngOnInit(): void {
    this.users = this.route.snapshot.data['users'];
    this.titleService.setTitle('Usuarios del sistema');
  }

  filtroTabla(indice: number, tipo: string){
    this.filtradoTabla.filtroService(indice, tipo);
  }
}
