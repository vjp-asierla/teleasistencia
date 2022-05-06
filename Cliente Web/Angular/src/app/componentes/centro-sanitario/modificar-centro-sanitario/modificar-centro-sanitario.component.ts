import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {CargaDireccionService} from '../../../servicios/carga-direccion.service';
import {CargaCentroSanitarioService} from '../../../servicios/carga-centro-sanitario.service';
import {ICentroSanitario} from '../../../interfaces/i-centro-sanitario';
import {ITipoCentroSanitario} from '../../../interfaces/i-tipo-centro-sanitario';
import {IDireccion} from '../../../interfaces/i-direccion';
import Swal from "sweetalert2";


@Component({
  selector: 'app-modificar-centro-sanitario',
  templateUrl: './modificar-centro-sanitario.component.html',
  styleUrls: ['./modificar-centro-sanitario.component.scss']
})

export class ModificarCentroSanitarioComponent implements OnInit {
  public centro_sanitario: ICentroSanitario;
  public idCentroSanitario: number;
  public tipos_centros_sanitarios: ITipoCentroSanitario[];
  public dire: IDireccion;

  constructor(private route: ActivatedRoute, private titleService: Title, private cargaDirecciones: CargaDireccionService, private cargaCentrosSanitarios: CargaCentroSanitarioService, private router: Router) {
  }

  ngOnInit(): void {
    this.centro_sanitario = this.route.snapshot.data['centro_sanitario'];
    this.idCentroSanitario = this.route.snapshot.params['id'];
    this.tipos_centros_sanitarios = this.route.snapshot.data['tipos_centros_sanitarios'];
    this.dire = this.centro_sanitario.id_direccion;
    this.titleService.setTitle('Modificar centro sanitario ' + this.idCentroSanitario);
  }

  optionSelected(i: number): void {
    document.getElementsByClassName('tipo_centro_sanitario_option')[i].setAttribute('selected', '');
  }

  modificarDireccion(): void {
    this.cargaDirecciones.modificarDireccion(this.dire).subscribe(
      e => {
        this.router.navigate(['/centros_sanitarios']);
      },
      error => {
        console.log(error);
      }
    );
  }

  modificarCentroSanitario(): void {
    this.centro_sanitario.id_direccion = this.dire;
    this.cargaCentrosSanitarios.modificarCentroSanitario(this.centro_sanitario).subscribe(
      e => {
        this.modificarDireccion();
        console.log('Centro sanitario ' + e.id + ' modificado');
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
      title: 'Centro Sanitario Modificado Correctamente'
    })

  }
}
