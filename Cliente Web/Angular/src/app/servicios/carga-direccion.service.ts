import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IDireccion} from '../interfaces/i-direccion';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class CargaDireccionService {
  private urlBase = environment.urlBase;
  private URL_SERVER_DIRECCIONES = this.urlBase + 'direccion';

  constructor(private http: HttpClient) {
  }

  getDirecciones(): Observable<IDireccion[]> {
    return this.http.get<IDireccion[]>(this.URL_SERVER_DIRECCIONES);
  }

  getDireccion(idDireccion: number): Observable<IDireccion> {
    return this.http.get<IDireccion>(this.URL_SERVER_DIRECCIONES + '/' + idDireccion);
  }

  modificarDireccion(direccion: IDireccion): Observable<IDireccion> {
    return this.http.put<IDireccion>(this.URL_SERVER_DIRECCIONES + '/' + direccion.id, direccion);
  }

  nuevaDireccion(direccion: IDireccion): Observable<IDireccion> {
    return this.http.post<IDireccion>(this.URL_SERVER_DIRECCIONES, direccion);
  }
}
