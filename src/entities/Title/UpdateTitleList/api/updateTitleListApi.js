import { api } from "../../../../shared/api/api";

const updateTitleListApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUpdateTitleList: builder.query({
      query: () => `title/updates?limit=24`,
    }),
  }),
});

export const useGetUpdateTitleList = updateTitleListApi.useGetUpdateTitleListQuery