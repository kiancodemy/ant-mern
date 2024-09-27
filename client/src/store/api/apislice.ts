import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
  tagTypes: ["users", "orders", "products"],
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASEURL }),
  endpoints: () => ({}),
});
