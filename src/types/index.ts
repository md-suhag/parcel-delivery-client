import type { ComponentType } from "react";

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
