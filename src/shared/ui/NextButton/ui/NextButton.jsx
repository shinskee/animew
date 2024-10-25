import styles from './NextButton.module.scss'
import rightArrow from './../../../images/right-arrow.svg'

function NextButton({ ...props }) {
    return ( 
        <button {...props} className={styles.nextButton}>
            <img src={rightArrow} alt="" width={30} />
        </button>
     );
}

export default NextButton;