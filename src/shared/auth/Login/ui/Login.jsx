import { AuthContext } from '../../AuthContext';
import { useContext } from 'react';

import styles from './Login.module.scss'

function Login() {
    const {isAuth, login, logout} = useContext(AuthContext)

    return (
        <button className={styles.login} onClick={isAuth ? logout : login} >{isAuth ? 'Выход' : 'Вход'}</button>
     );
}

export default Login;