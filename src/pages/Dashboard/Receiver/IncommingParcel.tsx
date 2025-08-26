import { DashboardTable } from "@/components/modules/table/Table";
import { getIncommingParcelsColumns } from "@/components/modules/table/tableColumns/getIncommingParcelsTableColumns";
import { useGetIncommingParcelsQuery } from "@/redux/features/receiver/receiverApi";

const IncommingParcel = () => {
  const { data, isLoading } = useGetIncommingParcelsQuery(null);
  return (
    <section className="min-h-screen p-2">
      <div className="max-w-5xl mx-auto">
        <h2 className=" text-3xl mb-4">Incomming Parcels</h2>
        {!isLoading && (
          <DashboardTable
            data={data?.data || []}
            columns={getIncommingParcelsColumns}
            isLoading={isLoading}
          />
        )}
      </div>
    </section>
  );
};

export default IncommingParcel;
