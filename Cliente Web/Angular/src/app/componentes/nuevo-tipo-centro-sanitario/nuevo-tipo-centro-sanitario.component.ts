import {Component, OnInit} from '@angular/core';
import {ITipoCentroSanitario} from '../../interfaces/i-tipo-centro-sanitario';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {CargaTipoCentroSanitarioService} from '../../servicios/carga-tipo-centro-sanitario.service';
import {TipoCentroSanitario} from '../../clases/tipo-centro-sanitario';

@Component({
  selector: 'app-nuevo-tipo-centro-sanitario',
  templateUrl: './nuevo-tipo-centro-sanitario.component.html',
  styleUrls: ['./nuevo-tipo-centro-sanitario.component.scss']
})

export class NuevoTipoCentroSanitarioComponent implements OnInit {
  public tipo_centro_sanitario: ITipoCentroSanitario;

  constructor(private titleService: Title, private route: ActivatedRoute, private cargaTiposCentrosSanitarios: CargaTipoCentroSanitarioService, private router: Router) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Nuevo tipo centro sanitario');
    this.tipo_centro_sanitario = new TipoCentroSanitario();
  }

  nuevoTipoCentroSanitario(): void {
    this.cargaTiposCentrosSanitarios.nuevoTipoCentroSanitario(this.tipo_centro_sanitario).subscribe(
      e => {
        console.log('Tipo centro sanitario creado');
        console.log(this.tipo_centro_sanitario);
        this.router.navigate(['/tipos_centros_sanitarios']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
