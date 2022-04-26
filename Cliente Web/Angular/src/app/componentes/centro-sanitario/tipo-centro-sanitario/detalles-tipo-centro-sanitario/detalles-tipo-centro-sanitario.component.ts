import {Component, OnInit} from '@angular/core';
import {ITipoCentroSanitario} from '../../../../interfaces/i-tipo-centro-sanitario';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {CargaTipoCentroSanitarioService} from '../../../../servicios/centro-sanitario/tipo-centro-sanitario/carga-tipo-centro-sanitario.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-detalles-tipo-centro-sanitario',
  templateUrl: './detalles-tipo-centro-sanitario.component.html',
  styleUrls: ['./detalles-tipo-centro-sanitario.component.scss']
})

export class DetallesTipoCentroSanitarioComponent implements OnInit {
  public tipo_centro_sanitario: ITipoCentroSanitario;
  public idTipoCentroSanitario: number;

  constructor(private route: ActivatedRoute, private titleService: Title, private cargaTiposCentrosSanitarios: CargaTipoCentroSanitarioService, private router: Router) {
  }

  ngOnInit(): void {
    this.tipo_centro_sanitario = this.route.snapshot.data['tipo_centro_sanitario'];
    this.idTipoCentroSanitario = this.route.snapshot.params['id'];
    this.titleService.setTitle('Modificar tipo centro sanitario ' + this.idTipoCentroSanitario);
  }

  modificarTipoCentroSanitario(): void {
    this.cargaTiposCentrosSanitarios.modificarTipoCentroSanitario(this.tipo_centro_sanitario).subscribe(
      e => {
        console.log('Tipo centro sanitario ' + e.id + ' modificado');
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
      title: 'Tipo de Centro Sanitario Modificado Correctamente'
    })

  }
}
