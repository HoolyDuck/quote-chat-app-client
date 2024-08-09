import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../base-query";
import { User } from "@/common/types";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getProfile: builder.query<User, void>({
      query: () => "/auth/profile",
    }),
  }),
});

export const { useGetProfileQuery } = authApi;
export { authApi };
