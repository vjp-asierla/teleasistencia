import {IUsers} from "../interfaces/i-users";

export class User implements IUsers {
  email: string;
  groups: [];
  id: number;
  url: string;
  username: string;
}
