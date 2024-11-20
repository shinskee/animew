import { useSelector } from "react-redux";
import Filter from "./Filter";
import FilterGenres from "./FilterGenres/FilterGenres";
import FilterSort from "./FilterSort/FilterSort";
import FilterTypes from "./FilterTypes/FilterTypes";
import FilterV2 from "./FilterV2";
import styles from './Filters.module.scss'

function Filters({ genresData, sortData, onClickGenre, onClickSort, isOpenMobileFilter, 
    typesData, onClickType, statusData, onClickStatus, ageData, onClickAge,
    soundData, onClickSound, seasonData, onClickSeason }) {
        const { type, status, age, sound, season } = useSelector(state => state.catalog)
    return ( 
        <div className={isOpenMobileFilter ? `${styles.filters} ${styles.activeMobile}` : styles.filters}>
                {/* <FilterGenres type={'Жанры'} placeholder={'Укажите жанры'} data={genresData} onClickGenre={onClickGenre} /> */}
                {/* <FilterSort type={'Сортировка'} placeholder={'Укажите способ сортировки'} data={sortData} onClickSort={onClickSort} />         */}
                {/* <FilterTypes type={'Тип'} data={typesData} onClickType={onClickType} /> */}
                <FilterV2 
                    type={'drop-down-multiple'}
                    title={'Жанры'}
                    placeholder={'Укажите жанры'}
                    data={genresData}
                    onClickItem={onClickGenre}
                />
                <FilterV2 
                    type={'drop-down-once'}
                    title={'Сортировка'}
                    placeholder={'Укажите способ сортировки'}
                    data={sortData}
                    onClickItem={onClickSort}
                />
                <FilterV2 
                    type={'button'}
                    title={'Тип'}
                    description={"Укажите типы релизов, по которым будут отфильтрованы все релизы"}
                    data={typesData}
                    onClickItem={onClickType}
                    value={type}
                />
                <FilterV2 
                    type={'button'}
                    title={'Статус выхода'}
                    description={"Укажите желаемые статусы выхода релиза, по которым будут отфильтрованы все тайтлы в каталоге"}
                    data={statusData}
                    onClickItem={onClickStatus}
                    value={status}
                />
                <FilterV2 
                    type={'button'}
                    title={'Статус озвучки'}
                    description={"Укажите желаемые статусы озвучки релиза, по которым будут отфильтрованы все тайтлы в каталоге"}
                    data={soundData}
                    onClickItem={onClickSound}
                    value={sound}
                />
                <FilterV2 
                    type={'button'}
                    title={'Сезоны'}
                    description={"Укажите желаемые сезоны выхода релизов, по которым будут отфильтрованы все тайтлы в каталоге"}
                    data={seasonData}
                    onClickItem={onClickSeason}
                    value={season}
                />
                <FilterV2 
                    type={'button'}
                    title={'Возрастной рейтинг'}
                    description={"Укажите допустимы возрстаной рейтинг релизов, по которым будут отфильтрованы все тайтлы"}
                    data={ageData}
                    onClickItem={onClickAge}
                    value={age}
                />
        </div>
     );
}

export default Filters;