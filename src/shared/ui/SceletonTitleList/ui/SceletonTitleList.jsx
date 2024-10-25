import styles from './SceletonTitleList.module.scss'

function SceletonTitleList({ count = 8 }) {
    return ( 
        <div className={styles.sceletonTitleList}>
            {[...Array(count)].map((_, index) => (
                <div key={index} className={styles.card}>

                </div>
            ))}
        </div>
     );
}

export default SceletonTitleList;