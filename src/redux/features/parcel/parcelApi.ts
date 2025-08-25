import { baseApi } from "@/redux/api/baseApi";
import type { ICreateParcel, IParcel, IResponse } from "@/types";

const parcelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    crateParcel: builder.mutation<IResponse<IParcel>, ICreateParcel>({
      query: (payload) => ({
        url: "/parcels",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["SenderParcels"],
    }),
  }),
});

export const { useCrateParcelMutation } = parcelApi;
