import { useSelector } from 'react-redux';
import styles from './../Filters.module.scss'
import { useState } from 'react';
import FilterGenreItem from './FilterTypeItem';
import FilterTypeItem from './FilterTypeItem';
import FilterTitle from '../FilterTitle';

function FilterTypes({ type, onClickType, data }) {
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
            <FilterTitle 
                title={type}
                description={"Укажите типы релизов, по которым будут отфильтрованы все релизы"}
            /> 
            <div className={styles.filterContent}>
                <ul className={styles.filterItemList}>
                    {data?.map(item => (
                        <FilterTypeItem key={item.value} onClickItem={onClickType} item={item} />
                    ))}
                </ul>
            </div>
        </div>
     );
}

export default FilterTypes;