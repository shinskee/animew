import Carousel from "../../../../widgets/Carousel";

import styles from './Updates.module.scss'

function Updates({ page, setPage, data, isLoading, setDataFavorites, dataFavorites }) {

    return (
        <div className="container">
            <h2 className={styles.updatesTitle}>
                Последние обновления
            </h2>
            {data && <Carousel setDataFavorites={setDataFavorites} dataFavorites={dataFavorites} data={data.list} isLoading={isLoading} setPage={setPage} page={page} />}
        </div>
     );
}

export default Updates;