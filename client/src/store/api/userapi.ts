import { mainApi } from "./apislice";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    Register: build.mutation({
      query: (post) => ({
        url: "/users/register",
        method: "POST",
        body: post,
        credentials: "include",
      }),
    }),
    Login: build.mutation({
      query: (post) => ({
        url: "/users/login",
        method: "POST",
        body: post,
        credentials: "include",
      }),
    }),
    Logout: build.mutation({
      query: () => ({
        url: "/users/logout",
        method: "POST",

        credentials: "include",
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } =
  extendedApi;
