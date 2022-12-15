import React from 'react';
import './CartPopup.scss';

const CartPopup = ({ handleClose }) => {

  return (
    <div className="order-placed-popup">
      <button
        className="order-placed-popup__close-btn"
        onClick={handleClose}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path d="M13.985 0L7.49981 6.50706L1.01458 0L0.0214844 0.989908L6.51009 7.50012L0.0214844 14.0106L1.01458 15L7.49981 8.49315L13.985 15L14.9781 14.0106L8.48954 7.50012L14.9781 0.989908L13.985 0Z" fill="black" />
        </svg>
      </button>
      <span className="order-placed-popup__text">
        Your order was successfully placed!
      </span>
    </div>
  )
};

export default CartPopup;