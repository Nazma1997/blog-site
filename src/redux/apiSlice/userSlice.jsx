import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const BASE_URL = 'https://blog-server-mocha.vercel.app/';



export const serverApi = createApi({
  reducerPath: 'serverApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => `/api/v1/user`,
      providesTags: ['User'],
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: `/api/v1/user`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['User']
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: `/api/v1/user/login`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['User']
    }),
    createPost: builder.mutation({
      query: (data) => ({
        url: `/api/v1/post`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['User']
    }),
    getPost: builder.query({
      query: () => `/api/v1/post`,
      providesTags: ['User'],
    }),
    getSingleItem: builder.query({
      query: (id) => `/api/v1/post/${id}`,
      providesTags: ['User'],
    }),
  }),
})
// })


export const {useGetUserQuery, useGetPostQuery, useCreateUserMutation , useLoginUserMutation, useCreatePostMutation, useGetSingleItemQuery} = serverApi


