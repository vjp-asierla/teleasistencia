import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITipoModalidadPaciente} from '../../interfaces/i-tipo-modalidad-paciente';

@Injectable({
  providedIn: 'root'
})

export class CargaTipoModalidadPacienteService {
  private URL_SERVER_TIPOS_MODALIDADES_PACIENTE = 'http://localhost:8000/api-rest/tipo_modalidad_paciente';

  constructor(private http: HttpClient) {
  }

  getTiposModalidadesPacientes(): Observable<ITipoModalidadPaciente[]> {
    return this.http.get<ITipoModalidadPaciente[]>(this.URL_SERVER_TIPOS_MODALIDADES_PACIENTE);
  }

  getTipoModalidadPaciente(idTipoModalidadPaciente: number): Observable<ITipoModalidadPaciente> {
    return this.http.get<ITipoModalidadPaciente>(this.URL_SERVER_TIPOS_MODALIDADES_PACIENTE + '/' + idTipoModalidadPaciente);
  }

  modificarTipoModalidadPaciente(tipoModalidadPaciente: ITipoModalidadPaciente): Observable<ITipoModalidadPaciente> {
    return this.http.put<ITipoModalidadPaciente>(this.URL_SERVER_TIPOS_MODALIDADES_PACIENTE + '/' + tipoModalidadPaciente.id, tipoModalidadPaciente);
  }

  nuevoTipoModalidadPaciente(tipoModalidadPaciente: ITipoModalidadPaciente): Observable<ITipoModalidadPaciente> {
    return this.http.post<ITipoModalidadPaciente>(this.URL_SERVER_TIPOS_MODALIDADES_PACIENTE, tipoModalidadPaciente);
  }
}
