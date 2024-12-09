import { Outlet } from "react-router-dom";
import Header from "../../widgets/Header";
import styles from './Layout.module.scss'
import { Suspense } from "react";
import Loader from "../../shared/ui/Loader/Loader";
import { AnimatePresence } from "motion/react";

function Layout() {
    return ( 
        <div className={styles.layout} >
            <AnimatePresence>
            <Header />
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </AnimatePresence>
        </div>
     );
}

export default Layout;