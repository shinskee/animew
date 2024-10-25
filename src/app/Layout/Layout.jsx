import { Outlet } from "react-router-dom";
import Header from "../../widgets/Header";
import Footer from "../../widgets/Footer";
import styles from './Layout.module.scss'

function Layout() {
    return ( 
        <div className={styles.layout}>
            <Header />
                <Outlet />
            {/* <Footer /> */}
        </div>
     );
}

export default Layout;