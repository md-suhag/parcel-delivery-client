import type { TRole } from ".";

export interface IUser {
  _id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  role: TRole;
  auths: IAuth[];
  isDeleted: boolean;
  isActive: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAuth {
  provider: string;
  providerId: string;
}

export interface ILogin {
  phone: string;
  password: string;
}
export interface IRegister {
  name: string;
  phone: string;
  email?: string;
  password: string;
  address: string;
  role: string;
}
