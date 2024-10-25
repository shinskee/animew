import { useContext, useEffect, useState } from "react";
import { getFavoritesCarousel, getUpdates } from "../../../shared/api/api";
import Favorites from "../components/Favorites/Favorites";
import Updates from "../components/Updates/Updates";
import { useDispatch, useSelector } from "react-redux";
import { useGetFavoritesQuery, useGetUpdatesQuery } from "../../../sevices/animeApi";
import { resetFavorite, setFavorites } from "../../../features/favorites/favoriteSlice";

function Home() {
    const [page, setPage] = useState(1)
    const updates = useGetUpdatesQuery(page)
    const favorites = useGetFavoritesQuery()
    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()
    const favoritesData = useSelector(state => state.favorites.favorites)
    
    // useEffect(() => {
    //     if (isAuth) {
    //         return () => {
    //             dispatch(resetFavorite())
    //         }
    //     }
    // }, [])

    return ( 
        <main>
            {isAuth && 
                <Favorites 
                    data={favoritesData}
                    isFetching={favorites.isFetching}
                />
            }
            <Updates 
                dataFavorites={favoritesData} 
                data={updates.data} 
                page={page} 
                setPage={setPage} 
                isFetching={updates.isFetching}
            />
        </main>
     );
}

export default Home;