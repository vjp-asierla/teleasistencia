import {Component, OnInit} from '@angular/core';
import {IUsers} from '../../interfaces/i-users';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-lista-users',
  templateUrl: './lista-users.component.html',
  styleUrls: ['./lista-users.component.scss']
})

export class ListaUsersComponent implements OnInit {
  public users: IUsers[];

  constructor(private route: ActivatedRoute, private titleService: Title) {
  }

  ngOnInit(): void {
    this.users = this.route.snapshot.data['users'];
    this.titleService.setTitle('Usuarios del sistema');
  }
}
