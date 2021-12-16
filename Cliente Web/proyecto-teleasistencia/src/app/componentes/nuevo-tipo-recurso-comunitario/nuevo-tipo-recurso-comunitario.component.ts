import {Component, OnInit} from '@angular/core';
import {ITipoRecursoComunitario} from '../../interfaces/i-tipo-recurso-comunitario';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {CargaTipoRecursoComunitarioService} from '../../servicios/carga-tipo-recurso-comunitario.service';
import {TipoRecursoComunitario} from '../../clases/tipo-recurso-comunitario';

@Component({
  selector: 'app-nuevo-tipo-recurso-comunitario',
  templateUrl: './nuevo-tipo-recurso-comunitario.component.html',
  styleUrls: ['./nuevo-tipo-recurso-comunitario.component.scss']
})

export class NuevoTipoRecursoComunitarioComponent implements OnInit {
  public tipo_recurso_comunitario: ITipoRecursoComunitario;

  constructor(private titleService: Title, private route: ActivatedRoute, private cargaTiposRecursosComunitarios: CargaTipoRecursoComunitarioService, private router: Router) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Nuevo tipo recurso comunitario');
    this.tipo_recurso_comunitario = new TipoRecursoComunitario();
  }

  nuevoTipoRecursoComunitario(): void {
    this.cargaTiposRecursosComunitarios.nuevoTipoRecursoComunitario(this.tipo_recurso_comunitario).subscribe(
      e => {
        console.log('Tipo recurso comunitario creado');
        console.log(this.tipo_recurso_comunitario);
        this.router.navigate(['/tipos_recursos_comunitarios']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
