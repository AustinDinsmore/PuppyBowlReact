import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define an API using createApi
export const puppyBowlApi = createApi({
  reducerPath: "puppyBowlApi",
  // Define a base query function that all endpoints will use as the base of their request
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2403-FTB-ET-WEB-PT",
  }),
  // Define endpoints for our API service
  endpoints: (builder) => ({
    // Define an endpoint that fetches players
    getPlayers: builder.query({
      query: () => '/players',
    }),
    getPlayer: builder.query({
      query: (id) => `/players/${id}`,
    }),
    addPlayers: builder.mutation({
        query: (body) => ({
            url: "/players",
            method: "POST",
            body,
        }),
    }),
    updatePlayers: builder.mutation({
        query: ({id, body}) => ({
            url: `/${id}`,
            method: "PUT",
            body,
        }),
    }),
    deletePlayer: builder.mutation({
      query: (id) => ({
        url: `/players/${id}`,
        method: "DELETE",
        body,
      })
    })
  }),
});

// Export hooks for each endpoint
export const {useGetPlayerQuery, useGetPlayersQuery, useAddPlayersMutation, useUpdatePlayersMutation, useDeletePlayerMutation} = puppyBowlApi