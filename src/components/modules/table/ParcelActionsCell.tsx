import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MoreHorizontal } from "lucide-react";

import { toast } from "sonner";

import { useCancelParcelMutation } from "@/redux/features/sender/senderApi";
import type { IErrorResponse, IParcel } from "@/types";
import { CancelParcelConfirmation } from "../parcel/CancelParcelConfirmation";
import { useState } from "react";
import { ParcelDetailsDialog } from "../parcel/ParcelDetailsDialog";

const ParcelActionsCell = ({ parcel }: { parcel: IParcel }) => {
  const [open, setOpen] = useState(false);
  const [cancel] = useCancelParcelMutation();

  const handleCancel = async () => {
    try {
      toast.loading("Cancelling parcel...", { id: "cancel" });
      await cancel(parcel._id).unwrap();
      toast.success("Parcel cancelled successfully", { id: "cancel" });
      setOpen(false);
    } catch (error: unknown) {
      toast.error(
        (error as IErrorResponse)?.data?.message || "Failed to cancel parcel",
        { id: "cancel" }
      );
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
          <CancelParcelConfirmation onConfirm={handleCancel}>
            <Button variant="ghost">Cancel Parcel</Button>
          </CancelParcelConfirmation>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ParcelActionsCell;
