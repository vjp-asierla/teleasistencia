import { Component, OnInit } from '@angular/core';
import {ITipoRecursoComunitario} from "../../interfaces/i-tipo-recurso-comunitario";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {CargaTipoRecursoComunitarioService} from "../../servicios/carga-tipo-recurso-comunitario.service";

@Component({
  selector: 'app-detalles-tipo-recurso-comunitario',
  templateUrl: './detalles-tipo-recurso-comunitario.component.html',
  styleUrls: ['./detalles-tipo-recurso-comunitario.component.scss']
})
export class DetallesTipoRecursoComunitarioComponent implements OnInit {
  public tipo_recurso_comunitario: ITipoRecursoComunitario;
  public idTipoRecursoComunitario: number;

  constructor(private route: ActivatedRoute, private titleServide: Title, private cargaTiposRecursosComunitarios: CargaTipoRecursoComunitarioService, private router: Router) { }

  ngOnInit(): void {
    this.idTipoRecursoComunitario = this.route.snapshot.params['id'];
    this.tipo_recurso_comunitario = this.route.snapshot.data['tipo_recurso_comunitario'];
    this.titleServide.setTitle('Modificar tipo recurso comunitario ' + this.idTipoRecursoComunitario);
  }

  modificarTipoRecursoComunitario(): void {
    console.log(this.tipo_recurso_comunitario);
    this.cargaTiposRecursosComunitarios.modificarTipoRecursoComunitario(this.tipo_recurso_comunitario).subscribe(u => {
      console.log('Tipo recurso comunitario modificado');
      this.router.navigate(['/tipos_recursos_comunitarios']);
    });
  }

}
