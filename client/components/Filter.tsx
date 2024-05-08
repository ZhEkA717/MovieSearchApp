import classes from '@/styles/Filter.module.scss';
import { GenreResponse } from '@/types/movie';
import { Select, ComboboxItem } from '@mantine/core';
import { FC, useState } from 'react';
import downIcon from '../public/assets/icons/Down.svg';
import Image from 'next/image';
import { useClickOutside } from '@mantine/hooks';

type FilterProps = {
    genre: GenreResponse | undefined;
}

const Filter: FC<FilterProps> = ({ genre }) => {
    const [value, setValue] = useState<ComboboxItem | null>(null);    
    
    const selectIcon = <Image
        style={{
            transform: `${false ? 'rotateX(180deg)' : ''}`,
            transition: '.3s'
        }}
        src={downIcon}
        alt="Picture of the author"
    />;
    
    const getGenreId = (name: string) => {
        return genre?.genres
            .filter((item) => (item.name === name))
            .map(({id}) => id);
    }
    return (

        <div className={classes.wrapper}>
            <div className={classes.genres}>
                <div className={classes.title}>Genres</div>
                <Select
                    value={value ? value.value : null}
                    onChange={(_value, option) => {
                        setValue(option)
                    }}
                    size='md'
                    withCheckIcon={false}
                    rightSection={selectIcon}
                    placeholder="Select genre"
                    data={genre?.genres.map(item => item.name)}
                />
            </div>
            <div className={classes.release}>
                <div className={classes.title}>Release year</div>
            </div>
            <div className={classes.rating}>
                <div className={classes.title}>Ratings</div>
            </div>
            <div className={classes.reset}>
                <button>Reset filters</button>
            </div>
        </div>
    );
};

export default Filter;