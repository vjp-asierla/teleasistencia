import {Component, OnInit} from '@angular/core';
import {IDireccion} from '../../../interfaces/i-direccion';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {CargaDireccionService} from '../../../servicios/direccion/carga-direccion.service';

@Component({
  selector: 'app-detalles-direccion',
  templateUrl: './detalles-direccion.component.html',
  styleUrls: ['./detalles-direccion.component.scss']
})

export class DetallesDireccionComponent implements OnInit {
  public dire: IDireccion;
  public idDireccion: number;

  constructor(private route: ActivatedRoute, private titleService: Title, private cargaDirecciones: CargaDireccionService, private router: Router) {
  }

  ngOnInit(): void {
    this.idDireccion = this.route.snapshot.params['id'];
    this.dire = this.route.snapshot.data['direccion'];
    this.titleService.setTitle('Modificar dirección ' + this.idDireccion);
  }

  modificarDireccion(): void {
    this.cargaDirecciones.modificarDireccion(this.dire).subscribe(
      e => {
        console.log('Dirección ' + e.id + ' modificada');
        console.log(this.dire);
        this.router.navigate(['/direcciones']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
