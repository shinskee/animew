import { useState } from 'react';
import styles from './../Filters.module.scss'

function FilterSortItem({ onClickItem, item, sortText }) {
    const [isActive, setIsActive] = useState(false)

    const onClick = (value, label) => {
        onClickItem(value, label)
        setIsActive(!isActive)
    }

    return ( 
        <li onClick={() => onClick(item.value, item.label)} key={item.id} className={sortText === item.label ? styles.filterItemActive : styles.filterItem}>{item.name}{item.label}</li>
     );
}

export default FilterSortItem;