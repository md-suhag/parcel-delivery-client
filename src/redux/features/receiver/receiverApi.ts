import { baseApi } from "@/redux/api/baseApi";
import type { IParcel, IResponse } from "@/types";

const receiverApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getIncommingParcels: builder.query<IResponse<IParcel[]>, null>({
      query: () => ({
        url: "/parcels/incomming",
        method: "GET",
      }),
      providesTags: ["Incomming"],
    }),
    getReceivedParcels: builder.query<IResponse<IParcel[]>, null>({
      query: () => ({
        url: `/parcels/history`,
        method: "GET",
      }),
      providesTags: ["Received"],
    }),
    confirmParcel: builder.mutation<IResponse<IParcel>, string>({
      query: (id) => ({
        url: `/parcels/${id}/confirm`,
        method: "PATCH",
      }),
      invalidatesTags: ["Received"],
    }),
  }),
});

export const {
  useGetIncommingParcelsQuery,
  useGetReceivedParcelsQuery,
  useConfirmParcelMutation,
} = receiverApi;
