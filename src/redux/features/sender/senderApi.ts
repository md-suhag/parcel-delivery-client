import { baseApi } from "@/redux/api/baseApi";

const senderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSenderParcels: builder.query({
      query: () => ({
        url: "/parcels/me",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSenderParcelsQuery } = senderApi;
