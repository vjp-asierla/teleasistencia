import {Component, OnInit} from '@angular/core';
import {ITipoRecursoComunitario} from "../../interfaces/i-tipo-recurso-comunitario";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {CargaTipoRecursoComunitarioService} from "../../servicios/carga-tipo-recurso-comunitario.service";

@Component({
  selector: 'app-detalles-tipo-recurso-comunitario',
  templateUrl: './detalles-tipo-recurso-comunitario.component.html',
  styleUrls: ['./detalles-tipo-recurso-comunitario.component.scss']
})

export class DetallesTipoRecursoComunitarioComponent implements OnInit {
  public tipo_recurso_comunitario: ITipoRecursoComunitario;
  public idTipoRecursoComunitario: number;

  constructor(private titleServide: Title, private route: ActivatedRoute, private cargaTiposRecursosComunitarios: CargaTipoRecursoComunitarioService, private router: Router) {
  }

  ngOnInit(): void {
    this.titleServide.setTitle('Modificar tipo recurso comunitario ' + this.idTipoRecursoComunitario);
    this.tipo_recurso_comunitario = this.route.snapshot.data['tipo_recurso_comunitario'];
    this.idTipoRecursoComunitario = this.route.snapshot.params['id'];
  }

  modificarTipoRecursoComunitario(): void {
    console.log(this.tipo_recurso_comunitario);
    this.cargaTiposRecursosComunitarios.modificarTipoRecursoComunitario(this.tipo_recurso_comunitario).subscribe(
      e => {
        console.log('Tipo recurso comunitario ' + e.id + ' modificado');
        this.router.navigate(['/tipos_recursos_comunitarios']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
