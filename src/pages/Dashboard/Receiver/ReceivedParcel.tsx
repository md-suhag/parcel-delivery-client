import { DashboardTable } from "@/components/modules/table/Table";
import { getReceivedParcelsColumns } from "@/components/modules/table/tableColumns/getReceivedParcelsTableColumns";
import { useGetReceivedParcelsQuery } from "@/redux/features/receiver/receiverApi";

const ReceivedParcel = () => {
  const { data, isLoading } = useGetReceivedParcelsQuery(null);
  return (
    <section className="min-h-screen p-2">
      <div className="max-w-5xl mx-auto">
        <h2 className=" text-3xl mb-4">Received Parcels</h2>

        <DashboardTable
          data={data?.data || []}
          columns={getReceivedParcelsColumns}
          isLoading={isLoading}
        />
      </div>
    </section>
  );
};

export default ReceivedParcel;
