import type { IErrorResponse, IUser } from "@/types";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { ConfirmationDialog } from "@/components/ConfirmationDialog";
import {
  useBlockUserMutation,
  useUnBlockUserMutation,
} from "@/redux/features/admin/adminApi";
import { toast } from "sonner";
import UserDetailsDialog from "../dashboard/UserDetailsDialog";

const AllUsersActionsCell = ({ user }: { user: IUser }) => {
  const [open, setOpen] = useState(false);
  const [block] = useBlockUserMutation();
  const [unBlock] = useUnBlockUserMutation();

  const handleUserBlock = async () => {
    try {
      toast.loading("blocking user...", { id: "block" });
      await block(user._id).unwrap();
      toast.success("user blocked successfully", { id: "block" });
      setOpen(false);
    } catch (error: unknown) {
      toast.error(
        (error as IErrorResponse)?.data?.message || "Failed to block user",
        { id: "block" }
      );
      setOpen(false);
    }
  };
  const handleUserUnBlock = async () => {
    try {
      toast.loading("Unblocking user...", { id: "unblock" });
      await unBlock(user._id).unwrap();
      toast.success("User unblocked successfully", { id: "unblock" });
      setOpen(false);
    } catch (error: unknown) {
      toast.error(
        (error as IErrorResponse)?.data?.message || "Failed to unblock user",
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
          <UserDetailsDialog user={user} />
        </DropdownMenuItem>
        {user.isActive === "ACTIVE" && (
          <DropdownMenuItem asChild>
            <ConfirmationDialog onConfirm={handleUserBlock} actionText="Block">
              <Button variant="ghost">Block User</Button>
            </ConfirmationDialog>
          </DropdownMenuItem>
        )}
        {user.isActive === "BLOCKED" && (
          <DropdownMenuItem asChild>
            <ConfirmationDialog
              onConfirm={handleUserUnBlock}
              actionText="Unblock"
            >
              <Button variant="ghost">Unblock User</Button>
            </ConfirmationDialog>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AllUsersActionsCell;
