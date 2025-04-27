import { memo } from 'react';
import LoaderSvg from './../../images/loader.svg?react'
import styles from './Loader.module.scss'

const Loader = memo(() => {
    return ( 
        <div className={styles.loader}>
            <LoaderSvg />
        </div>
     );
})

export default Loader;