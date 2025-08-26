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
import { cn } from "@/lib/utils";
import type { IUser } from "@/types";

const UserDetailsDialog = ({ user }: { user: IUser }) => {
  const badgeClass = cn("px-2 py-1 rounded-full  text-sm font-medium", {
    "bg-green-200 text-green-800": user.isActive === "ACTIVE",
    "bg-yellow-200 text-yellow-800": user.isActive === "INACTIVE",
    "bg-red-200 text-red-800": user.isActive === "BLOCKED",
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">View Details</Button>
      </DialogTrigger>
      <div>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle className="text-primary">
              User Details - {user.name}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Detailed information about the user
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-6">
            <div className="grid gap-4">
              <h3 className="text-lg font-semibold">General Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-sm space-y-2">
                  <p className="font-medium leading-none">Name</p>
                  <p className="text-muted-foreground">{user.name}</p>
                </div>
                <div className="text-sm space-y-2">
                  <p className="font-medium leading-none">Phone</p>
                  <p className="text-muted-foreground">{user.phone}</p>
                </div>
                <div className="text-sm space-y-2">
                  <p className="font-medium leading-none">Email</p>
                  <p className="text-muted-foreground">{user.email}</p>
                </div>
                <div className="text-sm space-y-2 col-span-2">
                  <p className="font-medium leading-none">Address</p>
                  <p className="text-muted-foreground">{user.address}</p>
                </div>
                <div className="text-sm space-y-2">
                  <p className="font-medium leading-none">Role</p>
                  <p className="text-muted-foreground">{user.role}</p>
                </div>
                <div className="text-sm space-y-2">
                  <p className="font-medium leading-none">Status</p>
                  <p>
                    <span className={badgeClass}>
                      {user.isActive} {user.isDeleted ? "(Deleted)" : ""}
                    </span>
                  </p>
                </div>
                <div className="text-sm space-y-2">
                  <p className="font-medium leading-none">Registered At</p>
                  <p className="text-muted-foreground">
                    {new Date(user.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default UserDetailsDialog;
