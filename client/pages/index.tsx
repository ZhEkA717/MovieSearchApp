import MainLayout from "@/layouts/MainLayout";
import { useEffect } from "react";
import { useGetMoviesQuery } from "@/store/movie/movie.api";
import classes from '@/styles/MainPage.module.scss';
import MovieCard from "@/components/MovieCard";

const index = () => {
    const {data, isLoading, error} = useGetMoviesQuery(1);
    useEffect(() => {
        console.log(data);
    }, [data]);
    return (
        <MainLayout>
            <div className={classes.wrapper}>
                <div className={classes.title}>Movies</div>

                <div className={classes.items}>
                    {isLoading ? 'loading ...' : error ? 'error' :
                        data?.results.map((movie, i) => (
                            <MovieCard key={i} {...movie}/>
                        ))
                    }
                </div>
            </div>
        </MainLayout>
    );
};

export default index;