export interface IPersona {
  id: number;
  nombre: string;
  apellidos: string;
  dni: string;
  fecha_nacimiento: Date;
  sexo: ['Mujer', 'Hombre'];
  telefono_fijo: string;
  telefono_movil: string;
  id_direccion: {
    id: number;
    localidad: string;
    provincia: string;
    direccion: string;
    codigo_postal: string;
  };
}
