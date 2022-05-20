import {Component, OnInit} from '@angular/core';
import {IUsers} from '../../../interfaces/i-users';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {CargaUserService} from '../../../servicios/carga-user.service';
import {User} from '../../../clases/user';
import Swal from "sweetalert2";
import {IRecursoComunitario} from "../../../interfaces/i-recurso-comunitario";
import {IGrupo} from "../../../interfaces/i-grupo";
import {Grupo} from "../../../clases/grupo";
import {CargaGrupoService} from "../../../servicios/carga-grupo.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-crear-user',
  templateUrl: './crear-user.component.html',
  styleUrls: ['./crear-user.component.scss']
})

export class CrearUserComponent implements OnInit {
  public user: IUsers;
  public grupos: IGrupo[];

  constructor(private titleService: Title, private route: ActivatedRoute, private cargaUsers: CargaUserService, private router: Router,private cargaGrupo :CargaGrupoService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Nuevo usuario del sistema');
    this.user = new User();
    this.cargaGrupo.getGroup().subscribe(
      resp=>{
      this.grupos  = resp
      console.log(this.grupos)
      }
    )

  }

  nuevoUser(): void {
    this.cargaUsers.nuevoUser(this.user).subscribe(
      e => {
        this.alertExito()
        this.router.navigate(['/usuarios']);
      },
      error => {
        this.alertError()
      }
    );
  }
  //Toast para el Alert indicando que la operación fue exitosa
  alertExito() :void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      //El tiempo que permanece la alerta, se obtiene mediante una variable global en environment.ts
      timer: environment.timerToast,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: environment.fraseCrear,
    })
  }
  //Toast para el alert indicando que hubo algún error en la operación
  alertError() :void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: environment.timerToast,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'error',
      title: environment.fraseErrorCrear
    })
  }
}
