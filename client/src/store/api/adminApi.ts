import { mainApi } from "./apislice";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    Admincreate: build.mutation({
      query: (post) => ({
        url: "/admin/create",
        method: "POST",
        body: post,
        credentials: "include",
      }),
      invalidatesTags: ["Allproducts"],
    }),
    Admindelete: build.mutation({
      query: (id: string) => ({
        url: `/admin/delete/${id}`,
        method: "DELETE",

        credentials: "include",
      }),
      invalidatesTags: ["Allproducts"],
    }),
    Admiupdate: build.mutation({
      query: (post) => ({
        url: "/admin/update",
        method: "POST",
        body: post,
        credentials: "include",
      }),
      invalidatesTags: ["Allproducts"],
    }),
    GetAllProducts: build.query({
      query: () => ({ url: "/admin/AllProducts", credentials: "include" }),
      providesTags: ["Allproducts"],
      keepUnusedDataFor: 10,
    }),
  }),
});

export const {
  useAdmincreateMutation,
  useAdmindeleteMutation,
  useGetAllProductsQuery,
  useAdmiupdateMutation,
} = extendedApi;
