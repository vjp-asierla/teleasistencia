import {Component, OnInit} from '@angular/core';
import {ITipoAlarma} from '../../../interfaces/i-tipo-alarma';
import {IClasificacionAlarma} from '../../../interfaces/i-clasificacion-alarma';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {CargaTipoAlarmaService} from '../../../servicios/alarma/tipo-alarma/carga-tipo-alarma.service';
import {TipoAlarma} from '../../../clases/tipo-alarma';

@Component({
  selector: 'app-nuevo-tipo-alarma',
  templateUrl: './nuevo-tipo-alarma.component.html',
  styleUrls: ['./nuevo-tipo-alarma.component.scss']
})

export class NuevoTipoAlarmaComponent implements OnInit {
  public tipo_alarma: ITipoAlarma;
  public clasificaciones_alarmas: IClasificacionAlarma[];

  constructor(private titleService: Title, private route: ActivatedRoute, private cargaTiposAlarmas: CargaTipoAlarmaService, private router: Router) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Nuevo tipo de alarma');
    this.tipo_alarma = new TipoAlarma();
    this.clasificaciones_alarmas = this.route.snapshot.data['clasificaciones_alarmas'];
    this.tipo_alarma.es_dispositivo = true;
  }

  nuevoTipoAlarma(): void {
    this.cargaTiposAlarmas.nuevoTipoAlarma(this.tipo_alarma).subscribe(
      e => {
        console.log('Tipo alarma creado');
        console.log(this.tipo_alarma);
        this.router.navigate(['/tipos_alarmas']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
