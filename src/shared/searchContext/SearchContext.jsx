import { createContext, useEffect, useState } from "react";
import { getSearch } from "../api/api";
import { Navigate, useNavigate } from "react-router-dom";

const SearchContext = createContext();

function SearchProvider({ children, ...props }) {
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
        setIsLoading(false)
        setData([])
    }, [inputText])
    
    const getData = async(inputText) => {
        const response = await getSearch(inputText)
        setData(response.data.list);
        setIsLoading(false)       
    }

    const onChangeInput = (e) => {
        setInputText(e.target.value)
    }

  const value = {
    onChangeInput,
    data,
    isLoading,
    setInputText,
    setData,
    inputText
  };

  return <SearchContext.Provider value={value} {...props}>{ children }</SearchContext.Provider>
}

export { SearchContext, SearchProvider };