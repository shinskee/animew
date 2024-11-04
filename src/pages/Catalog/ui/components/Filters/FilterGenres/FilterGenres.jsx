import { useSelector } from 'react-redux';
import styles from './../Filters.module.scss'
import { useState } from 'react';
import FilterGenreItem from './FilterGenreItem';

function FilterGenres({ type, onClickGenre, data, placeholder }) {
    const genresInput = useSelector(state => state.catalog.genres)
    const [ isOpenFilter, setIsOpenFilter ] = useState(false)
    const [isClick, setIsClick] = useState(false)

    const onClickAnimation = () => {
        setIsOpenFilter(!isOpenFilter)
        setIsClick(true)
        setTimeout(() => {
            setIsClick(false)
        }, 200);
    }

    return ( 
        <div className={styles.filter}>
            <div className={styles.filterTitle} >
                {type}
            </div>
            <div className={styles.filterContent}>
                <div onClick={onClickAnimation} className={isClick ? `${styles.filterActive} ${styles.clickAnimation}`: styles.filterActive}>
                    {genresInput.length >= 1 ? (
                        genresInput.map((e, i) => (
                            i === 0 || i === -1 ? e.name : ', ' + e.name
                        ))
                    ) : placeholder}
                </div>
                <ul className={isOpenFilter ? `${styles.filterList} ${styles.active}` : styles.filterList}>
                    {data?.map(item => (
                        <FilterGenreItem key={item.id} onClickItem={onClickGenre} item={item} />
                    ))}
                </ul>
            </div>
        </div>
     );
}

export default FilterGenres;