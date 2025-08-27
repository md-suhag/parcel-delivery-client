import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import { cn } from "@/lib/utils";
import type { IParcelTrackData } from "@/types";
import { format } from "date-fns";

export default function ParcelStatusTimeLine({
  statusLogs,
}: Pick<IParcelTrackData, "statusLogs">) {
  return (
    <Timeline defaultValue={3}>
      {[...statusLogs].reverse().map((item, i) => (
        <TimelineItem
          key={i}
          step={i}
          className="group-data-[orientation=vertical]/timeline:sm:ms-32"
        >
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate className="hidden sm:block group-data-[orientation=vertical]/timeline:sm:absolute group-data-[orientation=vertical]/timeline:sm:-left-32 group-data-[orientation=vertical]/timeline:sm:w-20 group-data-[orientation=vertical]/timeline:sm:text-right">
              {format(new Date(item.time), "MMM dd, yyyy hh:mm:a")}
            </TimelineDate>
            <TimelineTitle className="sm:-mt-1.5">
              <div
                className={cn(
                  "px-3 py-1 rounded-full text-sm inline-block order-first sm:order-none",
                  {
                    "bg-blue-200 text-blue-800": item.status === "REQUESTED",
                    "bg-yellow-200 text-yellow-800": item.status === "ASSIGNED",
                    "bg-purple-200 text-purple-800": item.status === "PICKED",
                    "bg-orange-200 text-orange-800":
                      item.status === "IN_TRANSIT",
                    "bg-green-200 text-green-800": item.status === "DELIVERED",
                    "bg-red-200 text-red-800": item.status === "CANCELLED",
                    "bg-gray-200 text-gray-800": item.status === "RETURNED",
                    "bg-red-300 text-red-800": item.status === "BLOCKED",
                    "bg-gray-200 text-gray-700": item.status === "UNBLOCKED",
                  }
                )}
              >
                {item.status.toLowerCase()}
              </div>
            </TimelineTitle>

            <TimelineIndicator />
          </TimelineHeader>
          <TimelineContent className="max-w-[300px] ">
            <p className="font-semibold pl-2">{item.location}</p>
            <p className="pl-2">{item?.note}</p>
            <TimelineDate className="sm:hidden text-muted-foreground pl-2 mt-1">
              {format(new Date(item.time), "MMM dd, yyyy hh:mm:a")}
            </TimelineDate>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
