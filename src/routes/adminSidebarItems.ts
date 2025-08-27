import AllParcels from "@/pages/Dashboard/Admin/AllParcels";
import AllUsers from "@/pages/Dashboard/Admin/AllUsers";
import CreateParcel from "@/pages/Dashboard/Sender/CreateParcel";
import GetSenderParcels from "@/pages/Dashboard/Sender/GetSenderParcels";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";
const Analytics = lazy(() => import("@/pages/Dashboard/Admin/Analytics"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/dashboard/admin/analytics",
        component: Analytics,
      },
    ],
  },
  {
    title: "Parcel Management",
    items: [
      {
        title: "All Parcels",
        url: "/dashboard/admin/all-parcels",
        component: AllParcels,
      },
      {
        title: "Create Parcel",
        url: "/dashboard/admin/create-parcel",
        component: CreateParcel,
      },
      {
        title: "My Parcels",
        url: "/dashboard/admin/parcels",
        component: GetSenderParcels,
      },
    ],
  },
  {
    title: "User Management",
    items: [
      {
        title: "All Users",
        url: "/dashboard/admin/all-users",
        component: AllUsers,
      },
    ],
  },
];
