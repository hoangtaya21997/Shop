import React, { useCallback, useMemo } from 'react';
import './styles.scss';

const Pagination = React.memo(({ pageSize, TotalItem, currentPage, onPageChange }) => {
    const totalPages = useMemo(() => Math.ceil(TotalItem / pageSize), [TotalItem, pageSize]);
    const handleNextPage = useCallback(() => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    }, [currentPage, totalPages, onPageChange]);

    const handlePrevPage = useCallback(() => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    }, [currentPage, onPageChange]);

    return (
        <div className='pagination'>
            <p className='text'>
                {((currentPage - 1) * pageSize) + 1} đến{' '}
                {Math.min(currentPage * pageSize, TotalItem)} trong {TotalItem}
            </p>
            <button
                className='prev-btn btn'
                onClick={handlePrevPage}
                disabled={currentPage === 1}
            >
                
            </button>
            <div className='current-page'>{currentPage}</div>
            <button
                className='next-btn btn'
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
            >
                
            </button>
        </div>
    );
});

export default Pagination;
