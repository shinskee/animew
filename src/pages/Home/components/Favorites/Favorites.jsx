import { deleteFavorite } from "../../../../shared/api/api";
import { useNavigate } from "react-router-dom";
import favoriteIcon from './../../../../shared/images/favorite.svg'
import { useDispatch } from "react-redux";
import { setDeleteFavorite } from "../../../../features/favorites/favoriteSlice";

import styles from './Favorites.module.scss'
import { useCallback } from "react";
import SceletonTitleList from "../../../../shared/ui/SceletonTitleList";

function Favorites({ data, isFetching }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onClickDeleteFavorite = useCallback(async (id) => {
        const response = await deleteFavorite(id)
        if (response.status === 200) {
            dispatch(setDeleteFavorite(id))
        }
    }) 

    return (
        <>
            {/* {data && (
                <div className={`${styles.favorites} container`}>
                    <h2 className={styles.favoritesTitle} onClick={() => navigate('/favorites')}>
                        Избранное
                    </h2>
                    <div className={styles.favoritesCards}>
                        {data.slice(0,8).map(e => (
                            <div className={styles.favoritesCard} key={e.id}>
                                <img src={`https://anilibria.top${e.poster.src}`} alt="" onClick={() => navigate(`/title/${e.id}`)} />
                                <button onClick={() => onClickDeleteFavorite(e.id)}>
                                    <img src={favoriteIcon} alt="" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )} */}
            {data && (
                <div className={`${styles.favorites} container`}>
                    <h2 className={styles.favoritesTitle} onClick={() => navigate('/favorites')}>
                        Избранное
                    </h2>
                    
                    {!isFetching ? (
                        <div className={styles.favoritesCards}>
                            {data.slice(0,8).map(e => (
                                <div className={styles.favoritesCard} key={e.id}>
                                    <img src={`https://anilibria.top${e.poster.src}`} alt="" onClick={() => navigate(`/title/${e.id}`)} />
                                    <button onClick={() => onClickDeleteFavorite(e.id)}>
                                        <img src={favoriteIcon} alt="" />
                                    </button>
                                </div>
                            ))}
                        </div>
                        ) : (
                            <SceletonTitleList />
                        )}
                </div>
            )}
        </>
    )
}

export default Favorites;