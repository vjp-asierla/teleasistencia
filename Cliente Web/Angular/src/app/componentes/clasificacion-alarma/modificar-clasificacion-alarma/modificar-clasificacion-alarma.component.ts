import {Component, OnInit} from '@angular/core';
import {IClasificacionAlarma} from '../../../interfaces/i-clasificacion-alarma';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {CargaClasificacionAlarmaService} from '../../../servicios/carga-clasificacion-alarma.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-detalles-clasificacion-alarma',
  templateUrl: './modificar-clasificacion-alarma.component.html',
  styleUrls: ['./modificar-clasificacion-alarma.component.scss']
})

export class ModificarClasificacionAlarmaComponent implements OnInit {
  public clasificacion_alarma: IClasificacionAlarma;
  public idClasificacionAlarma: number;

  constructor(private route: ActivatedRoute, private titleService: Title, private cargaClasificacionesAlarmas: CargaClasificacionAlarmaService, private router: Router) {
  }

  ngOnInit(): void {
    this.clasificacion_alarma = this.route.snapshot.data['clasificacion_alarma'];
    this.idClasificacionAlarma = this.route.snapshot.params['id'];
    this.titleService.setTitle('Modificar clasificación alarma ' + this.idClasificacionAlarma);
  }

  modificarClasificacionAlarma(): void {
    this.cargaClasificacionesAlarmas.modificarClasificacionAlarma(this.clasificacion_alarma).subscribe(
      e => {
        console.log('Clasificación alarma ' + e.id + ' modificada');
        console.log(this.clasificacion_alarma);
        this.router.navigate(['/clasificaciones_alarmas']);
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
      title: 'Clasificación Alarma Modificada Correctamente'
    })

  }
}
