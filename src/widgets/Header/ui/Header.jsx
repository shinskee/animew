import { NavLink } from 'react-router-dom'
import logo from './../../../shared/images/logo.jpeg'
import Login from '../../../shared/auth/Login';
import Search from '../../Search';

import styles from './Header.module.scss'


function Header() {
    return ( 
        <header className={`${styles.headerWrapper}`}>
            <div className={`${styles.header} container`}>
                <NavLink to={'/'} className={styles.logo}>
                    <img src={logo} alt="" width={50} />
                    <p>
                        ANIME<span>W</span>
                    </p>
                </NavLink>
                <NavLink 
                    to="/catalog" 
                    className={({isActive}) => 
                        isActive ? `${styles.active} ${styles.catalog}` : styles.catalog}
                >
                    Каталог
                </NavLink>
                <Search />
                <Login />
            </div>
        </header>
     );
}

export default Header;