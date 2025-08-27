import { lazy } from "react";
import type { ISidebarItem } from "@/types";
const GetSenderParcels = lazy(
  () => import("@/pages/Dashboard/Sender/GetSenderParcels")
);
const Analytics = lazy(() => import("@/pages/Dashboard/Sender/Analytics"));
const CreateParcel = lazy(
  () => import("@/pages/Dashboard/Sender/CreateParcel")
);

export const senderSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/dashboard/sender/analytics",
        component: Analytics,
      },
    ],
  },
  {
    title: "Parcel Management",
    items: [
      {
        title: "Create Parcel",
        url: "/dashboard/sender/create-parcel",
        component: CreateParcel,
      },
      {
        title: "My Parcels",
        url: "/dashboard/sender/parcels",
        component: GetSenderParcels,
      },
    ],
  },
];
