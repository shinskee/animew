import styles from './PrevButton.module.scss'
import LeftArrow from './../../../images/left-arrow.svg?react'

function PrevButton({ ...props }) {
    return ( 
        <button {...props} className={styles.prevButton}>
            <LeftArrow className={styles.leftArrow} />
        </button>
     );
}

export default PrevButton;