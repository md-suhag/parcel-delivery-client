import { DashboardTable } from "@/components/modules/table/Table";
import { getAllParcelsColumns } from "@/components/modules/table/tableColumns/getAllParcelsTableColumns";
import { useGetAllParcelsQuery } from "@/redux/features/admin/adminApi";

const AllParcels = () => {
  const { data, isLoading } = useGetAllParcelsQuery(null);
  return (
    <section className="min-h-screen p-2">
      <div className="max-w-5xl mx-auto">
        <h2 className=" text-3xl mb-4">All Parcels</h2>

        <DashboardTable
          data={data?.data || []}
          columns={getAllParcelsColumns}
          isLoading={isLoading}
        />
      </div>
    </section>
  );
};

export default AllParcels;
