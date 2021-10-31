import {Component, OnInit} from '@angular/core';
import {IUsers} from '../../interfaces/i-users';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lista-users',
  templateUrl: './lista-users.component.html',
  styleUrls: ['./lista-users.component.scss']
})

export class ListaUsersComponent implements OnInit {
  public users: IUsers[];

  constructor(private titleServide: Title, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.users = this.route.snapshot.data['users'];
    this.titleServide.setTitle('Usuarios del sistema');
  }
}
