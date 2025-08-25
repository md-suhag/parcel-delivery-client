import { cn } from "@/lib/utils";
import type { ColumnDef } from "@tanstack/react-table";
import ParcelActionsCell from "../ParcelActionsCell";
import type { IParcel } from "@/types";

export const getSenderParcelsColumns: ColumnDef<IParcel>[] = [
  {
    accessorKey: "trackingId",
    header: "Tracking Id",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "weight",
    header: "Weight",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;

      const badgeClass = cn(
        "px-2 py-1 rounded-full text-white text-sm font-medium",
        {
          "bg-blue-200 text-blue-800": status === "REQUESTED",
          "bg-yellow-200 text-yellow-800": status === "ASSIGNED",
          "bg-purple-200 text-purple-800": status === "PICKED",
          "bg-orange-200 text-orange-800": status === "IN_TRANSIT",
          "bg-green-200 text-green-800": status === "DELIVERED",
          "bg-red-200 text-red-800": status === "CANCELLED",
          "bg-gray-200 text-greay-800": status === "RETURNED",
        }
      );

      return <span className={badgeClass}>{status.toLocaleLowerCase()}</span>;
    },
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <ParcelActionsCell parcel={row.original} />,
  },
];
