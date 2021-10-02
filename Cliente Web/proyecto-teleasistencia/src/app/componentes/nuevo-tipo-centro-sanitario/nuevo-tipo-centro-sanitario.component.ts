import { Component, OnInit } from '@angular/core';
import {ITipoCentroSanitario} from "../../interfaces/i-tipo-centro-sanitario";
import {TipoCentroSanitario} from "../../clases/tipo-centro-sanitario";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {CargaTipoCentroSanitarioService} from "../../servicios/carga-tipo-centro-sanitario.service";

@Component({
  selector: 'app-nuevo-tipo-centro-sanitario',
  templateUrl: './nuevo-tipo-centro-sanitario.component.html',
  styleUrls: ['./nuevo-tipo-centro-sanitario.component.scss']
})
export class NuevoTipoCentroSanitarioComponent implements OnInit {
  public tipo_centro_sanitario: ITipoCentroSanitario;

  constructor(private route: ActivatedRoute, private titleServide: Title, private cargaTiposCentrosSanitarios: CargaTipoCentroSanitarioService, private router: Router) {
    this.tipo_centro_sanitario = new TipoCentroSanitario();
  }

  ngOnInit(): void {
    this.titleServide.setTitle('Crear nuevo tipo centro sanitario');
  }

  nuevoTipoCentroSanitario(): void {
    console.log(this.tipo_centro_sanitario);
    this.cargaTiposCentrosSanitarios.nuevoTipoCentroSanitario(this.tipo_centro_sanitario).subscribe(u => {
      console.log('Tipo centro sanitario creado');
      this.router.navigate(['/tipos_centros_sanitarios']);
    });
  }

}
