import React from 'react';
import ReactPaginate from 'react-paginate';
import { getCardsOffset } from '../../helpers/getCardsOffset';
import './PagePagination.scss';

const PagePagination = ({ totalItems, itemsPerPage, onChange, currentPage }) => {

  const handlePageClick = (event) => {
    const newOffset = getCardsOffset(totalItems, itemsPerPage, event.selected)
    onChange({ newCardIndex: newOffset, newPage: event.selected });
  };


  return (
    <>
      <ReactPaginate
        breakLabel="..."
        onPageChange={handlePageClick}
        forcePage={currentPage}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        pageCount={Math.ceil(totalItems / itemsPerPage)}
        nextLabel={
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 13.3333L4.66667 7.99998L10 2.66665" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        }
        previousLabel={
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 13.3333L4.66667 7.99998L10 2.66665" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        }
        renderOnZeroPageCount={null}
        containerClassName="page-pagination"
        pageClassName="page-pagination__item"
        pageLinkClassName="page-pagination__link"
        previousLinkClassName="page-pagination__prev"
        nextLinkClassName="page-pagination__next"
        activeClassName="page-pagination-active"
        breakClassName="page-pagination__break"
      />
    </>
  )
};

export default PagePagination;