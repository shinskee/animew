import { api } from "../../../../shared/api/api";

const titleApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTitle: builder.query({
      query: (id) => `title?id=${id}&playlist_type=array`,

    }),
  }),
});

export const useGetTitle = titleApi.useGetTitleQuery