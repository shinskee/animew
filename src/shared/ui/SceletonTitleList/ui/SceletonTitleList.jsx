import styles from './SceletonTitleList.module.scss'

function SceletonTitleList() {
    return ( 
        <div className={styles.sceletonTitleList}>
            {[...Array(6)].map((_, index) => (
                <div key={index} className={styles.card}>

                </div>
            ))}
        </div>
     );
}

export default SceletonTitleList;