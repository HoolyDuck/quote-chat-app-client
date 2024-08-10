import {
  BaseQueryApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { resetUser } from "../store/slices/user.slice";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  credentials: "include",
});

const baseQueryWithReauth: typeof baseQuery = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {}
) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 403) {
    // post refresh token
    const refreshResult = await baseQuery(
      {
        url: "/auth/refresh",
        method: "POST",
      },
      api,
      extraOptions
    );
    if (refreshResult.data) {
      return baseQuery(args, api, extraOptions);
    }

    api.dispatch(resetUser());
  }
  return result;
};

export { baseQuery, baseQueryWithReauth };
