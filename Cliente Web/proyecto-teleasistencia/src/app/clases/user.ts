import {IUsers} from '../interfaces/i-users';

export class User implements IUsers {
  id: number;
  url: string;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
  groups: [];
}
