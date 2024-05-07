export interface MovieResponse {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number
} 

export interface Movie {
    id: number,
    original_title: string,
    poster_path: string,
    release_date: string,
    vote_average: number,
    vote_count: number
    genre_ids: number[],
}

export interface MovieState {
    loading: boolean,
    movie: MovieResponse,
    error: string,
}