import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setSearchText } from '../../../features/search/searchSlice';
import { useEffect, useRef, useState } from 'react';
import resetInputIcon from './../../../shared/images/delete-input.svg'

import styles from './Search.module.scss'
import useOutClick from '../useOutClick';

function Search() {
    const [ inputText, setInputText ] = useState('')
    const inputRef = useRef()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [ isButtonResetActive, setIsButtonResetActive ] = useState(false)
    useOutClick(() => setIsButtonResetActive(false), inputRef)

    useEffect(() => {
        if (inputRef.current.value.length >= 1) {
            setIsButtonResetActive(true)
        } else {
            setIsButtonResetActive(false)
        }
    }, [inputText])

    const onClickInput = () => {
        if (inputRef.current.value.length >= 1) {
            setIsButtonResetActive(true)
        }
    }

    const onClick = () => {
        navigate('/search')
        dispatch(setSearchText(inputRef.current.value))
    }

    const onClickReset = () => {
        setInputText('')
        inputRef.current.focus()
    }
    

    return ( 
        <div className={styles.search}>
                <input ref={inputRef} onClick={onClickInput} className={styles.input} type="text" placeholder="Введите название" onChange={(e) => setInputText(e.target.value) } value={inputText} />
                {isButtonResetActive && (
                    <button className={styles.buttonReset} onClick={onClickReset}>
                        <img src={resetInputIcon} alt="" width={20} />
                    </button>
                )}
                <button className={styles.buttonSearch} onClick={onClick} >Поиск</button>
        </div>
     );
}

export default Search;