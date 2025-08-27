import { lazy } from "react";
const AllParcels = lazy(() => import("@/pages/Dashboard/Admin/AllParcels"));
const AllUsers = lazy(() => import("@/pages/Dashboard/Admin/AllUsers"));
const CreateParcel = lazy(
  () => import("@/pages/Dashboard/Sender/CreateParcel")
);
const GetSenderParcels = lazy(
  () => import("@/pages/Dashboard/Sender/GetSenderParcels")
);
import type { ISidebarItem } from "@/types";
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
