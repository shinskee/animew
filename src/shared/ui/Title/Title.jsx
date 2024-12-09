import styles from './Title.module.scss'

function Title({ type, children }) {
    if (type === 'section')
    return ( 
        <h2 className={styles.title}>{children}</h2>
     );
}

export default Title;