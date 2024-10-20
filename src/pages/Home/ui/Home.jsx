import { useContext, useEffect, useState } from "react";
import { getFavorites, getFavoritesCarousel, getUpdates } from "../../../shared/api/api";
import Favorites from "../components/Favorites/Favorites";
import SearchList from "../components/SearchList/SearchList";
import Updates from "../components/Updates/Updates";
import { AuthContext } from "../../../shared/auth/AuthContext";
import { useNavigate } from "react-router-dom";

function Home() {
    const [dataFavorites, setDataFavorites] = useState([])

    const [dataUpdates, setDataUpdates] = useState([])
    const [page, setPage] = useState(1)

    const [isLoading, setIsLoading] = useState(false)
    const {isAuth} = useContext(AuthContext)

    useEffect(() => {
        setIsLoading(true)
        getDataUpdates(page)
    }, [page])

    useEffect(() => {
        getDataUpdates(page)
        getDataFavorites()

        return function cleanup() {
            setDataFavorites([])
        }
    }, [isAuth])

    const getDataFavorites = async() => {
        const response = await getFavoritesCarousel(1)
        setDataFavorites(response.data.data);
        setIsLoading(false)
    }

    const getDataUpdates = async(page) => {
        const response = await getUpdates(page)
        setDataUpdates(response.data); 
        setIsLoading(false)        
    }

    return ( 
        <main>
            <Favorites data={dataFavorites} setData={setDataFavorites} />
            <Updates dataFavorites={dataFavorites} setDataFavorites={setDataFavorites} data={dataUpdates} page={page} setPage={setPage} isLoading={isLoading} setData={setDataFavorites} />
            <SearchList />
        </main>
     );
}

export default Home;