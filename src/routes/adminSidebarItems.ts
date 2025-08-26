import AllParcels from "@/pages/Dashboard/Admin/AllParcels";
import AllUsers from "@/pages/Dashboard/Admin/AllUsers";
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
