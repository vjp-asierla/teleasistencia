import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProfileUser} from "../interfaces/i-profile-user";
import {environment} from "../../environments/environment";
import {IRecursoComunitarioPersonal} from "../interfaces/i-recurso-comunitario-persona";

@Injectable({
  providedIn: 'root'
})
export class RecursosComunitariosPerosnalesService {

  private urlBase = environment.urlBase;
  private URL_SERVER_RCP = this.urlBase + 'recurso_comunitario_personal';

  constructor(private http: HttpClient) {
  }

  getRecursoComunitarioPersonal(): Observable<IRecursoComunitarioPersonal[]> {
    return this.http.get<IRecursoComunitarioPersonal[]>(this.URL_SERVER_RCP);
  }
}
