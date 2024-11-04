import { useSelector } from 'react-redux';
import styles from './Filters.module.scss'
import { useState } from 'react';
import FilterItem from './FilterGenres/FilterGenreItem';

function Filter({ type, onClickGenre, data, placeholder }) {
    const genresInput = useSelector(state => state.catalog.genres)
    const [ isOpenFilter, setIsOpenFilter ] = useState(false)

    return ( 
        <div className={styles.filter}>
            <div className={styles.filterTitle}>
                {type}
            </div>
            <div className={styles.filterContent}>
                <div onClick={() => setIsOpenFilter(!isOpenFilter)} className={styles.filterActive}>
                    {genresInput.length >= 1 ? (
                        genresInput.map(e => (
                            e.name + ', '
                        ))
                    ) : placeholder}
                </div>
                <ul className={isOpenFilter ? `${styles.filterList} ${styles.active}` : styles.filterList}>
                    {data?.map(item => (
                        <FilterItem onClickGenre={onClickGenre} item={item} />
                    ))}
                </ul>
            </div>
        </div>
     );
}

export default Filter;