import { useTrackParcelQuery } from "@/redux/features/parcel/parcelApi";
import { useSearchParams } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Loader2Icon } from "lucide-react";

import ParcelStatusTimeLine from "./ParcelStatusTimeLine";

const TrackParcelDetails = () => {
  const [searchParams] = useSearchParams();
  const trackId = searchParams.get("trackId") || "";
  const { data, isLoading, error } = useTrackParcelQuery(trackId);

  const parcelData = data?.data;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-lg">
          <Loader2Icon className="animate-spin" />
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-lg ">Enter correct Track id. No data found.</p>
      </div>
    );
  }

  if (parcelData) {
    return (
      <div className="container mx-auto py-8 px-4 ">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl font-bold text-center">
              Parcel Tracking Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Receiver Information */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Receiver Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <p>
                  <span className="font-medium">Name : </span>
                  {parcelData.receiver.name}
                </p>

                <p>
                  <span className="font-medium">Phone : </span>
                  {parcelData.receiver.phone}
                </p>

                <p>
                  <span className="font-medium">Address : </span>
                  {parcelData?.receiver.address}
                </p>

                <p>
                  <span className="font-medium">Status : </span>
                  <Badge
                    variant={parcelData.isBlocked ? "destructive" : "default"}
                  >
                    {parcelData?.isBlocked ? "Blocked" : "Active"}
                  </Badge>
                </p>
              </div>
            </div>
            <Separator className="my-6" />

            {/* Status Logs Timeline */}
            <h3 className="text-lg font-semibold mb-4 ">Status History</h3>
            <div className="flex  ">
              <ParcelStatusTimeLine statusLogs={parcelData?.statusLogs} />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
};

export default TrackParcelDetails;
