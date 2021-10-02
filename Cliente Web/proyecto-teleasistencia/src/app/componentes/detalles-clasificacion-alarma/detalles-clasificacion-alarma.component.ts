import { Component, OnInit } from '@angular/core';
import {IClasificacionAlarma} from "../../interfaces/i-clasificacion-alarma";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {CargaClasificacionAlarmaService} from "../../servicios/carga-clasificacion-alarma.service";

@Component({
  selector: 'app-detalles-clasificacion-alarma',
  templateUrl: './detalles-clasificacion-alarma.component.html',
  styleUrls: ['./detalles-clasificacion-alarma.component.scss']
})
export class DetallesClasificacionAlarmaComponent implements OnInit {
  public clasificacionAlarma: IClasificacionAlarma;
  public idClasificacionAlarma: number;

  constructor(private route: ActivatedRoute, private titleServide: Title, private cargaClasificacionesAlarmas: CargaClasificacionAlarmaService, private router: Router) {
  }

  ngOnInit(): void {
    this.idClasificacionAlarma = this.route.snapshot.params['id'];
    this.clasificacionAlarma = this.route.snapshot.data['clasificacion_alarma'];
    this.titleServide.setTitle('Modificar clasificación alarma ' + this.idClasificacionAlarma);
  }

  modificarClasificacionAlarma(): void {
    console.log(this.clasificacionAlarma);
    this.cargaClasificacionesAlarmas.modificaClasificacionAlarma(this.clasificacionAlarma).subscribe(u => {
      console.log('Clasificación alarma modificada');
      this.router.navigate(['/clasificaciones_alarmas']);
    });
  }

}
