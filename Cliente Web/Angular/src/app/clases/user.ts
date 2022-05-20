import {IUsers} from '../interfaces/i-users';
export class User implements IUsers{
  pk:          number;
  url:         string;
  last_login:  null;
  username:    string;
  password:    string;
  first_name:  string;
  last_name:   string;
  email:       string;
  date_joined: Date;
  groups:      any;
}

export interface Group {
  id:          number;
  name:        string;
  permissions: number[];
}
