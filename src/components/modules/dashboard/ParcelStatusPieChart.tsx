import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import type { ITotalParcelByStatus } from "@/types";

const Status = {
  REQUESTED: "REQUESTED",
  ASSIGNED: "ASSIGNED",
  PICKED: "PICKED",
  IN_TRANSIT: "IN_TRANSIT",
  DELIVERED: "DELIVERED",
  CANCELLED: "CANCELLED",
  RETURNED: "RETURNED",
};

export const description = "Parcel status distribution";

const getStatusStyles = (status: string) => {
  switch (status) {
    case Status.REQUESTED:
      return { color: "#60a5fa" };
    case Status.ASSIGNED:
      return { color: "#a78bfa" };
    case Status.PICKED:
      return { color: "#fb923c" };
    case Status.IN_TRANSIT:
      return { color: "#facc15" };
    case Status.DELIVERED:
      return { color: "#4ade80" };
    case Status.CANCELLED:
      return { color: "#f87171" };
    case Status.RETURNED:
      return { color: "#9ca3af" };
    default:
      return { color: "#d1d5db" };
  }
};

const chartConfig = {
  count: {
    label: "Parcels",
  },
  [Status.REQUESTED]: {
    label: "Requested",
    color: "#60a5fa",
  },
  [Status.ASSIGNED]: {
    label: "Assigned",
    color: "#a78bfa",
  },
  [Status.PICKED]: {
    label: "Picked",
    color: "#fb923c",
  },
  [Status.IN_TRANSIT]: {
    label: "In Transit",
    color: "#facc15",
  },
  [Status.DELIVERED]: {
    label: "Delivered",
    color: "#4ade80",
  },
  [Status.CANCELLED]: {
    label: "Cancelled",
    color: "#f87171",
  },
  [Status.RETURNED]: {
    label: "Returned",
    color: "#9ca3af",
  },
};

export default function ParcelStatusPieChart({
  statusInfo,
}: {
  statusInfo: ITotalParcelByStatus[];
}) {
  const chartData = statusInfo.map((item) => ({
    status: item.status,
    count: item.count,
    fill: getStatusStyles(item.status).color,
  }));

  return (
    <Card className="flex flex-col my-5">
      <CardHeader className="items-center pb-0">
        <CardTitle>Parcel Status</CardTitle>
        <CardDescription>Parcel status distribution</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <Pie data={chartData} dataKey="count" nameKey="status" />
            <ChartLegend
              content={<ChartLegendContent nameKey="status" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
