import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {IGrupo} from "../interfaces/i-grupo";
import {ITipoSituacion} from "../interfaces/i-tipo-situacion";
import {CargaUserService} from "./carga-user.service";
import {CargaGrupoService} from "./carga-grupo.service";

@Injectable({
  providedIn: 'root'
})
export class ListaGruposService {

  constructor(private router: Router, private cargaGrupo :CargaGrupoService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IGrupo>{
    return this.cargaGrupo.getGroup().pipe(
      catchError(error => {
        this.router.navigate(['/inicio']);
        return of(null);
      })
    )

  }



}
