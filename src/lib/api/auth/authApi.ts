import { User } from "@/common/types";
import { apiSlice } from "../apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<User, void>({
      query: () => "/auth/profile",
    }),
  }),
});

export const { useGetProfileQuery } = authApi;
export { authApi };
