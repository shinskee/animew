import { useDispatch, useSelector } from 'react-redux';
import { useGetCatalogReleasesQuery, useGetCatalogSortQuery, useGetGenresQuery } from '../../../sevices/animeApi';
import GridList from '../../../widgets/GridList/ui/GridList';

import styles from './Catalog.module.scss'
import { useCallback, useEffect, useRef, useState } from 'react';
import { resetCatalog, setGenres, setPage, setSort } from '../../../features/catalog/catalogSlice';
import Pagination from '../../../shared/ui/Pagination';
import useOutClick from '../../../widgets/Search/useOutClick';
import Filters from './components/Filters/Filters';

function Catalog() {
    const { sortValue, page } = useSelector(state => state.catalog)
    const genresInput = useSelector(state => state.catalog.genres)
    const { data, isFetching, isSuccess, isLoading } = useGetCatalogReleasesQuery({page, sortValue, genres: genresInput.map(e => e.id)})
    const dataFavorites = useSelector(state => state.favorites.favorites)
    const sort = useGetCatalogSortQuery()
    const genres = useGetGenresQuery()
    const dispatch = useDispatch()
    const totalPages = data?.meta.pagination.total_pages
    const sortRef = useRef()
    useOutClick(() => setIsOpenSort(false), sortRef)
    const [ isOpenMobileFilter, setIsOpenMobileFilter ] = useState(false)

    // console.log(data.meta.pagination.total_pages);

    useEffect(() => {
        return () => {
            dispatch(resetCatalog())
        }
    }, [sort.isSuccess])

    const onClickSort = (value, label) => {
        dispatch(setSort({text: label, value: value}))
    }

    const onClickPage = useCallback((page) => {
        dispatch(setPage(page))
    }, [])

    const onClickGenre = (genre) => {
        dispatch(setGenres(genre))
    }

    return ( 
            <>
                    <main className={`${styles.catalog} container`}>
                        <div className={styles.catalogLeft}>
                            <GridList 
                                data={data?.data} 
                                isLoading={isLoading}
                                isFetching={isFetching}
                                isSuccess={isSuccess}
                                dataFavorites={dataFavorites}
                                count={32}
                                />
                        </div>
                        <div className={styles.catalogBottom}>
                            <Pagination 
                                    totalPages={totalPages}
                                    page={page} onClickPage={onClickPage}
                                />
                        </div>
                        <div className={styles.rightBlock}>
                            <div className={styles.filtersTitle} onClick={() => setIsOpenMobileFilter(!isOpenMobileFilter)}>
                                Фильтры
                            </div>
                            <Filters 
                                isOpenMobileFilter={isOpenMobileFilter}
                                genresData={genres.data}
                                sortData={sort.data}
                                onClickGenre={onClickGenre}
                                onClickSort={onClickSort}
                             />
                        </div>
                    </main>
                
            </>
)
}
export default Catalog;