import MainLayout from "@/layouts/MainLayout";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useGetMoviesQuery } from "@/store/movie/movie.api";
const url = 'https://api.themoviedb.org/3/discover/movie?api_key=117bfebf7dc7bde2a874520e9cab84f9&include_adult=false&include_video=false';

const index = () => {
    const {data, isLoading, error} = useGetMoviesQuery(5);
    // const [movies, setMovies] = useState([]);
    // useEffect(() => {
    //     axios.get(url).then(res => {
    //         setMovies(res.data.results);
    //         console.log(res.data);
    //     });
    // }, []);
    return (
        <MainLayout>
            <div>
                Главная страница
                {isLoading ? 'loading ...' : error ? 'error' :
                    data?.results.map(({ original_title }, i) => (
                        <div key = {i}>
                            <div>{original_title}</div>
                        </div>
                    ))
                }
            </div>
        </MainLayout>
    );
};

export default index;