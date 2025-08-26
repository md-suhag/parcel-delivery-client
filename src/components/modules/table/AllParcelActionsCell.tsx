import type { IErrorResponse, IParcel } from "@/types";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { ParcelDetailsDialog } from "../parcel/ParcelDetailsDialog";
import { ConfirmationDialog } from "@/components/ConfirmationDialog";
import {
  useBlockParcelMutation,
  useUnBlockParcelMutation,
} from "@/redux/features/admin/adminApi";
import { toast } from "sonner";
import UpdateParcelStatusDialog from "../parcel/Update ParcelStatusDialog";

const AllParcelActionsCell = ({ parcel }: { parcel: IParcel }) => {
  const [open, setOpen] = useState(false);
  const [block] = useBlockParcelMutation();
  const [unBlock] = useUnBlockParcelMutation();

  const handleBlock = async () => {
    try {
      toast.loading("blocking parcel...", { id: "block" });
      await block(parcel._id).unwrap();
      toast.success("Parcel blocked successfully", { id: "block" });
      setOpen(false);
    } catch (error: unknown) {
      toast.error(
        (error as IErrorResponse)?.data?.message || "Failed to block parcel",
        { id: "block" }
      );
      setOpen(false);
    }
  };
  const handleUnBlock = async () => {
    try {
      toast.loading("Unblocking parcel...", { id: "unblock" });
      await unBlock(parcel._id).unwrap();
      toast.success("Parcel unblocked successfully", { id: "unblock" });
      setOpen(false);
    } catch (error: unknown) {
      toast.error(
        (error as IErrorResponse)?.data?.message || "Failed to unblock parcel",
        { id: "unblock" }
      );
      setOpen(false);
    }
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <ParcelDetailsDialog parcel={parcel} />
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <UpdateParcelStatusDialog status={parcel.status} id={parcel._id} />
        </DropdownMenuItem>
        {!parcel.isBlocked && (
          <DropdownMenuItem asChild>
            <ConfirmationDialog onConfirm={handleBlock} actionText="Block">
              <Button variant="ghost">Block Parcel</Button>
            </ConfirmationDialog>
          </DropdownMenuItem>
        )}
        {parcel.isBlocked && (
          <DropdownMenuItem asChild>
            <ConfirmationDialog onConfirm={handleUnBlock} actionText="Unblock">
              <Button variant="ghost">Unblock Parcel</Button>
            </ConfirmationDialog>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AllParcelActionsCell;
