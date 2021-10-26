import {Component, OnInit} from '@angular/core';
import {ITipoAlarma} from "../../interfaces/i-tipo-alarma";
import {IClasificacionAlarma} from "../../interfaces/i-clasificacion-alarma";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {CargaTipoAlarmaService} from "../../servicios/carga-tipo-alarma.service";

@Component({
  selector: 'app-detalles-tipo-alarma',
  templateUrl: './detalles-tipo-alarma.component.html',
  styleUrls: ['./detalles-tipo-alarma.component.scss']
})

export class DetallesTipoAlarmaComponent implements OnInit {
  public tipo_alarma: ITipoAlarma;
  public idTipoAlarma: number;
  public clasificaciones_alarmas: IClasificacionAlarma[];

  constructor(private titleServide: Title, private route: ActivatedRoute, private cargaTiposAlarmas: CargaTipoAlarmaService, private router: Router) {
  }

  ngOnInit(): void {
    this.titleServide.setTitle('Modificar tipo alarma ' + this.idTipoAlarma);
    this.tipo_alarma = this.route.snapshot.data['tipo_alarma'];
    this.idTipoAlarma = this.route.snapshot.params['id'];
    this.clasificaciones_alarmas = this.route.snapshot.data['clasificaciones_alarmas'];
  }

  modificarTipoAlarma(): void {
    console.log(this.tipo_alarma);
    this.cargaTiposAlarmas.modificarTipoAlarma(this.tipo_alarma).subscribe(
      e => {
        console.log('Tipo alarma ' + e.id + ' modificado');
        this.router.navigate(['/tipos_alarmas']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
