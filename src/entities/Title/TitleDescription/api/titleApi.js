import { api } from "../../../../shared/api/api";
import { episodesListActions } from "../../../Episodes/EpisodesList/model/episodesListSlice";
import { titleDescriptionActions } from "../model/TitleDescriptionSlice";

const titleApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTitle: builder.query({
      query: (id) => `title?id=${id}&playlist_type=array`,
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const response = await queryFulfilled;
        const data = response.data
        const episodesList = response.data.player.list;
        const host = response.data.player.host;
        dispatch(episodesListActions.setEpisodesList(episodesList));
        dispatch(episodesListActions.setHost(host));
        dispatch(titleDescriptionActions.setTitleDescription(data))
      },
    }),
  }),
});

export const useGetTitle = titleApi.useGetTitleQuery;
export const useGetTitleLazy = titleApi.useLazyGetTitleQuery;
