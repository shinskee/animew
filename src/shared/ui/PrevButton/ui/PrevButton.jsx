import styles from './PrevButton.module.scss'
import leftArrow from './../../../images/left-arrow.svg'

function PrevButton({ ...props }) {
    return ( 
        <button {...props} className={styles.prevButton}>
            <img src={leftArrow} alt="" width={30} />
        </button>
     );
}

export default PrevButton;