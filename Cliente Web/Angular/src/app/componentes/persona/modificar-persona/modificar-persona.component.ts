import {Component, OnInit} from '@angular/core';
import {IPersona} from '../../../interfaces/i-persona';
import {IDireccion} from '../../../interfaces/i-direccion';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {CargaPersonaService} from '../../../servicios/carga-persona.service';
import {CargaDireccionService} from '../../../servicios/carga-direccion.service';
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";



@Component({
  selector: 'app-modificar-persona',
  templateUrl: './modificar-persona.component.html',
  styleUrls: ['./modificar-persona.component.scss']
})

export class ModificarPersonaComponent implements OnInit {
  public persona: IPersona;
  public idPersona: number;
  public dire: IDireccion;
  public fecha_actual = new Date();
  public anno_actual = this.fecha_actual.getFullYear();
  public mes_actual = this.fecha_actual.getMonth() + 1;
  public dia_actual = this.fecha_actual.getDate();

  constructor(private route: ActivatedRoute, private titleService: Title, private cargaDirecciones: CargaDireccionService, private cargaPersonas: CargaPersonaService, private router: Router) {
  }

  ngOnInit(): void {
    this.persona = this.route.snapshot.data['persona'];
    this.idPersona = this.route.snapshot.params['id'];
    this.dire = this.persona.id_direccion;
    this.titleService.setTitle('Modificar persona ' + this.idPersona);
  }

  modificarDireccion(): void {
    this.cargaDirecciones.modificarDireccion(this.dire).subscribe(
      e => {
        this.router.navigate(['/personas']);
      },
      error => {
        console.log(error);
      }
    );
  }

  modificarPersona(): void {
    this.persona.id_direccion = this.dire;
    this.cargaPersonas.modificarPersona(this.persona).subscribe(
       e => {
         this.modificarDireccion();
         this.alertExito()
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
