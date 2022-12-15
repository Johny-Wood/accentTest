import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PagePagination from '../../reusable/PagePagination/PagePagination';
import { deleteOrderItem, setOrder } from '../../store/reducers/cartSlice';
import ProductCard from '../ProductCard/ProductCard';
import './Catalog.scss';

const Catalog = ({ handleChangePage, products, maxCardsPerPage, totalCards, currentPage }) => {
  // const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleAddToCart = ({ item, isInCart }) => {
    if (isInCart) {
      dispatch(deleteOrderItem(item))
    } else {
      dispatch(setOrder(item));
    }
  };


  return (
    <div className="catalog">
      <div className="catalog__list">
        {products.map((item) => (
          <ProductCard item={item} handleAddToCart={handleAddToCart} key={item.id} />
        ))}
      </div>

      <div className="catalog__page-pagination">
        <PagePagination totalItems={totalCards} itemsPerPage={maxCardsPerPage} onChange={handleChangePage} currentPage={currentPage} />
      </div>
    </div>
  )
};

export default Catalog;