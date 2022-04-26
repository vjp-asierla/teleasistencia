import { Component, OnInit } from '@angular/core';
import {ITipoVivienda} from "../../../interfaces/i-tipo-vivienda";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {CargaViviendaService} from "../../../servicios/carga-vivienda.service";
import {TipoVivienda} from "../../../clases/tipo-vivienda";

@Component({
  selector: 'app-crear-tipo-vivienda',
  templateUrl: './crear-vivienda.component.html',
  styleUrls: ['./crear-vivienda.component.scss']
})
export class CrearViviendaComponent implements OnInit {
  public vivienda: ITipoVivienda;
  public nombreVivienda: string;

  constructor(private titleService: Title, private route: ActivatedRoute, private router: Router, private cargaVivienda: CargaViviendaService ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Crear nueva vivienda');
    this.vivienda = new TipoVivienda();
    this.nombreVivienda = '';
  }

  nuevaVivienda(): void{
    this.cargaVivienda.nuevaVivienda(this.vivienda).subscribe(
      e => {
        console.log('Vivienda creada');
        console.log(this.vivienda);
        this.router.navigate(['/viviendas']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
