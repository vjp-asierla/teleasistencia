import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUsers} from "../interfaces/i-users";
import {IGrupo} from "../interfaces/i-grupo";

@Injectable({
  providedIn: 'root'
})
export class CargaGrupoService {


  private urlBase = environment.urlBase;
  private URL_SERVER_GROUPS = this.urlBase + 'groups';

  constructor(private http: HttpClient) {
  }

  getGroup(): Observable<IGrupo[]> {
    return this.http.get<IGrupo[]>(this.URL_SERVER_GROUPS);
  }

}
