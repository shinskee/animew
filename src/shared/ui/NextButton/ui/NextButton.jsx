import styles from './NextButton.module.scss'
import RightArrow from './../../../images/right-arrow.svg?react'
import { memo } from 'react';

const RightArrowIcon = memo(() => {
    return <RightArrow className={styles.rightArrow} />
})

const NextButton = memo(({ ...props }) => {
    return ( 
        <button {...props} className={styles.nextButton}>
            <RightArrowIcon />
        </button>
     );
})

export default NextButton;