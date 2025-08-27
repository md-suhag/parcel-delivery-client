import { lazy } from "react";
import type { ISidebarItem } from "@/types";
const ReceivedParcel = lazy(
  () => import("@/pages/Dashboard/Receiver/ReceivedParcel")
);
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
      {
        title: "Received Parcel",
        url: "/dashboard/receiver/received-parcel",
        component: ReceivedParcel,
      },
    ],
  },
];
