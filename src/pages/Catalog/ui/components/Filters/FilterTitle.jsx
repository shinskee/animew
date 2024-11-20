import styles from './Filters.module.scss'

function FilterTitle({ title, description }) {
    return ( 
        <div className={styles.filterTitle}>
            <div className={styles.title}>
                {title}
            </div>
            <p className={styles.description}>
                {description}
            </p>
        </div>
     );
}

export default FilterTitle;