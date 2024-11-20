import styles from './SceletonCatalogList.module.scss'

function SceletonCatalogList({ count = 10 }) {
    return ( 
        <div className={styles.sceletonTitleList}>
            {[...Array(count)].map((_, index) => (
                <div key={index} className={styles.card}>
                    <div className={styles.img}></div>
                    <div className={styles.description}></div>
                </div>
            ))}
        </div>
     );
}

export default SceletonCatalogList;