import { Component, OnInit } from '@angular/core';
import {ITipoCentroSanitario} from "../../interfaces/i-tipo-centro-sanitario";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {CargaTipoCentroSanitarioService} from "../../servicios/carga-tipo-centro-sanitario.service";

@Component({
  selector: 'app-detalles-tipo-centro-sanitario',
  templateUrl: './detalles-tipo-centro-sanitario.component.html',
  styleUrls: ['./detalles-tipo-centro-sanitario.component.scss']
})
export class DetallesTipoCentroSanitarioComponent implements OnInit {
  public tipo_centro_sanitario: ITipoCentroSanitario;
  public idTipoCentroSanitario: number;

  constructor(private route: ActivatedRoute, private titleServide: Title, private cargaTiposCentrosSanitarios: CargaTipoCentroSanitarioService, private router: Router) { }

  ngOnInit(): void {
    this.idTipoCentroSanitario = this.route.snapshot.params['id'];
    this.tipo_centro_sanitario = this.route.snapshot.data['tipo_centro_sanitario'];
    this.titleServide.setTitle('Modificar tipo centro sanitario ' + this.idTipoCentroSanitario);
  }

  modificarTipoCentroSanitario(): void {
    console.log(this.tipo_centro_sanitario);
    this.cargaTiposCentrosSanitarios.modificarTipoCentroSanitario(this.tipo_centro_sanitario).subscribe(u => {
      console.log('Tipo centro sanitario modificado');
      this.router.navigate(['/tipos_centros_sanitarios']);
    });
  }

}
