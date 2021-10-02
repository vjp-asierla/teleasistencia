import {Component, OnInit} from '@angular/core';
import {ITipoRecursoComunitario} from "../../interfaces/i-tipo-recurso-comunitario";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {CargaTipoRecursoComunitarioService} from "../../servicios/carga-tipo-recurso-comunitario.service";
import {TipoRecursoComunitario} from "../../clases/tipo-recurso-comunitario";

@Component({
  selector: 'app-nuevo-tipo-recurso-comunitario',
  templateUrl: './nuevo-tipo-recurso-comunitario.component.html',
  styleUrls: ['./nuevo-tipo-recurso-comunitario.component.scss']
})
export class NuevoTipoRecursoComunitarioComponent implements OnInit {
  public tipo_recurso_comunitario: ITipoRecursoComunitario;

  constructor(private route: ActivatedRoute, private titleServide: Title, private cargaTiposRecursosComunitarios: CargaTipoRecursoComunitarioService, private router: Router) {
    this.tipo_recurso_comunitario = new TipoRecursoComunitario();
  }

  ngOnInit(): void {
    this.titleServide.setTitle('Crear nuevo tipo recurso comunitario');
  }

  nuevoTipoRecursoComunitario(): void {
    console.log(this.tipo_recurso_comunitario);
    this.cargaTiposRecursosComunitarios.nuevoTipoRecursoComunitario(this.tipo_recurso_comunitario).subscribe(u => {
      console.log('Tipo recurso comunitario creado');
      this.router.navigate(['/tipos_recursos_comunitarios']);
    });
  }

}
