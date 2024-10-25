import { useDispatch, useSelector } from 'react-redux';
import { useGetCatalogReleasesQuery, useGetCatalogSortQuery, useLazyGetCatalogReleasesQuery } from '../../../sevices/animeApi';
import GridList from '../../../widgets/GridList/ui/GridList';

import styles from './Catalog.module.scss'
import { useCallback, useEffect, useRef, useState } from 'react';
import { setPage, setSortValue } from '../../../features/catalog/catalogSlice';
import Pagination from '../../../shared/ui/Pagination';
import useOutClick from '../../../widgets/Search/useOutClick';

function Catalog() {
    const { sortValue, page } = useSelector(state => state.catalog)
    const { data, isFetching, isSuccess } = useGetCatalogReleasesQuery({page, sortValue})
    const dataFavorites = useSelector(state => state.favorites.favorites)
    const sort = useGetCatalogSortQuery()
    const [ isOpenSort, setIsOpenSort ] = useState(false)
    const [ sortLabel, setSortLabel ] = useState('')
    const [ paginationChunk, setPaginationChunk ] = useState([0, 10])
    const dispatch = useDispatch()
    const totalPages = data?.meta.pagination.total_pages
    const sortRef = useRef()
    useOutClick(() => setIsOpenSort(false), sortRef)

    // console.log(data.meta.pagination.total_pages);
    

    useEffect(() => {
        if (sort.isSuccess) {
            setSortLabel(sort.data[0].label)
        }

        return () => {
            setSortLabel('')
        }
    }, [sort.isSuccess])

    const onClickSort = () => {
        setIsOpenSort(true)
    }

    const onClickSortValue = (label, value) => {
        setIsOpenSort(!isOpenSort)
        setSortLabel(label)
        dispatch(setSortValue(value))
    }

    const onClickPage = useCallback((page) => {
        dispatch(setPage(page))
    })

    const onClickNextPagintation = useCallback(() => {
        setPaginationChunk([paginationChunk[1], paginationChunk[1] + 10])
    })

    const onClickPrevPagintation = useCallback(() => {
        setPaginationChunk([paginationChunk[0] - 10, paginationChunk[1] - 10])
    })
    
    // if (isFetching) return <div>...Загрузка</div>

    return ( 
            <>
                {data && (
                    <main className={`${styles.catalog} container`}>
                        <div className={styles.sort} ref={sortRef} >
                            Сортировка по <span onClick={onClickSort} >{sortLabel}</span>
                        </div>
                        {isOpenSort && (
                                <div className={styles.sortList}>
                                        {
                                            sort.data && (
                                                sort.data.map(e => (
                                                    <div key={e.value} onClick={() => onClickSortValue(e.label, e.value)}>
                                                        {e.label}
                                                    </div>
                                                ))
                                            )
                                        }
                                    </div>
                                )}
                        <GridList 
                            data={data.data} 
                            isLoading={isFetching}
                            isSuccess={isSuccess}
                            dataFavorites={dataFavorites}
                            count={24}
                            />
                        <Pagination totalPages={totalPages}
                            page={page} onClickPage={onClickPage}
                            onClickNext={onClickNextPagintation}
                            onClickPrev={onClickPrevPagintation}
                            paginationChunk={paginationChunk} />
                    </main>
                )}
            </>
)
}
export default Catalog;