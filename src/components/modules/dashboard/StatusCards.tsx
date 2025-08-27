import {
  Package,
  Clock,
  Truck,
  CheckCircle,
  XCircle,
  ArrowLeftCircle,
  MapPin,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ITotalParcelByStatus } from "@/types";

enum Status {
  REQUESTED = "REQUESTED",
  ASSIGNED = "ASSIGNED",
  PICKED = "PICKED",
  IN_TRANSIT = "IN_TRANSIT",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
  RETURNED = "RETURNED",
}

const getStatusStyles = (status: string) => {
  switch (status) {
    case Status.REQUESTED:
      return {
        color: "text-blue-400",
        bgColor: "bg-blue-200",
        icon: <MapPin className="w-6 h-6" />,
      };
    case Status.ASSIGNED:
      return {
        color: "text-purple-400",
        bgColor: "bg-purple-200",
        icon: <Clock className="w-6 h-6" />,
      };
    case Status.PICKED:
      return {
        color: "text-orange-400",
        bgColor: "bg-orange-200",
        icon: <Package className="w-6 h-6" />,
      };
    case Status.IN_TRANSIT:
      return {
        color: "text-yellow-600",
        bgColor: "bg-yellow-200",
        icon: <Truck className="w-6 h-6" />,
      };
    case Status.DELIVERED:
      return {
        color: "text-green-400",
        bgColor: "bg-green-200",
        icon: <CheckCircle className="w-6 h-6" />,
      };
    case Status.CANCELLED:
      return {
        color: "text-red-400",
        bgColor: "bg-red-200",
        icon: <XCircle className="w-6 h-6" />,
      };
    case Status.RETURNED:
      return {
        color: "text-gray-400",
        bgColor: "bg-gray-200",
        icon: <ArrowLeftCircle className="w-6 h-6" />,
      };
    default:
      return {
        color: "text-gray-400",
        bgColor: "bg-gray-200",
        icon: <Package className="w-6 h-6" />,
      };
  }
};

const StatusCards = ({
  statusInfo,
}: {
  statusInfo: ITotalParcelByStatus[];
}) => {
  return (
    <section>
      <h1 className="text-2xl font-semibold text-primary mb-6">
        Parcels Status
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statusInfo?.map((item, i) => {
          const { color, bgColor, icon } = getStatusStyles(item.status);
          return (
            <Card
              key={i}
              className={`hover:shadow-lg transition-shadow duration-300 ${bgColor} border-none`}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className={`text-lg font-medium ${color}`}>
                  {item.status}
                </CardTitle>
                <div className={color}>{icon}</div>
              </CardHeader>
              <CardContent>
                <p className={`text-3xl font-bold ${color}`}>{item.count}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default StatusCards;
