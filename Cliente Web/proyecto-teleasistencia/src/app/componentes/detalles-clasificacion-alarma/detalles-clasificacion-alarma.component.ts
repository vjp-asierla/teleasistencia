import {Component, OnInit} from '@angular/core';
import {IClasificacionAlarma} from "../../interfaces/i-clasificacion-alarma";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {CargaClasificacionAlarmaService} from "../../servicios/carga-clasificacion-alarma.service";

@Component({
  selector: 'app-detalles-clasificacion-alarma',
  templateUrl: './detalles-clasificacion-alarma.component.html',
  styleUrls: ['./detalles-clasificacion-alarma.component.scss']
})

export class DetallesClasificacionAlarmaComponent implements OnInit {
  public clasificacion_alarma: IClasificacionAlarma;
  public idClasificacionAlarma: number;

  constructor(private titleServide: Title, private route: ActivatedRoute, private cargaClasificacionesAlarmas: CargaClasificacionAlarmaService, private router: Router) {
  }

  ngOnInit(): void {
    this.titleServide.setTitle('Modificar clasificación alarma ' + this.idClasificacionAlarma);
    this.clasificacion_alarma = this.route.snapshot.data['clasificacion_alarma'];
    this.idClasificacionAlarma = this.route.snapshot.params['id'];
  }

  modificarClasificacionAlarma(): void {
    this.cargaClasificacionesAlarmas.modificarClasificacionAlarma(this.clasificacion_alarma).subscribe(
      e => {
        console.log('Clasificación alarma ' + e.id + ' modificada');
        this.router.navigate(['/clasificaciones_alarmas']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
