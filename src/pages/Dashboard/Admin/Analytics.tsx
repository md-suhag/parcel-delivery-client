import { useParcelStatsQuery } from "@/redux/features/stats/statsApi";

import StatusCards from "@/components/modules/dashboard/StatusCards";

import { Skeleton } from "@/components/ui/skeleton";
import ParcelTypeCards from "@/components/modules/dashboard/ParcelTypeCards";

export default function Analytics() {
  const { data, isLoading } = useParcelStatsQuery(undefined);

  if (isLoading) {
    return (
      <div className="p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <Skeleton key={item} className="h-28" />
        ))}
      </div>
    );
  }

  return (
    <section className="p-2">
      <StatusCards statusInfo={data!.data.totalParcelByStatus} />

      <ParcelTypeCards
        typeInfo={data!.data.totalParcelByParcelType}
        total={data!.data.totalParcel}
      />
    </section>
  );
}
