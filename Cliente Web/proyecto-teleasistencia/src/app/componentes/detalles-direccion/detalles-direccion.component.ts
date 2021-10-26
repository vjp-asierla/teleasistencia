import {Component, OnInit} from '@angular/core';
import {IDireccion} from "../../interfaces/i-direccion";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {CargaDireccionService} from "../../servicios/carga-direccion.service";

@Component({
  selector: 'app-detalles-direccion',
  templateUrl: './detalles-direccion.component.html',
  styleUrls: ['./detalles-direccion.component.scss']
})

export class DetallesDireccionComponent implements OnInit {
  public dire: IDireccion;
  public idDireccion: number;

  constructor(private titleServide: Title, private route: ActivatedRoute, private cargaDirecciones: CargaDireccionService, private router: Router) {
  }

  ngOnInit(): void {
    this.titleServide.setTitle('Modificar dirección ' + this.idDireccion);
    this.idDireccion = this.route.snapshot.params['id'];
    this.dire = this.route.snapshot.data['direccion'];
  }

  modificarDireccion(): void {
    console.log(this.dire);
    this.cargaDirecciones.modificarDireccion(this.dire).subscribe(
      e => {
        console.log('Dirección ' + e.id + ' modificada');
        this.router.navigate(['/direcciones']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
