import { cn } from "@/lib/utils";
import type { ColumnDef } from "@tanstack/react-table";
import type { IUser } from "@/types";
import AllUsersActionsCell from "../AllUsersActionsCell";

export const getAllUsersColumns: ColumnDef<IUser>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return <div className="min-w-[100px] text-wrap">{row.original.name}</div>;
    },
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },

  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "isActive",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.isActive;

      const badgeClass = cn("px-2 py-1 rounded-full  text-sm font-medium", {
        "bg-green-200 text-green-800": status === "ACTIVE",
        "bg-yellow-200 text-yellow-800": status === "INACTIVE",
        "bg-red-200 text-red-800": status === "BLOCKED",
      });

      return <span className={badgeClass}>{status.toLocaleLowerCase()}</span>;
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <AllUsersActionsCell user={row.original} />,
  },
];
