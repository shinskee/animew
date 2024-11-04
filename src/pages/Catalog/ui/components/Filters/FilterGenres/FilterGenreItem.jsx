import { useState } from 'react';
import styles from './../Filters.module.scss'

function FilterGenreItem({ onClickItem, item }) {
    const [isActive, setIsActive] = useState(false)

    const onClick = (item) => {
        onClickItem(item)
        setIsActive(!isActive)
    }

    return ( 
        <li onClick={() => onClick(item)} key={item.id} className={isActive ? styles.filterItemActive : styles.filterItem}>{item.name}{item.label}</li>
     );
}

export default FilterGenreItem;