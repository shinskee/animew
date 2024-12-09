import { NavLink } from 'react-router-dom'
import logo from './../../../shared/images/logo.jpeg'
import Login from '../../../shared/auth/Login';
import Search from '../../Search';
import { useInView } from 'react-intersection-observer';
import ButtonScrollTop from '../../../shared/ui/ButtonScrollTop/ButtonScrollTop';

import styles from './Header.module.scss'


function Header() {
    const {ref, inView} = useInView({
        threshold: 1
    })

    return ( 
        <header ref={ref} className={`${styles.headerWrapper}`}>
            <ButtonScrollTop inView={inView} />
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