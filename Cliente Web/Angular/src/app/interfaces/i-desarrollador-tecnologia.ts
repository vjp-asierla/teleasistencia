export interface IDesarrolladorTecnologia {
  id:                        number;
  desarrollador_tecnologias: DesarrolladorTecnologia[];
  nombre:                    string;
  descripcion:               string;
  imagen:                    string;
  es_profesor:               boolean;
  id_convocatoria_proyecto:  IConvocatoria;
}

export interface IConvocatoria {
  id:               number;
  desarrolladores?: IDesarrolladorTecnologia[];
  convocatoria:     string;
  fecha:            Date;
}

export interface DesarrolladorTecnologia {
  id:               number;
  id_desarrollador: IDesarrollador;
  id_tecnologia:    ITecnologias;
}

export interface IDesarrollador {
  id:                       number;
  nombre:                   string;
  descripcion:              string;
  imagen:                   string;
  es_profesor:              boolean;
  id_convocatoria_proyecto: number;
}

export interface ITecnologias {
  id:     number;
  nombre: string;
  imagen: string;
}
