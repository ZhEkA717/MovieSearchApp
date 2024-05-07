import { API_KEY, API_URL as baseUrl } from "@/constants";
import { MovieResponse } from "@/types/movie";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
    reducerPath: 'api/movies',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: build => ({
        getMovies: build.query<MovieResponse, number>({
            query: (page) => `?api_key=${API_KEY}&page=${page}&sort_by=popularity.desc`
        })
    })
});

export const { useGetMoviesQuery } = movieApi;