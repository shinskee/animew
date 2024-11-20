import { Outlet } from "react-router-dom";
import Header from "../../widgets/Header";
import Footer from "../../widgets/Footer";
import styles from './Layout.module.scss'
import { Suspense } from "react";
import Loader from "../../shared/ui/Loader/Loader";

function Layout() {
    return ( 
        <div className={styles.layout}>
            <Header />
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            {/* <Footer /> */}
        </div>
     );
}

export default Layout;