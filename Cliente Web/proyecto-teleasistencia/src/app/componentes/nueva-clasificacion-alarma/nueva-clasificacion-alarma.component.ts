import {Component, OnInit} from '@angular/core';
import {IClasificacionAlarma} from "../../interfaces/i-clasificacion-alarma";
import {ClasificacionAlarma} from "../../clases/clasificacion-alarma";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {CargaClasificacionAlarmaService} from "../../servicios/carga-clasificacion-alarma.service";

@Component({
  selector: 'app-nueva-clasificacion-alarma',
  templateUrl: './nueva-clasificacion-alarma.component.html',
  styleUrls: ['./nueva-clasificacion-alarma.component.scss']
})
export class NuevaClasificacionAlarmaComponent implements OnInit {
  public clasificacion_alarma: IClasificacionAlarma;

  constructor(private route: ActivatedRoute, private titleServide: Title, private cargaClasificacionesAlarmas: CargaClasificacionAlarmaService, private router: Router) {
    this.clasificacion_alarma = new ClasificacionAlarma();
  }

  ngOnInit(): void {
    this.titleServide.setTitle('Crear nueva clasificación alarma');
  }

  nuevaClasificacionAlarma(): void {
    console.log(this.clasificacion_alarma);
    this.cargaClasificacionesAlarmas.nuevaClasificacionAlarma(this.clasificacion_alarma).subscribe(u => {
      console.log('Clasificación alarma creada');
      this.router.navigate(['/clasificaciones_alarmas']);
    });
  }

}
