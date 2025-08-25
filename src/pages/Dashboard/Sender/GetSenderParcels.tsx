import { DashboardTable } from "@/components/modules/table/Table";
import { getSenderParcelsColumns } from "@/components/modules/table/tableColumns/getSenderParcelsTableColumns";
import { useGetSenderParcelsQuery } from "@/redux/features/sender/senderApi";

const GetSenderParcels = () => {
  const { data, isLoading } = useGetSenderParcelsQuery(null);
  return (
    <section className="min-h-screen p-2">
      <div className="max-w-5xl mx-auto">
        <h2 className=" text-3xl mb-4">All Parcels</h2>
        {!isLoading && (
          <DashboardTable
            data={data?.data || []}
            columns={getSenderParcelsColumns}
            isLoading={isLoading}
          />
        )}
      </div>
    </section>
  );
};

export default GetSenderParcels;
