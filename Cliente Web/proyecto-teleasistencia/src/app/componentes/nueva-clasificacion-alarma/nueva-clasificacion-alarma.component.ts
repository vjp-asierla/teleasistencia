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
  public clasificacionAlarma: IClasificacionAlarma;

  constructor(private route: ActivatedRoute, private titleServide: Title, private cargaClasificacionesAlarmas: CargaClasificacionAlarmaService, private router: Router) {
    this.clasificacionAlarma = new ClasificacionAlarma();
  }

  ngOnInit(): void {
    this.titleServide.setTitle('Crear nueva clasificación alarma');
  }

  nuevaClasificacionAlarma(): void {
    console.log(this.clasificacionAlarma);
    this.cargaClasificacionesAlarmas.nuevaClasificacionAlarma(this.clasificacionAlarma).subscribe(u => {
      console.log('Clasificación alarma creada');
      this.router.navigate(['/clasificaciones_alarmas']);
    });
  }

}
