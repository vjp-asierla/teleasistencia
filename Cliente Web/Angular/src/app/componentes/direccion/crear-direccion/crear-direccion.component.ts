import {Component, OnInit} from '@angular/core';
import {IDireccion} from '../../../interfaces/i-direccion';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {CargaDireccionService} from '../../../servicios/carga-direccion.service';
import {Direccion} from '../../../clases/direccion';

@Component({
  selector: 'app-crear-direccion',
  templateUrl: './crear-direccion.component.html',
  styleUrls: ['./crear-direccion.component.scss']
})

export class CrearDireccionComponent implements OnInit {
  public dire: IDireccion;

  constructor(private titleService: Title, private route: ActivatedRoute, private cargaDirecciones: CargaDireccionService, private router: Router) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Nueva dirección');
    this.dire = new Direccion();
  }

  nuevaDireccion(): void {
    this.cargaDirecciones.nuevaDireccion(this.dire).subscribe(
      e => {
        console.log('Dirección creada');
        console.log(this.dire);
        this.router.navigate(['/direcciones']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
