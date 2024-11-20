import { useEffect, useState } from "react";
import Favorites from "../components/Favorites/Favorites";
import Updates from "../components/Updates/Updates";
import { useSelector } from "react-redux";
import { useGetGenresMainQuery, useGetPopularQuery, useGetUpdatesQuery } from "../../../sevices/animeApi";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";
import Genres from "../components/Genres/Genres";
import Loader from "../../../shared/ui/Loader/Loader";

function Home() {
    const [page, setPage] = useState(1)
    const popular = useGetPopularQuery()
    const updates = useGetUpdatesQuery()
    const genres = useGetGenresMainQuery()
    const isAuth = useSelector(state => state.auth.isAuth)
    const favoritesData = useSelector(state => state.favorites.favorites)
    const isFavoritesSet = useSelector(state => state.favorites.isFavoritesSet)

    useEffect(() => {
        document.title = 'Animew'
    }, [])

    if (popular.isLoading || updates.isLoading) return <Loader />

    return ( 
        <main>
            <Popular data={popular?.data?.data} isLoading={popular.isLoading} isError={popular.isError} />
            <Updates 
                dataFavorites={favoritesData} 
                data={updates.data} 
                page={page} 
                setPage={setPage} 
                isFetching={updates.isFetching}
            />
            {isAuth && 
                <Favorites 
                    data={favoritesData}
                    isFetching={isFavoritesSet}
                />
            }
            <Hero data={updates?.data} isLoading={updates.isLoading} isError={updates.isError} />
            <Genres data={genres?.data} isLoading={genres.isLoading} isError={genres.isError} />
        </main>
     );
}

export default Home;