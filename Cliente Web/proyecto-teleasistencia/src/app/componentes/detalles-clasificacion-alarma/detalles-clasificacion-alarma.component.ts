import {Component, OnInit} from '@angular/core';
import {IClasificacionAlarma} from '../../interfaces/i-clasificacion-alarma';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {CargaClasificacionAlarmaService} from '../../servicios/carga-clasificacion-alarma.service';

@Component({
  selector: 'app-detalles-clasificacion-alarma',
  templateUrl: './detalles-clasificacion-alarma.component.html',
  styleUrls: ['./detalles-clasificacion-alarma.component.scss']
})

export class DetallesClasificacionAlarmaComponent implements OnInit {
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
}
