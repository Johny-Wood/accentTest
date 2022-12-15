import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, setCustomer } from '../../../store/reducers/cartSlice';
import './CartForm.scss';

const CartForm = ({ setOrderPlaced }) => {
  const order = useSelector((state) => state.cart);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setCustomer({ name, email, phone }));
  };

  useEffect(() => {
    if (order?.customer?.name.length > 0) {
      try {
        fetch('https://app.aaccent.su/js/confirm.php', {
          method: 'POST',
          body: JSON.stringify(order)
        })
          .then((value) => setOrderPlaced(true))
          .then((value) => dispatch(clearCart()))
      } catch (error) {
        alert("Failed to place order. Please try it later.")
      }
    }
  }, [order]);


  return (
    <form className="cart-form" onSubmit={handleSubmit}>
      <input
        className="cart-form__input"
        type="text"
        placeholder="name"
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        className="cart-form__input"
        type="email"
        placeholder="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <input
        className="cart-form__input"
        type="tel"
        placeholder="+73232441221"
        required
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <button className="cart-form__button">Submit</button>
    </form>
  )
};

export default CartForm;