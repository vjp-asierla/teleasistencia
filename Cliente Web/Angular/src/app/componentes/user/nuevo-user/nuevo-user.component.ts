import {Component, OnInit} from '@angular/core';
import {IUsers} from '../../../interfaces/i-users';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {CargaUserService} from '../../../servicios/user/carga-user.service';
import {User} from '../../../clases/user';

@Component({
  selector: 'app-nuevo-user',
  templateUrl: './nuevo-user.component.html',
  styleUrls: ['./nuevo-user.component.scss']
})

export class NuevoUserComponent implements OnInit {
  public user: IUsers;

  constructor(private titleService: Title, private route: ActivatedRoute, private cargaUsers: CargaUserService, private router: Router) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Nuevo usuario del sistema');
    this.user = new User();
  }

  nuevoUser(): void {
    this.user.groups = [];
    this.cargaUsers.nuevoUser(this.user).subscribe(
      e => {
        console.log('Usuario creado');
        console.log(this.user);
        this.router.navigate(['/usuarios']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
