import { useState } from 'react';
import styles from './../Filters.module.scss'
import { useSelector } from 'react-redux';

function FilterTypeItem({ onClickItem, item }) {
    const type = useSelector(state => state.catalog.type)

    const onClick = (item) => {
        onClickItem(item.value)
    }

    return ( 
        <li onClick={() => onClick(item)} className={type === item.value ? styles.filterItemButtonActive : styles.filterItemButton}>{item.description}</li>
     );
}

export default FilterTypeItem;