import { createSlice } from '@reduxjs/toolkit';

// const order = [{
//   "id": 1,
//   "sku": "s1",
//   "title": "Product 1",
//   "brand": 9,
//   "regular_price": {
//     "currency": "USD",
//     "value": 27.12
//   },
//   "quantity": 1
// }]

const initialState = {
  order: [],
  customer: {
    name: '',
    phone: null,
    email: '',
  },
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.order.push({
        id: action.payload.id,
        sku: action.payload.sku,
        title: action.payload.title,
        brand: action.payload.brand,
        regular_price: action.payload.regular_price,
        quantity: 1,
      });
    },
    increaseQuantity: (state, action) => {
      const orderIndex = state.order.findIndex((item) => item.id === action.payload.id);

      state.order[orderIndex].quantity += 1
    },
    decreaseQuantity: (state, action) => {
      const orderIndex = state.order.findIndex((item) => item.id === action.payload.id);

      if (state.order[orderIndex].quantity <= 1) {
        return state;
      } else {
        state.order[orderIndex].quantity -= 1;
      };
    },
    deleteOrderItem: (state, action) => {
      state.order = state.order.filter((item) => item.id !== action.payload.id)
    },
    setCustomer: (state, action) => {
      state.customer = {
        name: action.payload.name,
        phone: action.payload.phone,
        email: action.payload.email,
      }
    },
    clearCart: () => initialState,
  },
});

export const { setOrder, increaseQuantity, decreaseQuantity, deleteOrderItem, setCustomer, clearCart } = cartSlice.actions;
export default cartSlice.reducer;