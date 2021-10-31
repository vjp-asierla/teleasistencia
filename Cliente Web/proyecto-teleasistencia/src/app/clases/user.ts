import {IUsers} from '../interfaces/i-users';

export class User implements IUsers {
  id: number;
  url: string;
  username: string;
  contrasenia: string;
  nombre: string;
  apellidos: string;
  email: string;
  groups: [];
}
