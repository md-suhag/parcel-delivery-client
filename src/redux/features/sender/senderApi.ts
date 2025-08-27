import { baseApi } from "@/redux/api/baseApi";
import type { IParcel, IResponse } from "@/types";

const senderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSenderParcels: builder.query<IResponse<IParcel[]>, null>({
      query: () => ({
        url: "/parcels/me",
        method: "GET",
      }),
      providesTags: ["SenderParcels"],
    }),
    cancelParcel: builder.mutation<IResponse<IParcel>, string>({
      query: (id) => ({
        url: `/parcels/${id}/cancel`,
        method: "PATCH",
      }),
      invalidatesTags: ["SenderParcels", "AllParcels"],
    }),
  }),
});

export const { useGetSenderParcelsQuery, useCancelParcelMutation } = senderApi;
