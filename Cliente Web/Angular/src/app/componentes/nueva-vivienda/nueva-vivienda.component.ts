import { Component, OnInit } from '@angular/core';
import {ITipoVivienda} from "../../interfaces/i-tipo-vivienda";
import {Persona} from "../../clases/persona";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {CargaViviendaService} from "../../servicios/carga-vivienda.service";

@Component({
  selector: 'app-nueva-vivienda',
  templateUrl: './nueva-vivienda.component.html',
  styleUrls: ['./nueva-vivienda.component.scss']
})
export class NuevaViviendaComponent implements OnInit {
  public vivienda: ITipoVivienda;
  public nombreVivienda: string;

  constructor(private titleService: Title, private route: ActivatedRoute, private router: Router, private cargaVivienda: CargaViviendaService ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Crear nueva vivienda');
    this.vivienda = new Persona();
    this.nombreVivienda = '';
  }

  nuevaVivienda(): void{
    this.cargaVivienda.nuevaVivienda(this.vivienda).subscribe(
      e => {
        console.log('Vivienda creada');
        console.log(this.vivienda);
        this.router.navigate(['/vivienda']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
