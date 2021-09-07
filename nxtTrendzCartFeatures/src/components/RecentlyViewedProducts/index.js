import {Link} from 'react-router-dom'
import ProductCard from '../ProductCard'
import CartContext from '../../context/CartContext'
import './index.css'

const RecentlyViewedProducts = () => {
  const renderFailureView = () => (
    <div className="products-error-view-container">
      <img
        src="http://indiacolorlab.in/no-product-found.jpg"
        alt="all-products-error"
        className="products-failure-img"
      />
      <h1 className="product-failure-heading-text">
        Oops! There are no recently viewed products.
      </h1>
      <Link to="/products">
        <button type="button" className="shop-now-button">
          Shop Now
        </button>
      </Link>
    </div>
  )

  return (
    <CartContext.Consumer>
      {({recentlyViewedProducts}) => (
        <div className="recently-viewed-products-container">
          {recentlyViewedProducts.length === 0 ? (
            renderFailureView()
          ) : (
            <ul className="recently-viewed-products-content">
              {recentlyViewedProducts.map(eachItem => (
                <ProductCard key={eachItem.id} productData={eachItem} />
              ))}
            </ul>
          )}
        </div>
      )}
    </CartContext.Consumer>
  )
}

export default RecentlyViewedProducts
