import {Component, OnInit} from '@angular/core';
import {ITipoCentroSanitario} from "../../interfaces/i-tipo-centro-sanitario";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {CargaTipoCentroSanitarioService} from "../../servicios/carga-tipo-centro-sanitario.service";

@Component({
  selector: 'app-detalles-tipo-centro-sanitario',
  templateUrl: './detalles-tipo-centro-sanitario.component.html',
  styleUrls: ['./detalles-tipo-centro-sanitario.component.scss']
})

export class DetallesTipoCentroSanitarioComponent implements OnInit {
  public tipo_centro_sanitario: ITipoCentroSanitario;
  public idTipoCentroSanitario: number;

  constructor(private titleServide: Title, private route: ActivatedRoute, private cargaTiposCentrosSanitarios: CargaTipoCentroSanitarioService, private router: Router) {
  }

  ngOnInit(): void {
    this.titleServide.setTitle('Modificar tipo centro sanitario ' + this.idTipoCentroSanitario);
    this.tipo_centro_sanitario = this.route.snapshot.data['tipo_centro_sanitario'];
    this.idTipoCentroSanitario = this.route.snapshot.params['id'];
  }

  modificarTipoCentroSanitario(): void {
    console.log(this.tipo_centro_sanitario);
    this.cargaTiposCentrosSanitarios.modificarTipoCentroSanitario(this.tipo_centro_sanitario).subscribe(
      e => {
        console.log('Tipo centro sanitario ' + e.id + ' modificado');
        this.router.navigate(['/tipos_centros_sanitarios']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
