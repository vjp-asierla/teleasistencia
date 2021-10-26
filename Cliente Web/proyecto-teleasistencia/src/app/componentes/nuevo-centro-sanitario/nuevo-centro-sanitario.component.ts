import {Component, OnInit} from '@angular/core';
import {ICentroSanitario} from "../../interfaces/i-centro-sanitario";
import {ITipoCentroSanitario} from "../../interfaces/i-tipo-centro-sanitario";
import {IDireccion} from "../../interfaces/i-direccion";
import {CentroSanitario} from "../../clases/centro-sanitario";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {CargaTipoAlarmaService} from "../../servicios/carga-tipo-alarma.service";
import {CargaCentroSanitarioService} from "../../servicios/carga-centro-sanitario.service";

@Component({
  selector: 'app-nuevo-centro-sanitario',
  templateUrl: './nuevo-centro-sanitario.component.html',
  styleUrls: ['./nuevo-centro-sanitario.component.scss']
})
export class NuevoCentroSanitarioComponent implements OnInit {
  public centro_sanitario: ICentroSanitario;
  public tipos_centros_sanitarios: ITipoCentroSanitario[];
  public direcciones: IDireccion[];

  constructor(private route: ActivatedRoute, private titleServide: Title, private cargaCentrosSanitarios: CargaCentroSanitarioService, private router: Router) {
    this.centro_sanitario = new CentroSanitario();
  }

  ngOnInit(): void {
    this.tipos_centros_sanitarios = this.route.snapshot.data['tipos_centros_sanitarios'];
    this.direcciones = this.route.snapshot.data['direcciones'];
    this.titleServide.setTitle('Crear nuevo centro sanitario');
  }

  nuevoCentroSanitario(): void {
    console.log(this.centro_sanitario);
    this.cargaCentrosSanitarios.nuevoCentroSanitario(this.centro_sanitario).subscribe(u => {
      console.log('Centro sanitario creado');
      this.router.navigate(['/centros-sanitarios']);
    });
  }

}
