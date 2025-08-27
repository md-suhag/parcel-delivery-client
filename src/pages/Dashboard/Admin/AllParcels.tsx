import PaginationBtn from "@/components/modules/dashboard/PaginationBtn";
import { DashboardTable } from "@/components/modules/table/Table";
import { getAllParcelsColumns } from "@/components/modules/table/tableColumns/getAllParcelsTableColumns";

import { useGetAllParcelsQuery } from "@/redux/features/admin/adminApi";
import { useState } from "react";

const AllParcels = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetAllParcelsQuery({
    page,
  });
  return (
    <section className="min-h-screen p-2">
      <div className="max-w-5xl mx-auto">
        <h2 className=" text-3xl mb-4">All Parcels</h2>

        <DashboardTable
          data={data?.data || []}
          columns={getAllParcelsColumns}
          isLoading={isLoading}
        />
        {data && data?.meta && (
          <PaginationBtn page={page} setPage={setPage} meta={data!.meta} />
        )}
      </div>
    </section>
  );
};

export default AllParcels;
