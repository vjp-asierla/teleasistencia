import {Component, OnInit} from '@angular/core';
import {ITipoAlarma} from "../../../interfaces/i-tipo-alarma";
import {IClasificacionAlarma} from "../../../interfaces/i-clasificacion-alarma";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {CargaTipoAlarmaService} from "../../../servicios/carga-tipo-alarma.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-detalles-tipo-alarma',
  templateUrl: './modificar-tipo-alarma.component.html',
  styleUrls: ['./modificar-tipo-alarma.component.scss']
})

export class ModificarTipoAlarmaComponent implements OnInit {
  public tipo_alarma: ITipoAlarma;
  public idTipoAlarma: number;
  public clasificaciones_alarmas: IClasificacionAlarma[];

  constructor(private titleService: Title, private route: ActivatedRoute, private cargaTiposAlarmas: CargaTipoAlarmaService, private router: Router) {
  }

  ngOnInit(): void {
    this.tipo_alarma = this.route.snapshot.data['tipo_alarma'];
    this.idTipoAlarma = this.route.snapshot.params['id'];
    this.clasificaciones_alarmas = this.route.snapshot.data['clasificaciones_alarmas'];
    this.titleService.setTitle('Modificar tipo alarma ' + this.idTipoAlarma);
  }

  optionSelected(i: number): void {
    document.getElementsByClassName('clasificacion_alarma_option')[i].setAttribute('selected', '');
  }

  modificarTipoAlarma(): void {
    this.cargaTiposAlarmas.modificarTipoAlarma(this.tipo_alarma).subscribe(
      e => {
        console.log('Tipo alarma ' + e.id + ' modificado');
        console.log(this.tipo_alarma);
        this.router.navigate(['/tipos_alarmas']);
      },
      error => {
        console.log(error);
      }
    );
  }
  executeExample() :void{
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
      title: 'Alarma Modificada Correctamente'
    })

  }
}
