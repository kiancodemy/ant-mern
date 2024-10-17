import { mainApi } from "./apislice";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    CreateOrder: build.mutation({
      query: (post) => ({
        url: "/orders/create",
        method: "POST",
        body: post,
        credentials: "include",
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = extendedApi;
