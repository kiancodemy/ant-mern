import { mainApi } from "./apislice";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    AllProductss: build.query({
      query: (body) => ({
        url: `/products/AllProductss?category=${body.category || ""}&brand=${
          body.brand || ""
        }&sort=${body.sort || ""}`,
        credentials: "include",
      }),
    }),
  }),
});

export const { useAllProductssQuery } = extendedApi;
