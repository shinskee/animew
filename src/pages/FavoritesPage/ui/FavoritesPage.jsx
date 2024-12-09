import GridList from "../../../widgets/GridList";
import styles from './FavoritesPage.module.scss'
import { useLazyGetFavoritesQuery } from "../../../sevices/animeApi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setFavorites } from "../../../features/favorites/favoriteSlice";
import { useNavigate } from "react-router-dom";
import transition from "../../../app/transition";

function FavoritesPage() {
    const isAuth = useSelector(state => state.auth.isAuth)
    const [ getFavorite, {data, isLoading, isSuccess, isFetching} ] = useLazyGetFavoritesQuery()
    const dataFavorites = useSelector(state => state.favorites.favorites)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
            const response = await getFavorite()
            if (response.isSuccess) {
                dispatch(setFavorites(response.data.data))   
            }
        }
        getData()
    }, [isAuth])

    if (!isAuth) navigate('/')
    if (isFetching) return <div>...Загрузка</div>
    if (isSuccess)
    return ( 
        <main>
            {data && (
                <div className="container">
                    <h2>
                        Избранное
                    </h2>
                    <GridList 
                        data={data.data} 
                        isLoading={isLoading}
                        isSuccess={isSuccess}
                        dataFavorites={dataFavorites}
                        />
                </div>
            )}
        </main>
     );
}

export default transition(FavoritesPage);