import {Component, OnInit} from '@angular/core';
import {IUsers} from '../../../interfaces/i-users';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {CargaUserService} from '../../../servicios/carga-user.service';
import Swal from "sweetalert2";
import {IGrupo} from "../../../interfaces/i-grupo";
import {CargaGrupoService} from "../../../servicios/carga-grupo.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-modificar-user',
  templateUrl: './modificar-user.component.html',
  styleUrls: ['./modificar-user.component.scss']
})

export class ModificarUserComponent implements OnInit {
  public user: IUsers;
  public idUser: number;
  public grupos: IGrupo[];


  constructor(private route: ActivatedRoute, private titleService: Title, private cargaUsers: CargaUserService, private router: Router, private cargaGrupo : CargaGrupoService) {
  }

  ngOnInit(): void {
    this.user = this.route.snapshot.data['user'];
    this.idUser = this.route.snapshot.params['id'];
    this.titleService.setTitle('Modificar usuario ' + this.idUser);
    this.cargaGrupo.getGroup().subscribe(
      resp=>{
        this.grupos  = resp
      }
    )
    console.log(this.user);

    this.user.groups = this.user.groups[0].id;

  }

  optionSelected(i: number): void {
    document.getElementsByClassName('grupo_option')[i].setAttribute('selected', '');
  }

  modificarUser(): void {
    this.cargaUsers.modificarUser(this.user).subscribe(
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
      title: environment.fraseModificar,
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
      title: environment.fraseErrorModificar
    })
  }

}
