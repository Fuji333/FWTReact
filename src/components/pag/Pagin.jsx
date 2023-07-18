import React from 'react';
import './../../styles/pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 3) {

      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <div
            key={i}
            className={`pagination-number ${i === currentPage ? 'active' : ''}`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </div>
        );
      }
    } else {

      if (currentPage <= 2) {
        for (let i = 1; i <= 3; i++) {
          pageNumbers.push(
            <div
              key={i}
              className={`pagination-number ${i === currentPage ? 'active' : ''}`}
              onClick={() => onPageChange(i)}
            >
              {i}
            </div>
          );
        }
      }

      else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pageNumbers.push(
            <div
              key={i}
              className={`pagination-number ${i === currentPage ? 'active' : ''}`}
              onClick={() => onPageChange(i)}
            >
              {i}
            </div>
          );
        }
      } else {
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(
            <div
              key={i}
              className={`pagination-number ${i === currentPage ? 'active' : ''}`}
              onClick={() => onPageChange(i)}
            >
              {i}
            </div>
          );
        }
      }
    }
    return pageNumbers;
  };

  return (
    <div className="pagination">
      <div className="pagination-arrow" onClick={() => onPageChange(1)}>
        &lt;&lt;
      </div>
      <div className="pagination-arrow" onClick={() => onPageChange(currentPage - 1)}>
        &lt;
      </div>
      {getPageNumbers()}
      <div className="pagination-arrow" onClick={() => onPageChange(currentPage + 1)}>
        &gt;
      </div>
      <div className="pagination-arrow" onClick={() => onPageChange(totalPages)}>
        &gt;&gt;
      </div>
    </div>
  );
};

export default Pagination;
