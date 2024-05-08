import { API_GENRE, API_KEY, API_MOVIE, API_URL as baseUrl } from "@/constants";
import { GenreResponse, MovieResponse } from "@/types/movie";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type IQuery = {
    page: number,
    genreId: number,
    releaseYear?: string,
    rating?: {
        from: number,
        to: number
    },
    sortBy?: string
}

export const movieApi = createApi({
    reducerPath: 'api/movies',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: build => ({
        getMovies: build.query<MovieResponse, IQuery>({
            query: ({page, genreId}) => `${API_MOVIE}?api_key=${API_KEY}&page=${page}&sort_by=popularity.desc&with_genres=${genreId}`
        }),
        getGenres: build.query<GenreResponse, number>({
            query: () => `${API_GENRE}?api_key=${API_KEY}&language=en`
        }),
    })
});

export const { useGetMoviesQuery, useGetGenresQuery } = movieApi;