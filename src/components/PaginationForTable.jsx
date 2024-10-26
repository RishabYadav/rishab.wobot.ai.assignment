import React from 'react';

const PaginationForTable = ({ currentPage, totalItems, itemsPerPage, onPageChange, onItemsPerPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex items-center justify-end space-x-4 my-5">
            <select
                value={itemsPerPage}
                onChange={(e) => onItemsPerPageChange(parseInt(e.target.value))}
                className="border border-gray-300 rounded p-1"
            >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
            </select>
            <div>
                {currentPage * itemsPerPage - (itemsPerPage - 1)}-
                {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
            </div>
            <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="text-gray-500 hover:text-gray-700 disabled:opacity-50"
            >
                &laquo;
            </button>
            <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="text-gray-500 hover:text-gray-700 disabled:opacity-50"
            >
                &raquo;
            </button>
        </div>
    );
};

export default PaginationForTable;
