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
    Carousel: build.query({
      query: () => ({
        url: `/products/carousel`,
      }),
    }),
  }),
});

export const { useAllProductssQuery, useProductByIdQuery, useCarouselQuery } =
  extendedApi;
