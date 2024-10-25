import { useEffect, useState } from 'react';
import styles from './FavoritesButton.module.scss'

function FavoritesButton({ onClickDeleteFavorite, onClickAddFavorite, id }) {
    const [isFavorite, setIsFavorite] = useState(true)
    
    return ( 
        <button 
            onClick={() => {
                setIsFavorite(!isFavorite)
                {isFavorite ? onClickDeleteFavorite(id) : onClickAddFavorite(id)}
            }}
            className={isFavorite ? styles.buttonFavorite : styles.buttonUnFavorite } >
        </button>
     );
}

export default FavoritesButton;