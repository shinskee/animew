import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setAuth } from '../features/auth/authSlice';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://anilibria.top/api/v1',
    prepareHeaders:  headers => {
        headers.set('Authorization', `Bearer ${localStorage.getItem('sn-token')}`)
    }}),
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => `/accounts/users/me/profile`,
      transformResponse: (result) => result,
        async onQueryStarted(args,{ dispatch, queryFulfilled }) {
            const {data} = await queryFulfilled
                try {
                    if (data?.id) {
                        dispatch(setAuth())
                    }
                } catch (error) {
                    console.log(error,'error');
                }
        }
    }),
    getAuth: builder.query({
        query: (state) => `/accounts/users/auth/social/authenticate?state=${state}`,
      }),
    login: builder.query({
        query: () => `/accounts/users/auth/social/google/login?host=https:%2F%2Fanilibria.top`,
    }), 
      
  }),
})

export const { useLazyGetMeQuery, useLazyGetAuthQuery, useGetAuthQuery, useLazyLoginQuery } = authApi