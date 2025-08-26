import { DashboardTable } from "@/components/modules/table/Table";
import { getAllUsersColumns } from "@/components/modules/table/tableColumns/getAllUsersTableColumns";
import { useGetAllUsersQuery } from "@/redux/features/admin/adminApi";

const AllUsers = () => {
  const { data, isLoading } = useGetAllUsersQuery(null);
  return (
    <section className="min-h-screen p-2">
      <div className="max-w-5xl mx-auto">
        <h2 className=" text-3xl mb-4">All Users</h2>

        <DashboardTable
          data={data?.data || []}
          columns={getAllUsersColumns}
          isLoading={isLoading}
        />
      </div>
    </section>
  );
};

export default AllUsers;
