import { useState } from 'react';
import styles from './../Filters.module.scss'
import { useSelector } from 'react-redux';

function FilterGenreItem({ onClickItem, item }) {
    const genres = useSelector(state => state.catalog.genres)

    return ( 
        <li onClick={() => onClickItem(item)} key={item.id} className={genres.find(genre => genre.id === item.id) ? styles.filterItemActive : styles.filterItem}>{item.name}{item.label}</li>
     );
}

export default FilterGenreItem;