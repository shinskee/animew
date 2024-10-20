import styles from './NextButton.module.scss'

function NextButton({ ...props }) {
    return ( 
        <button {...props} className={styles.nextButton}>
            {`>`}
        </button>
     );
}

export default NextButton;