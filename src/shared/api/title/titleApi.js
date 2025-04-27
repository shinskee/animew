import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"
import { API_URL } from "../base"

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getTitle: builder.query({
      query: (id) => `title?id${id}`,
    }),
  })
})

export const {  } = api