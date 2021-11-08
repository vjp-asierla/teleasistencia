import {Component, OnInit} from '@angular/core';
import {IPersona} from "../../interfaces/i-persona";
import {IDireccion} from "../../interfaces/i-direccion";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {CargaPersonaService} from "../../servicios/carga-persona.service";
import {Persona} from "../../clases/persona";

@Component({
  selector: 'app-detalles-persona',
  templateUrl: './detalles-persona.component.html',
  styleUrls: ['./detalles-persona.component.scss']
})
export class DetallesPersonaComponent implements OnInit {
  public persona: IPersona;
  public idPersona: number;
  public direcciones: IDireccion[];
  public fecha_actual = new Date();
  public anno_actual = this.fecha_actual.getFullYear();
  public mes_actual = this.fecha_actual.getMonth() + 1;
  public dia_actual = this.fecha_actual.getDate();

  constructor(private route: ActivatedRoute, private titleService: Title, private cargaPersonas: CargaPersonaService, private router: Router) {
  }

  ngOnInit(): void {
    this.persona = this.route.snapshot.data['persona'];
    this.idPersona = this.route.snapshot.params['id'];
    this.direcciones = this.route.snapshot.data['direcciones'];
    this.titleService.setTitle('Modificar persona ' + this.idPersona);
  }

  optionSelected(i: number): void {
    document.getElementsByClassName('direccion_option')[i].setAttribute('selected', '');
  }

  modificarPersona(): void {
    this.cargaPersonas.modificarPersona(this.persona).subscribe(
      e => {
        console.log('Persona ' + e.id + ' modificada');
        console.log(this.persona);
        this.router.navigate(['/personas']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
