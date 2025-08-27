import { baseApi } from "@/redux/api/baseApi";
import type { IParcelStats, IResponse } from "@/types";

export const statsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    parcelStats: builder.query<IResponse<IParcelStats>, undefined>({
      query: () => ({
        url: "/stats/parcels",
        method: "GET",
      }),
    }),
  }),
});

export const { useParcelStatsQuery } = statsApi;
