import {Component, OnInit} from '@angular/core';
import {ITipoRecursoComunitario} from '../../../interfaces/i-tipo-recurso-comunitario';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {CargaTipoRecursoComunitarioService} from '../../../servicios/carga-tipo-recurso-comunitario.service';

@Component({
  selector: 'app-modificar-tipo-recurso-comunitario',
  templateUrl: './modificar-tipo-recurso-comunitario.component.html',
  styleUrls: ['./modificar-tipo-recurso-comunitario.component.scss']
})

export class ModificarTipoRecursoComunitarioComponent implements OnInit {
  public tipo_recurso_comunitario: ITipoRecursoComunitario;
  public idTipoRecursoComunitario: number;

  constructor(private route: ActivatedRoute, private titleService: Title, private cargaTiposRecursosComunitarios: CargaTipoRecursoComunitarioService, private router: Router) {
  }

  ngOnInit(): void {
    this.tipo_recurso_comunitario = this.route.snapshot.data['tipo_recurso_comunitario'];
    this.idTipoRecursoComunitario = this.route.snapshot.params['id'];
    this.titleService.setTitle('Modificar tipo recurso comunitario ' + this.idTipoRecursoComunitario);
  }

  modificarTipoRecursoComunitario(): void {
    this.cargaTiposRecursosComunitarios.modificarTipoRecursoComunitario(this.tipo_recurso_comunitario).subscribe(
      e => {
        console.log('Tipo recurso comunitario ' + e.id + ' modificado');
        console.log(this.tipo_recurso_comunitario);
        this.router.navigate(['/tipos_recursos_comunitarios']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
