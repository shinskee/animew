import { useSelector } from "react-redux";
import FilterGenreItem from "./FilterGenres/FilterGenreItem";
import FilterTitle from "./FilterTitle";
import styles from './Filters.module.scss'
import { useState } from "react";
import FilterSortItem from "./FilterSort/FilterSortItem";
import FilterTypeItem from "./FilterTypes/FilterTypeItem";
import { motion } from "motion/react";

function FilterV2({ type, title, description, data, onClickItem, placeholder, value }) {
    const genresInput = useSelector(state => state.catalog.genres)
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

    if (type === 'drop-down-multiple')
    return ( 
        <div className={styles.filter}>
            <FilterTitle 
                title={title}
                description={"Укажите жанры, по которым будут отфильтрованы все наши релизы. При выборе нескольких — будет использована комбинация"}
            />
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
                        <FilterGenreItem key={item.id} onClickItem={onClickItem} item={item} />
                    ))}
                </ul>
            </div>
        </div>
     );

     if (type === 'drop-down-once') 
        return (
            <div className={styles.filter}>
            <FilterTitle 
                title={title}
                description={"Укажите способ сортировки для отображения всех тайтлов в каталоге"}
            />
            <div className={styles.filterContent}>
                <div onClick={onClickAnimation} className={isClick ? `${styles.filterActive} ${styles.clickAnimation}`: styles.filterActive}>
                    {sortText}
                </div>
                <ul className={isOpenFilter ? `${styles.filterList} ${styles.active}` : styles.filterList}>
                    {data && (
                        data.map(item => (
                            <FilterSortItem key={item.value} sortText={sortText} item={item} onClickItem={onClickItem} />
                        ))
                    )}
                </ul>
            </div>
        </div>
    )

    if (type === 'button') 
        return (
            <div className={styles.filter}>
                <FilterTitle 
                    title={title}
                    description={description}
                /> 
                <div className={styles.filterContent}>
                    <ul className={styles.filterItemList}>
                        {data?.map(item => (
                            <motion.button onClick={() => onClickItem(item.value)} key={item.value} whileHover={{ opacity: 0.8 }} whileTap={{ scale: 0.9, rotate: 3 }} className={value === item.value ? styles.filterItemButtonActive : styles.filterItemButton}>
                                <li>{item.description}</li>
                            </motion.button>
                        ))}
                    </ul>
                </div>
            </div>
        )
}

export default FilterV2;