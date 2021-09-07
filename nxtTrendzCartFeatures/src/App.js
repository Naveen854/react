import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'

const getRecentlyViewedProducts = () => {
  const recentlyViewedProducts = localStorage.getItem('recentlyViewedProducts')
  const parsedList = JSON.parse(recentlyViewedProducts)
  if (recentlyViewedProducts === null) {
    return []
  }
  return parsedList
}

class App extends Component {
  state = {
    cartList: [],
    recentlyViewedProducts: getRecentlyViewedProducts(),
  }

  updateRecentlyViewedProducts = productId => {
    const {recentlyViewedProducts} = this.state
    if (recentlyViewedProducts.length > 15) {
      recentlyViewedProducts.unshift(productId)
      recentlyViewedProducts.pop()
      this.setState({recentlyViewedProducts})
      localStorage.setItem(
        'recentlyViewedProducts',
        JSON.stringify(recentlyViewedProducts),
      )
    } else {
      recentlyViewedProducts.unshift(productId)
      localStorage.setItem(
        'recentlyViewedProducts',
        JSON.stringify(recentlyViewedProducts),
      )
      this.setState({recentlyViewedProducts})
    }
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  incrementCartItemQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachCartItem => {
        if (id === eachCartItem.id) {
          const updatedQuantity = eachCartItem.quantity + 1
          return {...eachCartItem, quantity: updatedQuantity}
        }
        return eachCartItem
      }),
    }))
  }

  decrementCartItemQuantity = productId => {
    const {cartList} = this.state
    const productObject = cartList.find(
      eachCartItem => eachCartItem.id === productId,
    )
    if (productObject.quantity > 1) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (productId === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity - 1
            return {...eachCartItem, quantity: updatedQuantity}
          }
          return eachCartItem
        }),
      }))
    } else {
      this.removeCartItem(productId)
    }
  }

  removeCartItem = productId => {
    this.setState(prevState => ({
      cartList: prevState.cartList.filter(
        eachItem => eachItem.id !== productId,
      ),
    }))
  }

  addCartItem = product => {
    const {cartList} = this.state
    const productObject = cartList.find(
      eachCartItem => eachCartItem.id === product.id,
    )
    if (productObject) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (productObject.id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity + product.quantity

            return {...eachCartItem, quantity: updatedQuantity}
          }

          return eachCartItem
        }),
      }))
    } else {
      const updatedCartList = [...cartList, product]
      this.setState({cartList: updatedCartList})
    }
  }

  render() {
    const {cartList, recentlyViewedProducts} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          recentlyViewedProducts,
          updateRecentlyViewedProducts: this.updateRecentlyViewedProducts,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          removeAllCartItems: this.removeAllCartItems,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
