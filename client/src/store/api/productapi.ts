import { mainApi } from "./apislice";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    AllProductss: build.query({
      query: (body) => ({
        url: `/products/AllProductss?category=${body.category}&brand=${body.brand}&sort=${body.sort}`,
        credentials: "include",
      }),
      keepUnusedDataFor: 1,
    }),
    ProductById: build.query({
      query: (id?: string) => ({
        url: `/products/ProductById/${id}`,
        credentials: "include",
      }),
    }),
  }),
});

export const { useAllProductssQuery, useProductByIdQuery } = extendedApi;
