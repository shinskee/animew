import { Outlet } from "react-router-dom";
import Header from "../../widgets/Header";
import Footer from "../../widgets/Footer";
import styles from './Layout.module.scss'
import { Suspense } from "react";

function Layout() {
    return ( 
        <div className={styles.layout}>
            <Header />
                <Suspense fallback={<div>...Загрузка страницы</div>}>
                    <Outlet />
                </Suspense>
            {/* <Footer /> */}
        </div>
     );
}

export default Layout;