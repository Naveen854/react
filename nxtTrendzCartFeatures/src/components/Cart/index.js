import Header from '../Header'
import CartListView from '../CartListView'
import CartSummary from '../CartSummary'
import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      const onRemoveAllCartItems = () => {
        removeAllCartItems()
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <div className="heading-remove-all-container">
                  <h1 className="cart-heading">My Cart</h1>
                  <button
                    className="remove-all-cart-items-button"
                    type="button"
                    onClick={onRemoveAllCartItems}
                  >
                    Remove All
                  </button>
                </div>
                <CartListView />
                <CartSummary />
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
