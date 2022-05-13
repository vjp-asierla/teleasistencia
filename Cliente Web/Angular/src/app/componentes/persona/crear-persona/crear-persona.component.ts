import {Component, OnInit} from '@angular/core';
import {IPersona} from '../../../interfaces/i-persona';
import {IDireccion} from '../../../interfaces/i-direccion';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {CargaPersonaService} from '../../../servicios/carga-persona.service';
import {Persona} from '../../../clases/persona';
import Swal from "sweetalert2";



@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.scss']
})

export class CrearPersonaComponent implements OnInit {
  public persona: IPersona;
  public direcciones: IDireccion[];
  public fecha_actual = new Date();
  public anno_actual = this.fecha_actual.getFullYear();
  public mes_actual = this.fecha_actual.getMonth() + 1;
  public dia_actual = this.fecha_actual.getDate();

  constructor(private titleService: Title, private route: ActivatedRoute, private cargaPersonas: CargaPersonaService, private router: Router) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Crear nueva persona');
    this.persona = new Persona();
    this.direcciones = this.route.snapshot.data['direcciones'];
    this.persona.sexo = 'Hombre';
    this.persona.telefono_fijo = '';
    this.persona.telefono_movil = '';
    this.persona.localidad = '';
    this.persona.provincia = '';
    this.persona.direccion = '';
    this.persona.codigo_postal= '';
  }

  nuevaPersona(): void {
    this.cargaPersonas.nuevaPersona(this.persona).subscribe(
      e => {
        console.log('Persona creada');
        console.log(this.persona);
        this.router.navigate(['/personas']);
      },
      error => {
        console.log(error);
      }
    );
  }
  ejecutarAlerta() :void{
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Persona Creada Correctamente'
    })

  }
}
