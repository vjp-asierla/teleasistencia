export interface ICentroSanitario {
  id: number;
  nombre: string;
  telefono: string;
  id_tipos_centro_sanitario: {
    id: number;
    nombre: string;
  };
  id_direccion: {
    id: number;
    localidad: string;
    provincia: string;
    direccion: string;
    codigo_postal: string;
  };
}




