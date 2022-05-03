import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IDireccion} from '../../interfaces/i-direccion';

@Injectable({
  providedIn: 'root'
})

export class CargaDireccionService {

  private URL_SERVER_DIRECCIONES = 'http://localhost:8000/api-rest/direccion';

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

  eliminarDireccion(direccion:IDireccion): Observable<IDireccion> {
    return this.http.delete<IDireccion>(this.URL_SERVER_DIRECCIONES + '/' + direccion.id);
  }




}
