import { baseApi } from "@/redux/api/baseApi";
import type { IParcel, IResponse, IUpdateParcel, IUser } from "@/types";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllParcels: builder.query<IResponse<IParcel[]>, unknown>({
      query: (params) => ({
        url: "/admin/parcels",
        method: "GET",
        params,
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
    updateParcelStaus: builder.mutation<
      IResponse<Partial<IParcel>>,
      IUpdateParcel
    >({
      query: (payload) => ({
        url: `/admin/parcels/${payload.id}/status`,
        method: "PATCH",
        data: payload,
      }),
      invalidatesTags: ["AllParcels"],
    }),
    getAllUsers: builder.query<IResponse<IUser[]>, unknown>({
      query: (params) => ({
        url: "/admin/users",
        method: "GET",
        params,
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
  useUpdateParcelStausMutation,
  useBlockUserMutation,
  useUnBlockUserMutation,
} = adminApi;
