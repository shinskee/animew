import styles from './PrevButton.module.scss'
import LeftArrow from './../../../images/left-arrow.svg?react'
import { memo } from 'react';

const LeftArrowIcon = memo(() => {
    return <LeftArrow className={styles.leftArrow} />
})

const PrevButton = memo(({ ...props }) => {
    return ( 
        <button {...props} className={styles.prevButton}>
            <LeftArrowIcon />
        </button>
     );
})

export default PrevButton;