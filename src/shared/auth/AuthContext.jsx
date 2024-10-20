import { createContext, useEffect, useState } from "react";
import { getAuth, getLogin, getMe } from "../api/apiAuth";

const AuthContext = createContext();

function AuthProvider({ children, ...props }) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const getAuth = async () => {
        const response = await getMe()
        if (response.status === 200) {
            setIsAuth(true)
        }
        if (response.status === 403) {
            setIsAuth(false)
        }
    }
    getAuth()
  }, [isAuth])

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
  };

  return <AuthContext.Provider value={value} {...props}>{ children }</AuthContext.Provider>
}

export { AuthContext, AuthProvider };