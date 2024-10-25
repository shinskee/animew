import { useNavigate } from 'react-router-dom'
import SceletonTitleList from '../../../shared/ui/SceletonTitleList'
import styles from './GridList.module.scss'
import useFavorite from '../../../shared/helpers/useFavorite'
import { useEffect } from 'react'
import favoriteIcon from './../../../shared/images/favorite.svg'
import favoriteOffIcon from './../../../shared/images/favorite-off.svg'

function GridList({ data, isLoading, isSuccess, dataFavorites, count }) {
    const navigate = useNavigate()
    const { onClickAddFavorite, onClickDeleteFavorite } = useFavorite()
    
    // if (isLoading) return <div>...Загрузка</div>

    if (isSuccess)     
    return ( 
        <section className={styles.gridList}>
                {
                !isLoading ? 
                    (
                        <div 
                            className={styles.list}
                            >
                            {data && data.map(e => (
                                <div key={e.id} className={styles.card}>
                                    <img src={`https://anilibria.top${e.posters?.small.url}`} alt="" onClick={() => navigate(`/title/${e.id}`)} />
                                    <img src={`https://anilibria.top${e.poster?.src}`} alt="" onClick={() => navigate(`/title/${e.id}`)} />
                                    {
                                        dataFavorites?.filter(v => v.id === e.id).length === 1 ? (
                                            <button onClick={() => onClickDeleteFavorite(e.id, e)}>
                                                <img src={favoriteIcon} alt="" />
                                            </button>
                                        ) : (
                                            <button onClick={() => onClickAddFavorite(e.id, e)}>
                                                <img src={favoriteOffIcon} alt="" />
                                            </button>
                                        )
                                    }
                                </div>
                            ))}
                        </div>
                    ) : 
                    (
                        <SceletonTitleList count={count} />
                    )
                }
        </section>
     );
}

export default GridList;