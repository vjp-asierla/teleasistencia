import {Component, OnInit} from '@angular/core';
import {IDireccion} from '../../interfaces/i-direccion';
import {IRecursoComunitario} from '../../interfaces/i-recurso-comunitario';
import {ITipoRecursoComunitario} from '../../interfaces/i-tipo-recurso-comunitario';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {CargaDireccionService} from '../../servicios/carga-direccion.service';
import {CargaRecursoComunitarioService} from '../../servicios/carga-recurso-comunitario.service';

@Component({
  selector: 'app-detalles-recurso-comunitario',
  templateUrl: './detalles-recurso-comunitario.component.html',
  styleUrls: ['./detalles-recurso-comunitario.component.scss']
})

export class DetallesRecursoComunitarioComponent implements OnInit {
  public recurso_comunitario: IRecursoComunitario;
  public idRecursoComunitario: number;
  public tipos_recursos_comunitarios: ITipoRecursoComunitario[];
  public dire: IDireccion;

  constructor(private route: ActivatedRoute, private titleService: Title, private cargaDirecciones: CargaDireccionService, private cargaRecursosComunitarios: CargaRecursoComunitarioService, private router: Router) {
  }

  ngOnInit(): void {
    this.recurso_comunitario = this.route.snapshot.data['recurso_comunitario'];
    this.idRecursoComunitario = this.route.snapshot.params['id'];
    this.tipos_recursos_comunitarios = this.route.snapshot.data['tipos_recursos_comunitarios'];
    this.dire = this.recurso_comunitario.id_direccion;
    this.titleService.setTitle('Modificar recurso comunitario ' + this.idRecursoComunitario);
  }

  optionSelected(i: number): void {
    document.getElementsByClassName('tipo_recurso_comunitario_option')[i].setAttribute('selected', '');
  }

  modificarDireccion(): void {
    this.cargaDirecciones.modificarDireccion(this.dire).subscribe(
      e => {
        this.router.navigate(['/recursos_comunitarios']);
      },
      error => {
        console.log(error);
      }
    );
  }

  modificarRecursoComunitario(): void {
    this.recurso_comunitario.id_direccion = this.dire;
    this.cargaRecursosComunitarios.modificarRecursoComunitario(this.recurso_comunitario).subscribe(
      e => {
        this.modificarDireccion();
        console.log('Recurso comunitario ' + e.id + ' modificado');
        console.log(this.recurso_comunitario);
      },
      error => {
        console.log(error);
      }
    );
  }
}
