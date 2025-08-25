import type { ComponentType } from "react";

export type TRole = "ADMIN" | "SENDER" | "RECEIVER" | "RIDER";
export type TParcel = "DOCUMENT" | "REGULAR";

export enum Status {
  REQUESTED = "REQUESTED",
  ASSIGNED = "ASSIGNED",
  PICKED = "PICKED",
  IN_TRANSIT = "IN_TRANSIT",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
  RETURNED = "RETURNED",
}

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}
