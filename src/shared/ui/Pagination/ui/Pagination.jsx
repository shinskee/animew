import styles from './Pagination.module.scss'
import { memo, useState } from 'react';
import NextButton from '../../NextButton/ui/NextButton';
import PrevButton from '../../PrevButton/ui/PrevButton';
import usePagination from './usePagination';

const Pagination = memo(
    function Pagination({ totalPages, page, onClickPage }) {
        const { 
            pagChunk,
            nextPagintation,
            prevPagintation,
            pagChunkMob,
            nextPagintationMob,
            prevPagintationMob } = usePagination()

        return ( 
            <>
                <div className={`${styles.paginationWrapper} hidden-mobile`}>
                    <PrevButton onClick={prevPagintation} disabled={pagChunk[0] === 0} />
                        <div className={styles.pagination}>
                            {[...Array(totalPages)].map((_, i) => (
                                <div onClick={() => onClickPage(i+1)} key={i} className={page === i+1 ? styles.paginationActive : styles.paginationNotActive}>
                                    {i+1}
                                </div>
                            )).slice(pagChunk[0], pagChunk[1])}
                        </div>
                    <NextButton onClick={nextPagintation} disabled={pagChunk[1] >= totalPages} />
                </div>
                <div className={`${styles.paginationWrapper} visible-mobile`}>
                    <PrevButton onClick={prevPagintationMob} disabled={pagChunkMob[0] === 0} />
                        <div className={styles.pagination}>
                            {[...Array(totalPages)].map((_, i) => (
                                <div onClick={() => onClickPage(i+1)} key={i} className={page === i+1 ? styles.paginationActive : styles.paginationNotActive}>
                                    {i+1}
                                </div>
                            )).slice(pagChunkMob[0], pagChunkMob[1])}
                        </div>
                    <NextButton onClick={nextPagintationMob} disabled={pagChunkMob[1] >= totalPages} />
                </div>
            </>
        );
    }
)

export default Pagination;