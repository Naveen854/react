import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {({cartList}) => {
      const totalPrice = cartList.reduce(
        (accumulator, currItem) =>
          accumulator + currItem.price * currItem.quantity,
        0,
      )
      return (
        <div className="cart-summary-container">
          <h1 className="summary-heading">
            Order Total:&nbsp;
            <span className="total-price-value">Rs {totalPrice}/-</span>
          </h1>
          {cartList.length > 1 ? (
            <p className="items-count-text">{cartList.length} items in cart</p>
          ) : (
            <p className="items-count-text">{cartList.length} item in cart</p>
          )}

          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
