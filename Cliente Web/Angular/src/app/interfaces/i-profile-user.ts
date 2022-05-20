export interface IProfileUser {
  pk:          number;
  url:         string;
  last_login:  null;
  username:    string;
  first_name:  string;
  last_name:   string;
  email:       string;
  date_joined: Date;
  groups:      Group[];
  imagen:      Imagen;
}

export interface Group {
  id:          number;
  name:        string;
  permissions: number[];
}

export interface Imagen {
  imagen: string;
}
