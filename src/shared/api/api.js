
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { API_URL } from "./base"


export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: API_URL,
  }),
  endpoints: () => ({})
})

export const {} = api