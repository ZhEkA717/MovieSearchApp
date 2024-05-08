import { Genre, GenreResponse, Movie } from '@/types/movie';
import {FC} from 'react';
import classes from '@/styles/MovieCard.module.scss';

type MovieCardProps = {
    movie: Movie,
    genre: GenreResponse | undefined
}

const MovieCard: FC<MovieCardProps> = ({movie, genre}) => {
    const intToString = (num: number) => {
        num = +num.toString().replace(/[^0-9.]/g, '');
        if (num < 1000) {
            return num;
        }
        let si = [
            { v: 1E3, s: "K" },
            { v: 1E6, s: "M" },
            { v: 1E9, s: "B" },
            { v: 1E12, s: "T" },
            { v: 1E15, s: "P" },
            { v: 1E18, s: "E" }
        ];
        let index;
        for (index = si.length - 1; index > 0; index--) {
            if (num >= si[index].v) {
                break;
            }
        }
        return (num / si[index].v).toFixed(1).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[index].s;
    };

    const getGenre = (id: number) => {
        return genre?.genres.find(item => item.id === id)?.name;
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.poster}>
                <img src={'https://image.tmdb.org/t/p/w185' + movie.poster_path} alt="poster" />
            </div>
            <div className={classes.info}>
                <div className={classes['info-wrapper']}>
                    <div className={classes.title}>{movie.original_title}</div>
                    <div className={classes.date}>{new Date(movie.release_date).getFullYear()}</div>
                    <div className={classes.vote}>
                        <div>
                            <img src="/assets/icons/fill-star.svg" alt="star" />
                            <span>{movie.vote_average.toFixed(1)}</span>
                        </div>
                        <div>{movie.vote_count ? `(${intToString(movie.vote_count)})` : ''}</div>
                    </div>
                </div>
                <div className={classes.genres}>
                    <span className={classes.title}>Genres</span> 
                    {movie.genre_ids.map((item, i) => (
                        <span className={classes.name} key={i}>{ (i? ', ': ' ') + getGenre(item)}</span>
                    ))}
                </div>
            </div>
            <div className={classes.rating}>
                <img src="/assets/icons/empty-star.svg" alt="rate-star" />
                {/* <img src="/assets/icons/rate-star.svg" alt="rate-star" />
                <span>9</span> */}
            </div>
        </div>
    );
};

export default MovieCard;