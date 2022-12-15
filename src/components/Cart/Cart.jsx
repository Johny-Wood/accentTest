import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cart.scss';
import { decreaseQuantity, deleteOrderItem, increaseQuantity } from '../../store/reducers/cartSlice';
import CartForm from './CartForm/CartForm';
import CartItem from './CartItem/CartItem';
import CartPopup from './CartPopup/CartPopup';
import { useNavigate } from 'react-router';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.order);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleIncrease = (id) => {
    dispatch(increaseQuantity({ id: id }));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity({ id: id }));
  };

  const handleDeleteItem = (item) => {
    dispatch(deleteOrderItem(item))
  };


  const calcCartSum = () => {
    return cartItems
      .map(item => item?.regular_price.value * item?.quantity)
      .reduce((a, b) => a + b, 0)
      .toFixed(2);
  };

  const navigateToHomePage = () => {
    setOrderPlaced(false);
    navigate('/');
  };


  return (
    <div className="cart">
      {cartItems.length > 0 ?
        <>
          <ul className="cart__list">
            {cartItems.map((item) => (
              <CartItem
                item={item}
                key={item.id}
                handleDecrease={handleDecrease}
                handleIncrease={handleIncrease}
                handleDeleteItem={handleDeleteItem}
              />
            ))}
          </ul>
          <span className="cart__sum">
            Sum: {calcCartSum()}
          </span>
          <CartForm setOrderPlaced={setOrderPlaced} />
        </>
        :
        'Empty'
      }
      {orderPlaced && <CartPopup handleClose={navigateToHomePage} />}
    </div>
  )
};

export default Cart;