import type { ISidebarItem } from "@/types";
import { lazy } from "react";
const Analytics = lazy(() => import("@/pages/Dashboard/Receiver/Analytics"));
const IncommingParcel = lazy(
  () => import("@/pages/Dashboard/Receiver/IncommingParcel")
);

export const receiverSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/dashboard/receiver/analytics",
        component: Analytics,
      },
    ],
  },
  {
    title: "Parcel Management",
    items: [
      {
        title: "Incomming Parcel",
        url: "/dashboard/receiver/incomming-parcel",
        component: IncommingParcel,
      },
    ],
  },
];
