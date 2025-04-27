import { current } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setEpisodes } from '../features/title/titleSlice'
import { setDuration, setUrl } from '../features/player/playerSlice'

export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://api.anilibria.tv/v3/',
    prepareHeaders:  headers => {
        headers.set('Authorization', `Bearer ${localStorage.getItem('sn-token')}`)
    }}),
  endpoints: (builder) => ({
    getUpdates: builder.query({
      // query: (page) => `title/updates?page=${page}&limit=8`,
      query: () => `title/updates?limit=24`,
    }),
    getFavorites: builder.query({
        query: () => `https://anilibria.app/api/v1/accounts/users/me/favorites/releases`,
      }),
      getSearch: builder.query({
        query: (searchText) => `title/search?search=${searchText}&limit=-1&`,
      }),
      addFavorite: builder.query({
        query: (id) => ({
            url: `https://anilibria.app/api/v1/accounts/users/me/favorites`,
            method: `POST`,
            body: [{release_id: Number(id)}]
        }),
      }),
      deleteFavorite: builder.query({
        query: (id) => ({
            url: `https://anilibria.app/api/v1/accounts/users/me/favorites`,
            method: `DELETE`,
            body: [{release_id: Number(id)}]
        })
      }),
      getCatalogReleases: builder.query({
        query: ({page, sortValue, genres, searchText, type, status, season, sound, age}) => `https://anilibria.app/api/v1/anime/catalog/releases?page=${page}&limit=${10}&f[sorting]=${sortValue}
        &${genres && `f[genres]=${genres}`}&${searchText && `f[search]=${searchText}`}
        &${type && `f[types]=${type}`}&${status && `f[publish_statuses]=${status}`}
        &${season && `f[seasons]=${season}`}&${sound && `f[production_statuses]=${sound}`}
        &${age && `f[age_ratings]=${age}`}`,
        // Only have one cache entry because the arg always maps to one string
        serializeQueryArgs: ({ endpointName }) => {
                return endpointName
        },
        // Always merge incoming data to the cache entry
        merge: (currentCache, newItems, { arg }) => { 
            if ( arg.page !== 1 ) {
              currentCache.data.push(...newItems.data);
            } else {
              currentCache.data = newItems.data
            }
        },
        // Refetch when the page arg changes
        forceRefetch({ currentArg, previousArg }) {
            return currentArg !== previousArg;
        }
      }),
      getCatalogSort: builder.query({
        query: () => `https://anilibria.app/api/v1/anime/catalog/references/sorting`,
      }),
      getTitle: builder.query({
        query: (id) => `title?id=${id}`,
        transformResponse: (result) => result,
        async onQueryStarted(args,{ dispatch, queryFulfilled }) {
            const {data} = await queryFulfilled
                try {
                    dispatch(setEpisodes(data.episodes))
                } catch (error) {
                    console.log(error,'error');
                }
        }
      }),
      getGenres: builder.query({
        query: () => `https://anilibria.app/api/v1/anime/catalog/references/genres`,
      }),
      getTypes: builder.query({
        query: () => `https://anilibria.app/api/v1/anime/catalog/references/types`,
      }),
      getStatus: builder.query({
        query: () => `https://anilibria.app/api/v1/anime/catalog/references/publish-statuses`,
      }),
      getSounds: builder.query({
        query: () => `https://anilibria.app/api/v1/anime/catalog/references/production-statuses`,
      }),
      getSeasons: builder.query({
        query: () => `https://anilibria.app/api/v1/anime/catalog/references/seasons`,
      }),
      getAges: builder.query({
        query: () => `https://anilibria.app/api/v1/anime/catalog/references/age-ratings`,
      }),
      getPopular: builder.query({
        query: () => `https://anilibria.app/api/v1/anime/catalog/releases?page=1&limit=10&f[sorting]=RATING_DESC`,
      }),
      getGenresMain: builder.query({
        query: () => `https://anilibria.app/api/v1/anime/genres`,
      }),
      getEpisode: builder.query({
        query: (releaseEpisodeId) => `https://anilibria.app/api/v1/anime/releases/episodes/${releaseEpisodeId}`,
        transformResponse: (result) => result,
        async onQueryStarted(args,{ dispatch, queryFulfilled }) {
            const {data} = await queryFulfilled
                try {
                    dispatch(setUrl(data.hls_720))
                    dispatch(setDuration(data.duration))
                } catch (error) {
                    console.log(error,'error');
                }
        }
      }),
  }),
})

export const { useGetUpdatesQuery, useLazyGetFavoritesQuery,
    useGetFavoritesQuery,
     useLazyGetSearchQuery, useGetSearchQuery,
    useLazyAddFavoriteQuery, useLazyDeleteFavoriteQuery,
    useGetCatalogReleasesQuery,
    useLazyGetCatalogReleasesQuery,
    useGetCatalogSortQuery,
    useGetTitleQuery,
    useGetGenresQuery,
    useGetTypesQuery,
    useGetStatusQuery,
    useGetSoundsQuery,
    useGetSeasonsQuery,
    useGetAgesQuery,
    useGetPopularQuery,
    useGetGenresMainQuery,
    useGetEpisodeQuery
 } = animeApi