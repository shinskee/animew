import { createContext, useEffect, useState } from "react";
import { getLogin, getMe } from "../api/apiAuth";
import { addFavorite, deleteFavorite, getFavorites } from "../api/api";

const AuthContext = createContext();

function AuthProvider({ children, ...props }) {
  const [isAuth, setIsAuth] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false)
  const [dataFavorites, setDataFavorites] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getAuth()
  }, [isAuth])

  useEffect(() => {
    getDataFavorites()
  }, [])

  const getAuth = async () => {
    const response = await getMe()
    if (response.status === 200) {
        setIsAuth(true)
    }
    if (response.status === 403) {
        setIsAuth(false)
    }
  }

  const getDataFavorites = async () => {
    setIsLoading(true)
    const response = await getFavorites()
    setDataFavorites(response.data.data)
    setIsLoading(false)
  }

  const onClickDeleteFavorite = async (id) => {
    const response = await deleteFavorite(id)
    if (response.status === 200) {
        setDataFavorites(dataFavorites.filter(e => e.id !== id))
        setIsFavorite(false)
      }
  }

  const onClickAddFavorite = async (id, item) => {
    const response = await addFavorite(id)
    if (response.status === 200) {
        setDataFavorites([{
          id: item.id, 
          poster: {src: item.posters.small.url}
        }, ...dataFavorites])
        setIsFavorite(true)
    }
  }

  const login = async () => {
    const response = await getLogin()
    window.open(response.data.url, '_blank', 'noreferrer')
        let intervalId = setInterval(() => {
            getAuth(response.data.state)
            .then(
                result => {
                    result.status === 200 && clearInterval(intervalId)
                    localStorage.setItem("sn-token", result.data.token);
                    if (localStorage.getItem("sn-token").length > 0) {
                      getMe()
                      setIsAuth(true)
                    } 
                }
            )
        }, 1000);
  };

  const logout = () => {
    localStorage.removeItem('sn-token')
    setIsAuth(false)
  };

  const value = {
    isAuth,
    setIsAuth,
    login,
    logout,
    dataFavorites,
    setDataFavorites,
    isLoading,
    onClickDeleteFavorite,
    onClickAddFavorite,
    isFavorite,
    setIsFavorite
  };

  return <AuthContext.Provider value={value} {...props}>{ children }</AuthContext.Provider>
}

export { AuthContext, AuthProvider };