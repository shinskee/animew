import { useDispatch, useSelector } from 'react-redux';
import { useGetAgesQuery, useGetCatalogReleasesQuery, useGetCatalogSortQuery, useGetGenresQuery, useGetSeasonsQuery, useGetSoundsQuery, useGetStatusQuery, useGetTypesQuery } from '../../../sevices/animeApi';
import styles from './Catalog.module.scss'
import { useEffect, useRef, useState } from 'react';
import { resetCatalog, setAges, setGenres, setPage, setSeasons, setSort, setSounds, setStatus, setType } from '../../../features/catalog/catalogSlice';
import useOutClick from '../../../widgets/Search/useOutClick';
import Filters from './components/Filters/Filters';
import CatalogList from './components/CatalogList/CatalogList';
import FilterOpen from './../../../shared/images/filter-open.svg?react'
import FilterClose from './../../../shared/images/filter-close.svg?react'
import { setSearchText } from '../../../features/search/searchSlice';
import Search from './components/Search/Search';
import { useInView } from 'react-intersection-observer';
import { useCatalog } from '../hooks/useCatalog';
import transition from '../../../app/transition';

function Catalog() {
    const { searchText } = useSelector(state => state.search)
    const { sortValue, type, status, age, sound, season, page } = useSelector(state => state.catalog)
    // const [ page, setPage ] = useState(1)
    const genresInput = useSelector(state => state.catalog.genres)
    const { data, isFetching, isSuccess, isLoading } = useGetCatalogReleasesQuery({page, sortValue, genres: genresInput.map(e => e.id), searchText, type, status, season, sound, age})
    const dataFavorites = useSelector(state => state.favorites.favorites)
    const dispatch = useDispatch()
    const [ isOpenFilter, setIsOpenFilter ] = useState(true)
    const { ref, inView } = useInView({
        threshold: 0.1,
    })
    const { onClickAge, onClickGenre, onClickReset,
        onClickSeason, onClickSort, onClickSound,
        onClickStatus, onClickType, 
        sort, genres, types, statuses,
        seasons, ages, soundes } = useCatalog()

    useEffect(() => {
        window.scrollTo(0, 0)

        return () => {
            dispatch(resetCatalog())
            dispatch(setSearchText(''))
        }
    }, [])

    return ( 
        <main className={`${styles.catalog} container`}>
                        <div className={styles.catalogTop}>
                            <Search setPage={setPage} />
                            <div ref={ref} className={styles.filterButton} onClick={() => setIsOpenFilter(!isOpenFilter)}>
                                {isOpenFilter ? <FilterClose /> : <FilterOpen />}
                            </div>
                        </div>
                        <div className={styles.catalogCenter}>
                            <CatalogList
                                meta={data?.meta}
                                data={data?.data} 
                                isLoading={isLoading}
                                isFetching={isFetching}
                                isSuccess={isSuccess}
                                dataFavorites={dataFavorites}
                            />
                            {isOpenFilter && 
                                <div className={styles.rightBlock}>
                                    <Filters
                                        typesData={types.data}
                                        genresData={genres.data}
                                        sortData={sort.data}
                                        onClickType={onClickType}
                                        onClickGenre={onClickGenre}
                                        onClickSort={onClickSort}
                                        statusData={statuses.data}
                                        onClickStatus={onClickStatus}
                                        seasonData={seasons.data}
                                        onClickSeason={onClickSeason}
                                        soundData={soundes.data}
                                        onClickSound={onClickSound}
                                        ageData={ages.data}
                                        onClickAge={onClickAge}
                                    />

                                    {
                                        age !== '' || season !== '' || sound !== '' || status !== '' 
                                        || type !== '' || genresInput.length !== 0 || sortValue !== 'FRESH_AT_DESC' 
                                        ? <button onClick={onClickReset} className={styles.buttonReset}>Сбросить</button> 
                                        : null
                                    }
                                </div>
                            }   
                            {/* <GridList 
                                data={data?.data} 
                                isLoading={isLoading}
                                isFetching={isFetching}
                                isSuccess={isSuccess}
                                dataFavorites={dataFavorites}
                                count={32}
                                /> */}
                        </div>
                        <div className={styles.catalogBottom}>
                            {/* <Pagination 
                                totalPages={totalPages}
                                page={page} onClickPage={onClickPage}
                            /> */}
                        </div>
                        {/* <button onClick={() => setLimit(prev => prev + 3)}>Показать еще</button> */}
                        {/* {!inView && <button onClick={() => window.scrollTo(0, 0)} className={styles.up}>ВВЕРХ</button>} */}
        </main> 
)
}
export default transition(Catalog);