import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  recentlyViewedProducts: [],
  updateRecentlyViewedProducts: () => {},
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})

export default CartContext
