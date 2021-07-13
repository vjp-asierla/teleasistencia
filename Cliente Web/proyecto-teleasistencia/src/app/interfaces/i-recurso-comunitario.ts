export interface IRecursoComunitario {
  id: number;
  nombre: string;
  telefono: string;
  id_tipos_recurso_comunitario: {
    id: number;
    nombre: string;
  }
  id_direccion: {
    id: number;
    localidad: string;
    provincia: string;
    direccion: string;
    codigo_postal: string;
  };
}
