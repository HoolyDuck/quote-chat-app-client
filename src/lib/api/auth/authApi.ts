import { User } from "@/common/types";
import { apiSlice } from "../apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<User, void>({
      query: () => "/auth/profile",
    }),
    logOut: builder.mutation<void, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useGetProfileQuery, useLogOutMutation } = authApi;
export { authApi };
