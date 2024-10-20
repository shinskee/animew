import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addFavorite, deleteFavorite, getFavorites } from "../../../shared/api/api";

import styles from './FavoritesPage.module.scss'
import GridList from "../../../widgets/GridList";

function FavoritesPage() {
    const {id} = useParams()
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await getFavorites(id)
        setData(response.data.data)
        setIsLoading(false)
    }

    const onClickDeleteFavorite = async (id) => {
        const response = await deleteFavorite(id)
    }

    const onClickAddFavorite = async (id) => {
        const response = await addFavorite(id)
    }

    if (isLoading) return <div>...Загрузка</div>
    return ( 
        <main>
            {data && (
                <div className="container">
                    <h2>
                        Избранное
                    </h2>
                    <GridList data={data} isLoading={isLoading} onClickDeleteFavorite={onClickDeleteFavorite} onClickAddFavorite={onClickAddFavorite} />
                </div>
            )}
        </main>
     );
}

export default FavoritesPage;