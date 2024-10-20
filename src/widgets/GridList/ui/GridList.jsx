import { useNavigate } from 'react-router-dom'
import NextButton from '../../../shared/ui/NextButton'
import PrevButton from '../../../shared/ui/PrevButton'
import SceletonTitleList from '../../../shared/ui/SceletonTitleList'
import styles from './GridList.module.scss'
import { useState } from 'react'
import FavoritesButton from '../../../shared/ui/FavoritesButton'

function GridList({ isLoading, data, onClickDeleteFavorite, onClickAddFavorite }) {
    const navigate = useNavigate()
    // const [isFavorite, setIsFavorite] = useState(true)

    return ( 
        <div className={styles.gridList}>
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
                                    {/* <button 
                                        onClick={() => {
                                            onClickDeleteFavorite(e.id) 
                                            setIsFavorite(!isFavorite)
                                        }}
                                        >
                                            <span className={isFavorite ? styles.buttonFavorite : styles.buttonUnFavorite }></span>
                                        </button> */}
                                    
                                    <FavoritesButton 
                                        onClickDeleteFavorite={onClickDeleteFavorite}
                                        onClickAddFavorite={onClickAddFavorite}
                                        id={e.id}

                                        />
                                </div>
                            ))}
                        </div>
                    ) : 
                    (
                        <SceletonTitleList />
                    )
                }
        </div>
     );
}

export default GridList;