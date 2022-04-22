import {Component, Input, OnInit} from '@angular/core';
import {IDireccion} from '../../../interfaces/i-direccion';
import {CargaDireccionService} from "../../../servicios/direccion/carga-direccion.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

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

  estaPulsado(direccion: IDireccion) : void{
    console.log(direccion.id);
    this.pulsedDirection = direccion;
  }

  eliminarDireccion() : void{
    console.log(this.pulsedDirection);
    this.cargaDirecciones.eliminarDireccion(this.pulsedDirection).subscribe(
      e=>{
        console.log(this.pulsedDirection);
        console.log('Dirección ' + this.pulsedDirection.id + ' eliminada');
        this.router.navigate(['/direcciones']);
      },
      error => {
        console.log(error);
      }
    )
  }




}
