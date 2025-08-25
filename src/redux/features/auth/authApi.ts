import { baseApi } from "@/redux/api/baseApi";
import type { ILogin, IRegister, IResponse, IUser } from "@/types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<IResponse<IUser>, ILogin>({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        data: payload,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    register: builder.mutation<IResponse<IUser>, IRegister>({
      query: (payload) => ({
        url: "/auth/register",
        method: "POST",
        data: payload,
      }),
    }),
    userInfo: builder.query<IResponse<IUser>, undefined>({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
  }),
});

export const {
  useLoginMutation,
  useUserInfoQuery,
  useLogoutMutation,
  useRegisterMutation,
} = authApi;
