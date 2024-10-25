import { useNavigate } from 'react-router-dom'
import SceletonTitleList from '../../../shared/ui/SceletonTitleList'
import favoriteIcon from './../../../shared/images/favorite.svg'
import favoriteOffIcon from './../../../shared/images/favorite-off.svg'
import useFavorite from '../../../shared/helpers/useFavorite'

import styles from './Carousel.module.scss'

function Carousel({ isFetching, data, dataFavorites }) {
    const navigate = useNavigate()
    const { onClickAddFavorite, onClickDeleteFavorite } = useFavorite()

    return ( 
        <div className={styles.carousel}>
                {!isFetching ? 
                    (<div className={styles.list}>
                            {data && data.map(e => (
                                <div key={e.id} className={styles.card} >
                                    <img src={`https://anilibria.top${e.posters.small.url}`} alt="" onClick={() => navigate(`/title/${e.id}`)} />       
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
                    ) : (
                        <SceletonTitleList />
                    )
                }
        </div>
     );
}

export default Carousel;