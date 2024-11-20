import { useEffect, useState } from "react";
import styles from './../../Catalog.module.scss'
import { setSearchText } from "../../../../../features/search/searchSlice";
import { useDispatch } from "react-redux";

function Search({ setPage }) {
    const [ inputText, setInputText ] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        const setTimeoutId = setTimeout(() => {
            setPage(1)
            dispatch(setSearchText(inputText))
        }, 700)
        return () => {
            setPage(1)
            clearTimeout(setTimeoutId)
        }
    }, [inputText])

    return ( 
        <div className={styles.search}>
            <input type="text" placeholder='Поиск...' value={inputText} onChange={(e) => setInputText(e.target.value)} />
        </div>
     );
}

export default Search;