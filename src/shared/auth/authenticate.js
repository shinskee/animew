import { useDispatch, useSelector } from "react-redux";
import { useLazyGetAuthQuery, useLazyGetMeQuery, useLazyLoginQuery } from "../../sevices/authApi";
import { setAuth, setLogout } from "../../features/auth/authSlice";
import { useEffect, useState } from "react";
import { useLazyGetFavoritesQuery } from "../../sevices/animeApi";
import { resetFavorite, setFavorites } from "../../features/favorites/favoriteSlice";

function authenticate() {
    const isAuth = useSelector(state => state.auth.isAuth)
    const [ isAuthLoading, setisAuthLoading ] = useState(true)
    const [ getMe, {error} ] = useLazyGetMeQuery()
    const [ getAuth ] = useLazyGetAuthQuery()
    const [ getLogin ] = useLazyLoginQuery()
    const [ getFavorites ] = useLazyGetFavoritesQuery()
    const dispatch = useDispatch()
    
    useEffect(() => {
        const getMyProfile = async () => {
            const responseMe = await getMe()
                
                if (responseMe.isSuccess) {

                    const getDataFavorites = async () => {
                        const response = await getFavorites()
                    
                            if (response.isSuccess) {
                                dispatch(setFavorites(response.data.data))
                                setisAuthLoading(false)
                            }
                        
                    }
                    getDataFavorites()
                }

                if( responseMe.isError ) {
                    setisAuthLoading(false)
                }
            
        }
        getMyProfile()
    }, [isAuth])

    const login = async () => {
        const response = await getLogin()
        window.open(response.data.url, '_blank', 'noreferrer')        
        let interval = setInterval(async() => {
            const responseAuth = await getAuth(response.data.state)
            if (responseAuth.isSuccess) {
                clearInterval(interval)
                localStorage.setItem("sn-token", responseAuth.data.token);
                if (localStorage.getItem("sn-token").length > 0) {
                   getMe()
                }
            }                          
        }, 1000);
    }

    const logout = () => {
        dispatch(setLogout())
        dispatch(resetFavorite())
        localStorage.removeItem('sn-token')
    }

    return {
        login, logout, isAuthLoading
    }
}

export default authenticate;