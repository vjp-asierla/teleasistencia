import {Component, Input, OnInit} from '@angular/core';
import {IDireccion} from '../../../interfaces/i-direccion';
import {CargaDireccionService} from "../../../servicios/direccion/carga-direccion.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-item-direccion, [app-item-direccion]',
  templateUrl: './item-direccion.component.html',
  styleUrls: ['./item-direccion.component.scss']
})

export class ItemDireccionComponent implements OnInit {
  @Input() public direccion: IDireccion;
  private pulsedDirection: IDireccion = null;

  constructor(private cargaDirecciones: CargaDireccionService,private router: Router,private route: ActivatedRoute, private titleService: Title) {
  }

  ngOnInit(): void {
  }

  modalConfirmacion(): void {
    Swal.fire({
      title: '¿Está seguro que desea eliminar esta dirección?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.eliminarDireccion()
      }
    })
  }
  eliminarDireccion() : void{
    this.cargaDirecciones.eliminarDireccion(this.direccion).subscribe(
      e=>{
        console.log(this.direccion);
        console.log('Dirección ' + this.direccion.id + ' eliminada');
        this.router.navigate(['/direcciones']);
      },
      error => {
        console.log(error);
      }
    )
  }




}
