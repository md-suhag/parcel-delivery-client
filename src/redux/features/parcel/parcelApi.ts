import { baseApi } from "@/redux/api/baseApi";
import type {
  ICreateParcel,
  IParcel,
  IParcelTrackData,
  IResponse,
} from "@/types";

const parcelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    crateParcel: builder.mutation<IResponse<IParcel>, ICreateParcel>({
      query: (payload) => ({
        url: "/parcels",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["SenderParcels", "AllParcels"],
    }),
    trackParcel: builder.query<IResponse<IParcelTrackData>, string>({
      query: (trackId) => ({
        url: `/parcels/track/${trackId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useCrateParcelMutation, useTrackParcelQuery } = parcelApi;
