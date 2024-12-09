import styles from './ButtonScrollTop.module.scss'

function ButtonScrollTop({ inView }) {
    return ( 
        <button onClick={() => window.scrollTo(0, 0)} className={!inView ? styles.buttonInView : styles.button}>Наверх</button>
     );
}

export default ButtonScrollTop;