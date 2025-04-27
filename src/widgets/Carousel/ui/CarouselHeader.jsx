import styles from './Carousel.module.scss'
import { classNames } from '@shared/lib/classNames/classNames'
import { memo } from 'react'
import Button from '@shared/ui/Button/ui/Button'
import Title from '@shared/ui/Title'
import LeftArrow from '@shared/ui/Icons/Arrows'
import RightArrow from '../../../shared/ui/Icons/Arrows/ui/RightArrow/RightArrow'

const CarouselHeader = memo( ({title, onClickPrev, onClickNext}) => {
  return (
    <div className={classNames(styles.header, {}, [])}>
      <Title>{title}</Title>
      <div className={styles.controls}>
        <Button onClick={onClickPrev} cls={styles.button}>
          <LeftArrow />
        </Button>
        <Button onClick={onClickNext} cls={styles.button}>
          <RightArrow />
        </Button>
      </div>
    </div>
  )
})

export default CarouselHeader