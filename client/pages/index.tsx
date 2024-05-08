import MainLayout from "@/layouts/MainLayout";
import { useEffect } from "react";
import { IQuery, useGetGenresQuery, useGetMoviesQuery } from "@/store/movie/movie.api";
import classes from '@/styles/MainPage.module.scss';
import MovieCard from "@/components/MovieCard";
import Filter from "@/components/Filter";

const index = () => {
    const {data: movieRes, isLoading: mLoading, error: mError} = useGetMoviesQuery({
        page:1,
        genreId: 28
    });
    const {data: genreRes, isLoading: gLoading, error: gError} = useGetGenresQuery(1);

    useEffect(() => {
    }, [movieRes]);
    return (
        <MainLayout>
            <div className={classes.wrapper}>
                <div className={classes.title}>Movies</div>
                <Filter genre={genreRes}/>
                <div className={classes.items}>
                    {mLoading || gLoading ? 'loading ...' : mError || gError ? 'error' :
                        movieRes?.results.map((movie, i) => (
                            <MovieCard key={i} movie={movie} genre={genreRes} />
                        ))
                    }
                </div>
            </div>
        </MainLayout>
    );
};

export default index;