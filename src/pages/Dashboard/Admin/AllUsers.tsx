import PaginationBtn from "@/components/modules/dashboard/PaginationBtn";
import { DashboardTable } from "@/components/modules/table/Table";
import { getAllUsersColumns } from "@/components/modules/table/tableColumns/getAllUsersTableColumns";
import { useGetAllUsersQuery } from "@/redux/features/admin/adminApi";
import { useState } from "react";

const AllUsers = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetAllUsersQuery({
    page,
  });
  return (
    <section className="min-h-screen p-2">
      <div className="max-w-5xl mx-auto">
        <h2 className=" text-3xl mb-4">All Users</h2>

        <DashboardTable
          data={data?.data || []}
          columns={getAllUsersColumns}
          isLoading={isLoading}
        />
        {data && data?.meta && (
          <PaginationBtn page={page} setPage={setPage} meta={data!.meta} />
        )}
      </div>
    </section>
  );
};

export default AllUsers;
