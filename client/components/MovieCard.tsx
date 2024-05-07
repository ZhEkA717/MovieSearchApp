import { Movie } from '@/types/movie';
import {FC} from 'react';
import classes from '@/styles/MovieCard.module.scss';

const MovieCard: FC<Movie> = ({ original_title, poster_path, release_date, vote_average, vote_count, genre_ids }) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.poster}>
                <img src={'https://image.tmdb.org/t/p/w185' + poster_path} alt="poster" />
            </div>
            <div className={classes.info}>
                <div className={classes.title}>{original_title}</div>
                <div className={classes.date}>{new Date(release_date).getFullYear()}</div>
                <div className={classes.vote}>
                    <img src="/assets/icons/fill-star.svg" alt="star" />
                    <span>{vote_average}</span>
                    <span> ({vote_count})</span>
                </div>
                <div className="genres">Genres: {genre_ids.map((item, i) => (
                    <span key={i}>{ (i? ', ': ' ') + item}</span>
                ))}</div>
            </div>
            <div className={classes.rating}>
                <img src="/assets/icons/empty-star.svg" alt="" />
                <span></span>
            </div>
        </div>
    );
};

export default MovieCard;