import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const BASE_URL = 'http://localhost:5000';


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
  }),
})
// })


export const {useGetUserQuery, useCreateUserMutation , useLoginUserMutation} = serverApi


