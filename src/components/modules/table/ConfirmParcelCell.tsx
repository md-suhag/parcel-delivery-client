import { Button } from "@/components/ui/button";
import { useConfirmParcelMutation } from "@/redux/features/receiver/receiverApi";
import type { IErrorResponse, IParcel } from "@/types";
import { toast } from "sonner";

const ConfirmParcelCell = ({ parcel }: { parcel: IParcel }) => {
  const [confirm, { isLoading }] = useConfirmParcelMutation();

  const handleConfirm = async () => {
    try {
      await confirm(parcel._id).unwrap();
      toast.success("Parcel confirmed successfully");
    } catch (error: unknown) {
      toast.error((error as IErrorResponse)?.data?.message);
    }
  };
  return (
    <>
      {parcel.status === "IN_TRANSIT" ? (
        <Button size="sm" onClick={handleConfirm} disabled={isLoading}>
          Confirm
        </Button>
      ) : (
        <></>
      )}
    </>
  );
};

export default ConfirmParcelCell;
