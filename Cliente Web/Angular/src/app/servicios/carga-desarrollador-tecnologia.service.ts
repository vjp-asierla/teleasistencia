import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IConvocatoria} from "../interfaces/i-desarrollador-tecnologia";

@Injectable({
  providedIn: 'root'
})
export class CargaDesarrolladorTecnologiaService {
  private URL_SERVER_DESARROLLADOR_TECNOLOGIA = environment.urlBase

  constructor(private http: HttpClient) { }

  getDesarrolladorTecnologia() : Observable<IConvocatoria[]> {
  return this.http.get<IConvocatoria[]>(this.URL_SERVER_DESARROLLADOR_TECNOLOGIA+'desarrollador_tecnologia');
}
}
