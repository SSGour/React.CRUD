export interface IStudent {
  id: string;
  firstName: string;
  lastName: string;
  age: Number;
  email: string;
  school: string;
  standard: string;
}

export interface IPrincipal {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  school: string;
  user: string;
  password: string;
}

export const Schools = [
  "M.D. School",
  "Bharat Modal School",
  "S.D. Bihani School",
  "D.A.V. School",
] as const;

export enum PageEnum {
  list,
  add,
  edit,
}

export enum LoginEnum {
  login,
  signUp,
  home,
}
