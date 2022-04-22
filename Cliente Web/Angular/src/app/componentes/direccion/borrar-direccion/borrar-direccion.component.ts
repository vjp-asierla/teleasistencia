import {Component, Input, OnInit} from '@angular/core';
import {IDireccion} from "../../../interfaces/i-direccion";
import {CargaDireccionService} from "../../../servicios/direccion/carga-direccion.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-borrar-direccion',
  templateUrl: './borrar-direccion.component.html',
  styleUrls: ['./borrar-direccion.component.scss']
})
export class BorrarDireccionComponent implements OnInit {

  @Input() public direccion: IDireccion
  constructor(private cargaDirecciones: CargaDireccionService,private router: Router) { }

  ngOnInit(): void {
  }

  eliminarDireccion(direccion: IDireccion) : void{
    console.log(direccion);
    this.cargaDirecciones.eliminarDireccion(direccion).subscribe(
      e=>{
        console.log(direccion);
        console.log('Dirección ' + direccion.id + ' eliminada');
        this.router.navigate(['/direcciones']);
      },
      error => {
        console.log(error);
      }
    )
  }
}
