import { useCallback } from "react";
import NextButton from "../../../../shared/ui/NextButton";
import PrevButton from "../../../../shared/ui/PrevButton";
import Carousel from "../../../../widgets/Carousel";

import styles from './Updates.module.scss'

function Updates({ page, setPage, data, isFetching, setDataFavorites, dataFavorites }) {
    
    const onclickLeft = useCallback(() => {
        setPage(prev => prev - 1)
    }, [])

    const onclickRight = useCallback(() => {
        setPage(prev => prev + 1)
    }, [])

    return (
        <section className={`${styles.carousel} container`}>
            <div className={styles.titleWrapper}>
                <h2 className={styles.updatesTitle}>
                    Последние обновления
                </h2>
                <div className={styles.buttons}>
                    <PrevButton onClick={onclickLeft} disabled={page <= 1} />
                    <NextButton onClick={onclickRight} />
                </div>
            </div>
            {data && <Carousel setDataFavorites={setDataFavorites} dataFavorites={dataFavorites} data={data.list} isFetching={isFetching} />}
        </section>
     );
}

export default Updates;