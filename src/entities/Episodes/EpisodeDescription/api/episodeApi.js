import { api } from "../../../../shared/api/api";

const episodeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getEpisode: builder.query({
      query: (id) => `title?id=${id}&filter=player&playlist_type=array`,
      
    }),
  }),
});

export const useGetEpisode = episodeApi.useGetEpisodeQuery