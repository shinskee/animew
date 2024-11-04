import styles from './NextButton.module.scss'
import RightArrow from './../../../images/right-arrow.svg?react'

function NextButton({ ...props }) {
    return ( 
        <button {...props} className={styles.nextButton}>
            <RightArrow className={styles.rightArrow} />
        </button>
     );
}

export default NextButton;