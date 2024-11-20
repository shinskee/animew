import { useCallback, useState } from "react";
import NextButton from "../../../../shared/ui/NextButton";
import PrevButton from "../../../../shared/ui/PrevButton";
import Carousel from "../../../../widgets/Carousel";

import styles from './Updates.module.scss'

function Updates({ page, setPage, data, isFetching, setDataFavorites, dataFavorites }) {
    const [ chunkSize, setChunkSize ] = useState([0, 8])
    
    const onclickLeft = useCallback(() => {
        setChunkSize([chunkSize[0] - 8, chunkSize[1] - 8])
    }, [chunkSize])

    const onclickRight = useCallback(() => {
        setChunkSize([chunkSize[1], chunkSize[1] + 8])
    }, [chunkSize])

    return (
        <section className={`${styles.carousel} container`}>
            <div className={styles.titleWrapper}>
                <h2 className={styles.updatesTitle}>
                    Последние обновления
                </h2>
                <div className={styles.buttons}>
                    <PrevButton onClick={onclickLeft} disabled={chunkSize[0] <= 1} />
                    <NextButton onClick={onclickRight} disabled={chunkSize[1] >= data?.length} />
                </div>
            </div>
            <Carousel chunkSize={chunkSize} setDataFavorites={setDataFavorites} dataFavorites={dataFavorites} data={data} isFetching={isFetching} />
        </section>
     );
}

export default Updates;