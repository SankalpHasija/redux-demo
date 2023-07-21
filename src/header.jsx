import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector((state) => state.cartItems);
  return (
    <header>
      <div className='cart-icon'>Cart: {cartItems.length} items</div>
    </header>
  );
};

export default Header;
