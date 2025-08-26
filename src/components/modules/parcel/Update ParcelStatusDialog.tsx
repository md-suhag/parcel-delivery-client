import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUpdateParcelStausMutation } from "@/redux/features/admin/adminApi";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { parcelStatus } from "@/constants";
import { useState } from "react";
import { toast } from "sonner";
import type { IErrorResponse } from "@/types";

interface IProps {
  id: string;
  status: string;
}

const UpdateParcelStatusDialog = ({ id, status }: IProps) => {
  const [open, setOpen] = useState(false);
  const [newStatus, setNewStatus] = useState(status || "");
  const [update] = useUpdateParcelStausMutation();

  const handleStatusUpadate = async () => {
    try {
      toast.loading("Updating parcel status...", { id: "update" });
      await update({ id, status: newStatus }).unwrap();
      toast.success("Parcel status updated successfully", { id: "update" });
      setOpen(false);
    } catch (error: unknown) {
      toast.error(
        (error as IErrorResponse)?.data?.message ||
          "Failed to update parcel status",
        { id: "update" }
      );
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">Update Status</Button>
      </DialogTrigger>
      <div>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary">
              Update Parcel Status
            </DialogTitle>
            <DialogDescription className="sr-only">
              update parcel status
            </DialogDescription>
          </DialogHeader>
          <div>
            <Select
              defaultValue={newStatus}
              onValueChange={(value) => setNewStatus(value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select new Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Status</SelectLabel>
                  {Object.values(parcelStatus).map((value) => (
                    <SelectItem key={value} value={value}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
            <Button onClick={handleStatusUpadate}>Update</Button>
          </DialogFooter>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default UpdateParcelStatusDialog;
