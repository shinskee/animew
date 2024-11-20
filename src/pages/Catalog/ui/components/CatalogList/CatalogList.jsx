import { useNavigate } from 'react-router-dom';
import styles from './../../Catalog.module.scss'
import useFavorite from '../../../../../shared/helpers/useFavorite';
import SceletonTitleList from '../../../../../shared/ui/SceletonTitleList';
import SceletonCatalogList from '../../../../../shared/ui/SceletonCatalogList';
import { Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CatalogCard from './CatalogCard';
import { useDispatch } from 'react-redux';
import { setPageNext } from '../../../../../features/catalog/catalogSlice';
import Loader from './../../../../../shared/images/loader.svg?react'

function CatalogList({ data, meta, isLoading, isFetching, isSuccess, dataFavorites }) {
    const dispatch = useDispatch()
    const { ref, inView } = useInView({
        threshold: 0.5,
    })    
    
    useEffect(() => {
        if (inView) {
            if (data.length >= 10) {
                dispatch(setPageNext())
            }
        }
    }, [inView])
    
    // if (isLoading) return <div>...Загрузка</div>
    
    return ( 
        <div className={styles.catalogList}>
                {
                !isLoading ? 
                    (
                        <div 
                            className={styles.list}
                            >
                            {data.length > 0 ? data.map(e => (
                                <CatalogCard key={e.id} e={e} isLoading={isLoading} dataFavorites={dataFavorites} />
                            )) : (
                                <div className={styles.emptyData}>
                                    Ничего не найдено
                                    <span>По вашим параметрам не найдено ни одного релиза</span>
                                </div>
                            )}
                        </div>
                     ) : 
                    (
                        <SceletonCatalogList count={10} />
                    )
                } 
                {data?.length >= 10 && (
                    <div className={styles.loader} ref={ref}>
                        {inView && <Loader />}
                    </div>
                )}
        </div>
     );
}

export default CatalogList;