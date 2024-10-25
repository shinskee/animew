import { useEffect } from "react";
import GridList from "../../../../widgets/GridList";

import styles from './SearchList.module.scss'
import { useGetSearchQuery } from "../../../../sevices/animeApi";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../../../../features/search/searchSlice";

function SearchList() {
    const searchText = useSelector(state => state.search.searchText)
    const {data, isLoading, isSuccess} = useGetSearchQuery(searchText)
    const favoritesData = useSelector(state => state.favorites.favorites)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(setSearchText(''))
        }
    }, [])

    if (isLoading) return <div>...Загрузка</div>
    if (isSuccess)
        
    return (
        <div className="container">
            <h2>
                Результаты поиска
            </h2>
                <GridList 
                    data={data.list}
                    isSuccess={isSuccess} 
                    isLoading={isLoading}
                    dataFavorites={favoritesData}    
                />
        </div>
     );
}

export default SearchList;