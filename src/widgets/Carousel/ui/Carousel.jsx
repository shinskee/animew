import { useNavigate } from 'react-router-dom'
import NextButton from '../../../shared/ui/NextButton'
import PrevButton from '../../../shared/ui/PrevButton'
import SceletonTitleList from '../../../shared/ui/SceletonTitleList'
import { addFavorite, deleteFavorite } from '../../../shared/api/api'

import styles from './Carousel.module.scss'

function Carousel({ isLoading, data, setPage, page, dataFavorites, setDataFavorites }) {
    const navigate = useNavigate()
    const onclickLeft = () => {
        setPage(prev => prev - 1)
    }

    const onclickRight = () => {
        setPage(prev => prev + 1)
    }

    const onClickAddFavorite = async (id, item) => {
        const response = await addFavorite(id)
        if (response.status === 200) {
            setDataFavorites([{id: item.id, poster: {src: item.posters.small.url} }, ...dataFavorites])
        }
    }

    const onClickDeleteFavorite = async (id) => {
        const response = await deleteFavorite(id)
        if (response.status === 200) {
            setDataFavorites(dataFavorites.filter(e => e.id !== id))
        }
    }

    return ( 
        <div className={styles.carousel}>
            <PrevButton onClick={onclickLeft} disabled={page <= 1} />
                {
                !isLoading ? 
                    (
                        <div 
                            className={styles.list}
                            >
                            {data && data.map(e => (
                                <div key={e.id} className={styles.card} >
                                    <img src={`https://anilibria.top${e.posters.small.url}`} alt="" onClick={() => navigate(`/title/${e.id}`)} />       
                                    {/* {e.names.ru} */}
                                    <button onClick={
                                        dataFavorites.filter(v => v.id === e.id).length === 1 ? () => onClickDeleteFavorite(e.id, e) : () => onClickAddFavorite(e.id, e)
                                        } className={
                                        dataFavorites.filter(v => v.id === e.id).length === 1 ? styles.buttonUnFavorite : styles.buttonFavorite
                                    }></button>
                                </div>
                            ))}
                        </div>
                    ) : 
                    (
                        <SceletonTitleList />
                    )
                }
            <NextButton onClick={onclickRight} />
        </div>
     );
}

export default Carousel;