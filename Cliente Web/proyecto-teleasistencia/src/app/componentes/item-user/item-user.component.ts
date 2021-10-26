import {Component, Input, OnInit} from '@angular/core';
import {IUsers} from "../../interfaces/i-users";

@Component({
  selector: 'app-item-user, [app-item-user]',
  templateUrl: './item-user.component.html',
  styleUrls: ['./item-user.component.scss']
})
export class ItemUserComponent implements OnInit {
  @Input() public user: IUsers;

  constructor() {
  }

  ngOnInit(): void {
    this.user.id = Number(this.user.url.substr(37));
  }
}
