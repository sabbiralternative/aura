import { API } from "../../../api";
import handleDecryptData from "../../../utils/handleDecryptData";
import { baseApi } from "../../api/baseApi";

export const eventsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllGroupEvents: builder.query({
      query: (sports) => {
        return {
          url: `${API.groupSportsBook}/${sports}`,
          method: "GET",
          headers: {
            "Cache-Control": "public",
            "max-age": 1,
          },
        };
      },
      transformResponse: (data) => {
        const decryptionData = handleDecryptData(JSON.stringify(data));
        return decryptionData;
      },
    }),
    getEventDetails: builder.query({
      query: ({ eventTypeId, eventId }) => {
        return {
          url: `${API.eventDetails}/${eventTypeId}/${eventId}`,
          method: "GET",
          headers: {
            "Cache-Control": "public",
            "max-age": 1,
          },
        };
      },
      // transformResponse: (data) => {
      //   console.log(data);
      //   const decryptionData = handleDecryptData(JSON.stringify(data));

      //   return decryptionData;
      // },
    }),
    order: builder.mutation({
      query: (payload) => {
        return {
          url: `${API.order}`,
          method: "POST",
          body: payload,
        };
      },
    }),
    getLadder: builder.mutation({
      query: (payload) => {
        return {
          url: `${API.ladder}/${payload.marketId}`,
          method: "POST",
          body: payload.data,
        };
      },
    }),
    editButtonValues: builder.mutation({
      query: (payload) => {
        return {
          url: `${API.buttonValue}`,
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
});

export const {
  useGetAllGroupEventsQuery,
  useOrderMutation,
  useGetLadderMutation,
  useEditButtonValuesMutation,
  useGetEventDetailsQuery,
} = eventsApi;
