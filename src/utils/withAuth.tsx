import { useUserInfoQuery } from "@/redux/features/auth/authApi";
import { useAppSelector } from "@/redux/hook";
import type { TRole } from "@/types";
import { Loader2Icon } from "lucide-react";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (Component: ComponentType, requiredRole?: TRole) => {
  return function AuthWrapper() {
    const { data, isLoading } = useUserInfoQuery(undefined);
    const user = useAppSelector((state) => state.authR.user);

    if (user) {
      return <Component />;
    }
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-screen">
          <Loader2Icon size={30} className="animate-spin" />
        </div>
      );
    }

    if (!isLoading && !data?.data?.phone) {
      return <Navigate to="/login" />;
    }

    if (requiredRole && !isLoading && requiredRole !== data?.data?.role) {
      return <Navigate to="/unauthorized" />;
    }

    return <Component />;
  };
};
