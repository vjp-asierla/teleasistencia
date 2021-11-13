import {Component, OnInit} from '@angular/core';
import {IPersona} from "../../interfaces/i-persona";
import {IDireccion} from "../../interfaces/i-direccion";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {CargaPersonaService} from "../../servicios/carga-persona.service";
import {Persona} from "../../clases/persona";
import {CargaDireccionService} from "../../servicios/carga-direccion.service";

@Component({
  selector: 'app-detalles-persona',
  templateUrl: './detalles-persona.component.html',
  styleUrls: ['./detalles-persona.component.scss']
})
export class DetallesPersonaComponent implements OnInit {
  public persona: IPersona;
  public idPersona: number;
  public dire: IDireccion;
  public fecha_actual = new Date();
  public anno_actual = this.fecha_actual.getFullYear();
  public mes_actual = this.fecha_actual.getMonth() + 1;
  public dia_actual = this.fecha_actual.getDate();

  constructor(private route: ActivatedRoute, private titleService: Title, private cargaDirecciones: CargaDireccionService, private cargaPersonas: CargaPersonaService, private router: Router) {
  }

  ngOnInit(): void {
    this.persona = this.route.snapshot.data['persona'];
    this.idPersona = this.route.snapshot.params['id'];
    this.dire = this.persona.id_direccion;
    this.titleService.setTitle('Modificar persona ' + this.idPersona);
  }

  modificarDireccion(): void {
    this.cargaDirecciones.modificarDireccion(this.dire).subscribe(
      e => {
        console.log('Dirección ' + e.id + ' modificada');
        this.router.navigate(['/personas']);
      },
      error => {
        console.log(error);
      }
    );
  }




  modificarPersona(): void {
    this.persona.id_direccion = this.dire;
    this.cargaPersonas.modificarPersona(this.persona).subscribe(
      async e => {
        await this.modificarDireccion();
        console.log('Persona ' + e.id + ' modificada');
        console.log(this.persona);
      },
      error => {
        console.log(error);
      }
    );
  }
}
