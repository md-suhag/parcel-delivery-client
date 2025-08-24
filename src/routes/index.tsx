import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Faq from "@/pages/Faq";
import Features from "@/pages/Features";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { withAuth } from "./../utils/withAuth";
import { role } from "@/constants/role";
import type { TRole } from "@/types";
import Unauthorized from "@/pages/Unauthorized";
import NotFound from "@/pages/NotFound";
import { senderSidebarItems } from "./senderSidebarItems";
import { receiverSidebarItems } from "./receiverSidebarItem";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Home,
        index: true,
      },
      {
        Component: Features,
        path: "/features",
      },
      {
        Component: About,
        path: "/about",
      },
      {
        Component: Faq,
        path: "/faq",
      },
      {
        Component: Contact,
        path: "/contact",
      },
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.admin as TRole),
    path: "/dashboard/admin",
    children: [
      { index: true, element: <Navigate to="/dashboard/admin/analytics" /> },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.sender as TRole),
    path: "/dashboard/sender",
    children: [
      { index: true, element: <Navigate to="/dashboard/sender/analytics" /> },
      ...generateRoutes(senderSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.receiver as TRole),
    path: "/dashboard/receiver",
    children: [
      { index: true, element: <Navigate to="/dashboard/receiver/analytics" /> },
      ...generateRoutes(receiverSidebarItems),
    ],
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Unauthorized,
    path: "/unauthorized",
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
