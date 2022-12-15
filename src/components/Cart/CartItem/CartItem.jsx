import React from 'react';
import './CartItem.scss';
import AmountToggler from '../../../reusable/AmountToggler/AmountToggler';

const CartItem = ({ item, handleDecrease, handleIncrease, handleDeleteItem }) => {

  return (
    <li className="cart-item">
      <div className="cart-item__wrapper">
        <h3 className="cart-item__title">{item.title}</h3>
        <span className="cart-item__brand">Brand {item.brand}</span>
      </div>

      <span className="cart-item__price">
        {`${item.regular_price.value} ${item.regular_price.currency}`}
      </span>

      <AmountToggler
        quantity={item.quantity}
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        id={item.id}
      />

      <button
        className="cart-item__del-btn"
        onClick={() => handleDeleteItem(item)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path d="M13.985 0L7.49981 6.50706L1.01458 0L0.0214844 0.989908L6.51009 7.50012L0.0214844 14.0106L1.01458 15L7.49981 8.49315L13.985 15L14.9781 14.0106L8.48954 7.50012L14.9781 0.989908L13.985 0Z" fill="black" />
        </svg>
      </button>
    </li>
  )
};

export default CartItem;