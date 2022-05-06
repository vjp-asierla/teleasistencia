import {Component, OnInit} from '@angular/core';
import {ITipoCentroSanitario} from '../../../interfaces/i-tipo-centro-sanitario';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {CargaTipoCentroSanitarioService} from '../../../servicios/carga-tipo-centro-sanitario.service';
import {TipoCentroSanitario} from '../../../clases/tipo-centro-sanitario';
import Swal from "sweetalert2";

@Component({
  selector: 'app-nuevo-tipo-centro-sanitario',
  templateUrl: './crear-tipo-centro-sanitario.component.html',
  styleUrls: ['./crear-tipo-centro-sanitario.component.scss']
})

export class CrearTipoCentroSanitarioComponent implements OnInit {
  public tipo_centro_sanitario: ITipoCentroSanitario;

  constructor(private titleService: Title, private route: ActivatedRoute, private cargaTiposCentrosSanitarios: CargaTipoCentroSanitarioService, private router: Router) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Nuevo tipo centro sanitario');
    this.tipo_centro_sanitario = new TipoCentroSanitario();
  }

  nuevoTipoCentroSanitario(): void {
    this.cargaTiposCentrosSanitarios.nuevoTipoCentroSanitario(this.tipo_centro_sanitario).subscribe(
      e => {
        console.log('Tipo centro sanitario creado');
        console.log(this.tipo_centro_sanitario);
        this.router.navigate(['/tipos_centros_sanitarios']);
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
      title: 'Tipo de Centro Sanitario Creado Correctamente'
    })

  }
}
