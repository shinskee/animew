import authenticate from '../../authenticate';
import styles from './Login.module.scss'
import { useSelector } from 'react-redux';
import loginIcon from './../../../images/login.svg'
import logoutIcon from './../../../images/logout.svg'

function Login() {
    const isAuth = useSelector(state => state.auth.isAuth)
    const { login, logout } = authenticate()

    return (
        <button 
            className={styles.login} 
            onClick={isAuth ? logout : login} 
            >
                {isAuth ? (
                        <div className={styles.loginTrue}>
                                <img src={logoutIcon} alt="" width={18} />
                        </div>
                ) : (
                        <div className={styles.loginFalse}>
                                <img src={loginIcon} alt="" width={18} />
                        </div>
                )}
        </button>
     );
}

export default Login;