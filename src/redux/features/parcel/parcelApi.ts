import { baseApi } from "@/redux/api/baseApi";

const parcelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    crateParcel: builder.mutation({
      query: (payload) => ({
        url: "/parcels",
        method: "POST",
        data: payload,
      }),
    }),
  }),
});

export const { useCrateParcelMutation } = parcelApi;
