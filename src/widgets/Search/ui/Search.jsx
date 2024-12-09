import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setInputText, setSearchText } from '../../../features/search/searchSlice';
import { useEffect, useRef, useState } from 'react';
import resetInputIcon from './../../../shared/images/delete-input.svg'
import SearchIcon from './../../../shared/images/search.svg?react'


import styles from './Search.module.scss'
import useOutClick from '../useOutClick';

function Search() {
    const inputText = useSelector(state => state.search.inputText)
    // const [ inputText, setInputText ] = useState('')
    const [ isInput, setIsInput ] = useState(false)
    const inputRef = useRef()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [ isButtonResetActive, setIsButtonResetActive ] = useState(false)
    useOutClick(() => setIsButtonResetActive(false), inputRef)

    useEffect(() => {
        if (isInput) {
            if (inputRef.current.value.length >= 1) {
                setIsButtonResetActive(true)
            } else {
                setIsButtonResetActive(false)
            }
        }
    }, [inputText])

    const onClickInput = () => {
        if (inputRef.current.value.length >= 1) {
            setIsButtonResetActive(true)
        }
    }

    const onClick = () => {
            // navigate('/search')
            // dispatch(setSearchText(inputRef.current.value))
        setIsInput(!isInput)
        !isInput && inputRef.current.focus()

        if (isInput) {
            setIsButtonResetActive(false)
            dispatch(setInputText(''))
        }
    }

    const onClickReset = () => {
        dispatch(setInputText(''))
        inputRef.current.focus()
    }

    const onKeyDownEnter = (e) => {
        if (e.key === 'Enter') {
            navigate('/search')
            dispatch(setSearchText(inputRef.current.value))
        }
    }
    

    return ( 
        <div className={styles.search}>
                    <div className={styles.searchWrapper}>
                        <input 
                            ref={inputRef} onKeyDown={onKeyDownEnter} onClick={onClickInput} 
                            className={isInput ? styles.inputActive : styles.input} type="text" placeholder="Введите название" 
                            onChange={(e) => dispatch(setInputText(e.target.value)) } value={inputText} 
                        />
                    {isButtonResetActive && (
                        <button className={styles.buttonReset} onClick={onClickReset}>
                            <img src={resetInputIcon} alt="" width={20} />
                        </button>
                    )}
                    </div>
                <button className={styles.buttonSearch} onClick={onClick} >
                    <SearchIcon className={styles.searchIcon} />
                </button>
        </div>
     );
}

export default Search;