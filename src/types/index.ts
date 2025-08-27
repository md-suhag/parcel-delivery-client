import type { ComponentType } from "react";
export type {
  ICreateParcel,
  IParcel,
  IUpdateParcel,
  IParcelTrackData,
  IParcelStats,
  ITotalParcelByStatus,
  ITotalParcelByParcelType,
} from "./parcel.type";
export type { IUser, ILogin, IRegister } from "./auth.type";

export type TRole = "ADMIN" | "SENDER" | "RECEIVER" | "RIDER";
export type TParcel = "DOCUMENT" | "REGULAR";

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}
export interface IMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}
export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
  meta?: IMeta;
}

type ZodIssue = {
  code: string;
  expected: string;
  received: string;
  path: string[];
  message: string;
};

type ErrorSource = {
  path: string;
  message: string;
};

export interface IErrorResponse {
  data: {
    success: boolean;
    message: string;
    errorSources?: ErrorSource[];
    err?: {
      issues: ZodIssue[];
      name: string;
    };
    stack?: string;
  };
}
