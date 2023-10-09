import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../firebase";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "categories.json",
    }),
    getProducts: builder.query({
      query: () => "products.json",
    }),
    getProductsByCategory: builder.query({
      query: (category) =>
        `products.json?orderBy="category"&equalTo="${category}"`,
    }),
    postOrder: builder.mutation({
      query: ({ ...order }) => ({
        url: "orders.json",
        method: "POST",
        body: order,
      }),
    }),
    getDataUser: builder.query({
      query: (localId) => `users/${localId}.json`,
    }),
    postDataUser: builder.mutation({
      query: ({ name, lastName, gender, email, image, localId }) => ({
        url: `users/${localId}.json`,
        method: "PUT",
        body: {
          name: name,
          lastName: lastName,
          gender: gender,
          email: email,
          image: image,
        },
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  usePostOrderMutation,
  useGetDataUserQuery,
  usePostDataUserMutation,
} = shopApi;
