import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
  tagTypes: ["users", "orders", "Allproducts"],
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASEURL }),
  endpoints: () => ({}),
});
