import transition from '../../../app/transition';
import LoaderSvg from './../../images/loader.svg?react'
import styles from './Loader.module.scss'

function Loader() {
    return ( 
        <div className={styles.loader}>
            <LoaderSvg />
        </div>
     );
}

export default transition(Loader);