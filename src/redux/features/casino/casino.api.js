import { API } from "../../../api";
import { baseApi } from "../../api/baseApi";

export const casinoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLiveCasinoThumbnail: builder.query({
      query: () => {
        return {
          url: `${API.casino}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetLiveCasinoThumbnailQuery } = casinoApi;
