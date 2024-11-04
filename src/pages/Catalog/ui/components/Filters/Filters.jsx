import Filter from "./Filter";
import FilterGenres from "./FilterGenres/FilterGenres";
import FilterSort from "./FilterSort/FilterSort";
import styles from './Filters.module.scss'

function Filters({ genresData, sortData, onClickGenre, onClickSort, isOpenMobileFilter }) {
    return ( 
        <div className={isOpenMobileFilter ? `${styles.filters} ${styles.activeMobile}` : styles.filters}>
                <FilterGenres type={'Жанры'} placeholder={'Выбрать жанр'} data={genresData} onClickGenre={onClickGenre} />
                <FilterSort type={'Сортировка'} placeholder={'Выбрать сортировку'} data={sortData} onClickSort={onClickSort} />        
        </div>
     );
}

export default Filters;