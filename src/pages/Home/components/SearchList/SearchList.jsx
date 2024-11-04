import { useCallback, useEffect, useState } from "react";
import GridList from "../../../../widgets/GridList";

import styles from './SearchList.module.scss'
import { useGetSearchQuery } from "../../../../sevices/animeApi";
import { useDispatch, useSelector } from "react-redux";
import { resetInput, setSearchText } from "../../../../features/search/searchSlice";
import Pagination from "../../../../shared/ui/Pagination";

function SearchList() {
    const searchText = useSelector(state => state.search.searchText)
    const {data, isLoading, isSuccess, isFetching} = useGetSearchQuery(searchText)
    const favoritesData = useSelector(state => state.favorites.favorites)
    const dispatch = useDispatch()
    


    useEffect(() => {
        return () => {
            dispatch(setSearchText(''))
            dispatch(resetInput())
        }
    }, [])

    // if (isLoading) return <div>...Загрузка</div>
    // if (isSuccess)
        
    return (
        <div className="container">
                        <GridList 
                            data={data?.list}
                            isSuccess={isSuccess}
                            isFetching={isFetching}
                            isLoading={isLoading}
                            dataFavorites={favoritesData}    
                        />
        </div>
     );
}

export default SearchList;