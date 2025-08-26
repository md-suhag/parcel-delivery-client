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
import type { IParcel } from "@/types";

export function ParcelDetailsDialog({ parcel }: { parcel: IParcel }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">View Details</Button>
      </DialogTrigger>
      <div>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary">
              Parcel Details - {parcel.trackingId}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Detailed information about the parcel
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 overflow-auto max-h-[70vh]">
            <div className="grid gap-4">
              <h3 className="text-lg font-semibold">General Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-sm space-y-2">
                  <p className=" font-medium leading-none">Tracking ID</p>
                  <p className=" text-muted-foreground">{parcel.trackingId}</p>
                </div>
                <div className="text-sm space-y-2">
                  <p className=" font-medium leading-none">Type</p>
                  <p className=" text-muted-foreground">{parcel.type}</p>
                </div>
                <div className=" text-sm space-y-2">
                  <p className=" font-medium leading-none">Weight</p>
                  <p className=" text-muted-foreground">{parcel.weight} kg</p>
                </div>
                <div className="text-sm space-y-2">
                  <p className=" font-medium leading-none">Status</p>
                  <p className=" text-muted-foreground">
                    <span
                      className={cn("px-2 py-1 rounded-full", {
                        "bg-blue-200 text-blue-800":
                          parcel.status === "REQUESTED",
                        "bg-yellow-200 text-yellow-800":
                          parcel.status === "ASSIGNED",
                        "bg-purple-200 text-purple-800":
                          parcel.status === "PICKED",
                        "bg-orange-200 text-orange-800":
                          parcel.status === "IN_TRANSIT",
                        "bg-green-200 text-green-800":
                          parcel.status === "DELIVERED",
                        "bg-red-200 text-red-800":
                          parcel.status === "CANCELLED",
                        "bg-gray-200 text-greay-800":
                          parcel.status === "RETURNED",
                      })}
                    >
                      {parcel.status.toLowerCase()}
                    </span>
                    {parcel.isBlocked && " (Blocked)"}
                  </p>
                </div>
                <div className="text-sm space-y-2">
                  <p className=" font-medium leading-none">Delivery Fee</p>
                  <p className=" text-muted-foreground">
                    ৳{parcel.deliveryFee}
                  </p>
                </div>
                <div className="text-sm space-y-2">
                  <p className=" font-medium leading-none">Delivery Date</p>
                  <p className=" text-muted-foreground">
                    {new Date(parcel.deliveryDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <h3 className="text-lg font-semibold">Receiver Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-sm space-y-2">
                  <p className=" font-medium leading-none">Name</p>
                  <p className=" text-muted-foreground">
                    {parcel.receiver.name}
                  </p>
                </div>
                <div className="text-sm space-y-2">
                  <p className=" font-medium leading-none">Phone</p>
                  <p className=" text-muted-foreground">
                    {parcel.receiver.phone}
                  </p>
                </div>
                {parcel.receiver?.email && (
                  <div className="text-sm space-y-2">
                    <p className=" font-medium leading-none">Email</p>
                    <p className=" text-muted-foreground">
                      {parcel.receiver?.email}
                    </p>
                  </div>
                )}
                <div className="text-sm space-y-2 col-span-2">
                  <p className=" font-medium leading-none">Address</p>
                  <p className=" text-muted-foreground">
                    {parcel.receiver.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <h3 className="text-lg font-semibold">Addresses & Dates</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-sm space-y-2">
                  <p className=" font-medium leading-none">Picking Address</p>
                  <p className=" text-muted-foreground">
                    {parcel.pickingAddress}
                  </p>
                </div>
                <div className="text-sm space-y-2">
                  <p className=" font-medium leading-none">Created At</p>
                  <p className=" text-muted-foreground">
                    {new Date(parcel.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {parcel?.statusLogs.length > 0 && (
              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">Status History</h3>
                <div className="space-y-4">
                  {parcel.statusLogs.map((log, index) => (
                    <div
                      key={index}
                      className="text-sm space-y-2 border-l-2 pl-4"
                    >
                      <p className=" font-medium">{log?.status}</p>
                      <p className=" text-muted-foreground">
                        {new Date(log?.time).toLocaleString()}
                      </p>
                      {log?.location && (
                        <p className=" text-muted-foreground">
                          Location: {log?.location}
                        </p>
                      )}
                      {log?.note && (
                        <p className=" text-muted-foreground">
                          Note: {log.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
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
}
