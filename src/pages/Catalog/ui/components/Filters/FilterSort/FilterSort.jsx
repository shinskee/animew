import { useSelector } from 'react-redux';
import styles from './../Filters.module.scss'
import { useState } from 'react';
import FilterSortItem from './FilterSortItem';
import FilterTitle from '../FilterTitle';

function FilterSort({ type, onClickSort, data }) {
    const sortText = useSelector(state => state.catalog.sortText)
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
                description={"Укажите способ сортировки для отображения всех тайтлов в каталоге"}
            />
            <div className={styles.filterContent}>
                <div onClick={onClickAnimation} className={isClick ? `${styles.filterActive} ${styles.clickAnimation}`: styles.filterActive}>
                    {sortText}
                </div>
                <ul className={isOpenFilter ? `${styles.filterList} ${styles.active}` : styles.filterList}>
                    {data && (
                        data.map(item => (
                            <FilterSortItem key={item.value} sortText={sortText} item={item} onClickItem={onClickSort} />
                        ))
                    )}
                </ul>
            </div>
        </div>
     );
}

export default FilterSort;