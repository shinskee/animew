import { Outlet } from "react-router-dom";
import Header from "../../../widgets/Header";
import styles from './Layout.module.scss'
import { memo, Suspense, useEffect } from "react";
import Loader from "../../../shared/ui/Loader/Loader";
import { useDispatch } from "react-redux";
import { favoritesListActions } from "../../../entities/FavoritesList/model/favoritesListSlice";

const Layout = memo(() => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(favoritesListActions.initFavoritesList())
    }, [dispatch])

    return ( 
        <div className={styles.layout} >
            <Header />
                <Suspense fallback={<Loader />}>
                    <main>
                        <Outlet />
                    </main>
                </Suspense>
        </div>
     );
})

export default Layout;