import { useState } from "react";
import { deleteFavorite } from "../../../../shared/api/api";
import { useNavigate } from "react-router-dom";

import styles from './Favorites.module.scss'

function Favorites({ data, isLoading, setData }) {
    const [page, setPage] = useState(1)
    const navigate = useNavigate()

    const onClickDeleteFavorite = async (id) => {
        const response = await deleteFavorite(id)
        if (response.status === 200) {
            setData(data.filter(e => e.id !== id))
        }
    }

    if (isLoading) return <div>...Загрузка</div>
    return (
        <>
            {data && (
                <div className="container">
                    <h2 className={styles.favoritesTitle} onClick={() => navigate('/favorites')}>
                        Избранное
                    </h2>
                    <div className={styles.favoritesCards}>
                        {data.slice(0,6).map(e => (
                            <div className={styles.favoritesCard} key={e.id}>
                                <img src={`https://anilibria.top${e.poster.src}`} alt="" onClick={() => navigate(`/title/${e.id}`)} />
                                <button onClick={() => onClickDeleteFavorite(e.id)}></button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Favorites;