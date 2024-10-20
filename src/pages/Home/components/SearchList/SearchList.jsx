import { useEffect, useState } from "react";
import { getSearch, getUpdates } from "../../../../shared/api/api";
import styles from './SearchList.module.scss'
import GridList from "../../../../widgets/GridList";

function SearchList() {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [inputText, setInputText] = useState('')

    useEffect(() => {
        if (inputText.length > 1) {
            setIsLoading(true)
            const setTimeoutId = setTimeout(() => {
                getData(inputText)
            }, 1500);
            return () => clearTimeout(setTimeoutId)
        }
    }, [inputText])

    const getData = async(inputText) => {
        const response = await getSearch(inputText)
        setData(response.data.list); 
        setIsLoading(false)       
    }

    const onChangeInput = (e) => {
        setInputText(e.target.value)
    }

    return (
        <div className="container">
            <h2>
                Поиск
            </h2>
                <div className={styles.inputWrapper}>
                    <input className={styles.input} type="text" placeholder="Введите название" onChange={onChangeInput} />
                </div>
                <GridList data={data} isLoading={isLoading} />
        </div>
     );
}

export default SearchList;