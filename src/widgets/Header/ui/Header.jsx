import { NavLink } from 'react-router-dom'
import logo from './../../../shared/images/logo.jpeg'
import Login from '../../../shared/auth/Login';

import styles from './Header.module.scss'

function Header() {
    return ( 
        <header className={`${styles.headerWrapper}`}>
            <div className={`${styles.header} container`}>
                <NavLink to={'/'} className={styles.logo}>
                    <img src={logo} alt="" width={80} />
                    <p>
                        ANIMEW
                    </p>
                </NavLink>
                <Login />
            </div>
        </header>
     );
}

export default Header;