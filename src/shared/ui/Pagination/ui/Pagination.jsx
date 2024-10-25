import styles from './Pagination.module.scss'
import { memo } from 'react';
import NextButton from '../../NextButton/ui/NextButton';
import PrevButton from '../../PrevButton/ui/PrevButton';

const Pagination = memo(
    function Pagination({ totalPages, page, onClickPage, onClickNext, onClickPrev, paginationChunk }) {
        return ( 
            <div className={styles.paginationWrapper}>
            <PrevButton onClick={onClickPrev} disabled={paginationChunk[0] === 0} />
                <div className={styles.pagination}>
                    {[...Array(totalPages)].map((_, i) => (
                        <div onClick={() => onClickPage(i+1)} key={i} className={page === i+1 ? styles.paginationActive : styles.paginationNotActive}>
                            {i+1}
                        </div>
                    )).slice(paginationChunk[0], paginationChunk[1])}
                </div>
            <NextButton onClick={onClickNext} disabled={paginationChunk[1] >= totalPages} />
        </div>
         );
    }
)

export default Pagination;