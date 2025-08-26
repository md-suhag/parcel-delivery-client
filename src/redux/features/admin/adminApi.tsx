import { baseApi } from "@/redux/api/baseApi";
import type { IParcel, IResponse, IUser } from "@/types";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllParcels: builder.query<IResponse<IParcel[]>, null>({
      query: () => ({
        url: "/admin/parcels",
        method: "GET",
      }),
      providesTags: ["AllParcels"],
    }),
    blockParcel: builder.mutation<IResponse<Partial<IParcel>>, string>({
      query: (id) => ({
        url: `/admin/parcels/${id}/block`,
        method: "PATCH",
      }),
      invalidatesTags: ["AllParcels"],
    }),
    unBlockParcel: builder.mutation<IResponse<Partial<IParcel>>, string>({
      query: (id) => ({
        url: `/admin/parcels/${id}/unblock`,
        method: "PATCH",
      }),
      invalidatesTags: ["AllParcels"],
    }),
    getAllUsers: builder.query<IResponse<IUser[]>, null>({
      query: () => ({
        url: "/admin/users",
        method: "GET",
      }),
      providesTags: ["AllUsers"],
    }),
    blockUser: builder.mutation<IResponse<Partial<IParcel>>, string>({
      query: (id) => ({
        url: `/admin/users/${id}/block`,
        method: "PATCH",
      }),
      invalidatesTags: ["AllUsers"],
    }),
    unBlockUser: builder.mutation<IResponse<Partial<IParcel>>, string>({
      query: (id) => ({
        url: `/admin/users/${id}/unblock`,
        method: "PATCH",
      }),
      invalidatesTags: ["AllUsers"],
    }),
  }),
});

export const {
  useGetAllParcelsQuery,
  useGetAllUsersQuery,
  useBlockParcelMutation,
  useUnBlockParcelMutation,
  useBlockUserMutation,
  useUnBlockUserMutation,
} = adminApi;
