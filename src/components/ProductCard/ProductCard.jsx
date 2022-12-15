import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

const ProductCard = ({ item, handleAddToCart }) => {
  const cart = useSelector((state) => state.cart);

  const isInCart = !!cart.order.find((obj) => obj.id === item.id);

  return (
    <article className="product-card">
      <Link to={"#"}>
        <img className="product-card__image" src={item.image} alt={item.title + ' ' + 'photo'} />
      </Link>
      <h3 className="product-card__title">{item.title}</h3>
      <span className="product-card__brand">Brand {item.brand}</span>

      <div className="product-card__wrapper">
        <span className="product-card__price">
          {`${item.regular_price.value} ${item.regular_price.currency}`}
        </span>
        <button className="product-card__cart-btn" onClick={() => handleAddToCart({ item, isInCart })}>
          <svg className={isInCart ? "cart-btn__icon cart-btn__icon--active" : "cart-btn__icon"} xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 30 30" width="30px" height="30px">
            <path d="M 2 2 A 1.0001 1.0001 0 1 0 2 4 L 3.8789062 4 C 4.1048086 4 4.2933102 4.1414634 4.3574219 4.359375 L 8.6191406 18.847656 C 8.993174 20.11937 10.169409 21 11.496094 21 L 22.472656 21 C 23.821072 21 25.011657 20.088693 25.367188 18.789062 L 27.964844 9.2636719 A 1.0001 1.0001 0 0 0 27 8 L 7.5136719 8 L 6.2773438 3.7949219 A 1.0001 1.0001 0 0 0 6.2753906 3.7949219 C 5.9634991 2.7348335 4.9830041 2 3.8789062 2 L 2 2 z M 12 23 A 2 2 0 0 0 10 25 A 2 2 0 0 0 12 27 A 2 2 0 0 0 14 25 A 2 2 0 0 0 12 23 z M 22 23 A 2 2 0 0 0 20 25 A 2 2 0 0 0 22 27 A 2 2 0 0 0 24 25 A 2 2 0 0 0 22 23 z" />
          </svg>
        </button>
      </div>
    </article>
  )
};

export default ProductCard;