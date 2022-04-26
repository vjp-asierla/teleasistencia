import {Component, OnInit} from '@angular/core';
import {ICentroSanitario} from '../../../interfaces/i-centro-sanitario';
import {ITipoCentroSanitario} from '../../../interfaces/i-tipo-centro-sanitario';
import {IDireccion} from '../../../interfaces/i-direccion';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {CargaCentroSanitarioService} from '../../../servicios/centro-sanitario/carga-centro-sanitario.service';
import {CentroSanitario} from '../../../clases/centro-sanitario';
import {Direccion} from '../../../clases/direccion';
import {CargaDireccionService} from '../../../servicios/direccion/carga-direccion.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-nuevo-centro-sanitario',
  templateUrl: './nuevo-centro-sanitario.component.html',
  styleUrls: ['./nuevo-centro-sanitario.component.scss']
})

export class NuevoCentroSanitarioComponent implements OnInit {
  public centro_sanitario: ICentroSanitario;
  public tipos_centros_sanitarios: ITipoCentroSanitario[];
  public dire: IDireccion;


  constructor(private titleService: Title, private route: ActivatedRoute, private cargaDirecciones: CargaDireccionService, private cargaCentrosSanitarios: CargaCentroSanitarioService, private router: Router) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Nuevo centro sanitario');
    this.centro_sanitario = new CentroSanitario();
    this.tipos_centros_sanitarios = this.route.snapshot.data['tipos_centros_sanitarios'];
    this.dire = new Direccion();
  }

  nuevaDireccion(): void {
    this.cargaDirecciones.nuevaDireccion(this.dire).subscribe(
      e => {
        this.router.navigate(['/centros_sanitarios']);
      },
      error => {
        console.log(error);
      }
    );
  }

  nuevoCentroSanitario(): void {
    this.centro_sanitario.id_direccion = this.dire;
    this.cargaCentrosSanitarios.nuevoCentroSanitario(this.centro_sanitario).subscribe(
      e => {
        this.nuevaDireccion();
        console.log('Centro sanitario creado');
        console.log(this.centro_sanitario);
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
      title: 'Centro Sanitario Creado Correctamente'
    })

  }
}
