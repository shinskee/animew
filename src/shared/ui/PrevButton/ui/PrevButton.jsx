import styles from './PrevButton.module.scss'

function PrevButton({ ...props }) {
    return ( 
        <button {...props} className={styles.prevButton}>
            {`<`}
        </button>
     );
}

export default PrevButton;