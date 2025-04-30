import { api } from "../../../../shared/api/api";
import { episodesListActions } from "../../EpisodesList/model/episodesListSlice";

const episodeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getEpisode: builder.query({
      query: (id) => `title?id=${id}&filter=player&playlist_type=array`,      
      async onQueryStarted(_arg, {dispatch, queryFulfilled}) {
        const response = await queryFulfilled
        const data = response.data.player.list
        const host = response.data.player.host
        dispatch(episodesListActions.setEpisodesList(data))
        dispatch(episodesListActions.setHost(host))
      }
    }),
  }),
});

export const useGetEpisode = episodeApi.useGetEpisodeQuery