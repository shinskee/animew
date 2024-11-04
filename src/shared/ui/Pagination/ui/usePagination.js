import { useCallback, useState } from "react"

function usePagination() {
    const [pagChunk, setPagChunk] = useState([0, 10])
    const [pagChunkMob, setPagChunkMob] = useState([0, 5])

    const pagSize = 10
    const pagSizeMob = 5

    const nextPagintation = useCallback(() => {
        setPagChunk([pagChunk[1], pagChunk[1] + pagSize])
    }, [pagChunk])
    const nextPagintationMob = useCallback(() => {
        setPagChunkMob([pagChunkMob[1], pagChunkMob[1] + pagSizeMob])
    }, [pagChunkMob])

    const prevPagintation = useCallback(() => {
        setPagChunk([pagChunk[0] - pagSize, pagChunk[1] - pagSize])
    }, [pagChunk])
    const prevPagintationMob = useCallback(() => {
        setPagChunkMob([pagChunkMob[0] - pagSizeMob, pagChunkMob[1] - pagSizeMob])
    }, [pagChunkMob])

    return {
        pagChunk,
        nextPagintation,
        prevPagintation,
        pagChunkMob,
        nextPagintationMob,
        prevPagintationMob
    } 
}

export default usePagination;