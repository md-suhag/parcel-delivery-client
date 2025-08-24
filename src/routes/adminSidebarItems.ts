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
    items: [],
  },
];
