import React from 'react';
import './AmountToggler.scss';

const AmountToggler = ({ quantity, id, handleDecrease, handleIncrease }) => {

  return (
    <div className="amount-toggler">
      <button
        className="amount-toggler__button minus"
        onClick={() => handleDecrease(id)}
      >
        -
      </button>
      <span className="amount-toggler__counter">
        {quantity}
      </span>
      <button
        className="amount-toggler__button plus"
        onClick={() => handleIncrease(id)}
      >
        +
      </button>
    </div>
  )
};

export default AmountToggler;