export interface IStudent {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  school: string;
  standard: string;
}

export const schools = [
  "M.D. School",
  "Bharat Modal School",
  "S.D. Bihani School",
  "D.A.V. School",
] as const;

export enum PageEnum {
  list,
  add,
}
