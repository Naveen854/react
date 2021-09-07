import {useState} from 'react'
import AllProductsSection from '../AllProductsSection'
import PrimeDealsSection from '../PrimeDealsSection'
import RecentlyViewedProducts from '../RecentlyViewedProducts'

import Header from '../Header'

import './index.css'

const initialTabs = {
  products: 'PRODUCTS',
  recentlyViewed: 'RECENTLY VIEWED',
}

const Products = () => {
  const [activeTab, setActiveTab] = useState(initialTabs.products)

  const showProducts = () => {
    setActiveTab(initialTabs.products)
  }

  const showRecentlyViewedProducts = () => {
    setActiveTab(initialTabs.recentlyViewed)
  }

  return (
    <>
      <Header />
      <div className="products-recently-viewed-products-container">
        <button type="button" className="tab-buttons" onClick={showProducts}>
          Products
        </button>
        <button
          type="button"
          className="tab-buttons"
          onClick={showRecentlyViewedProducts}
        >
          Recently Viewed Products
        </button>
      </div>
      <hr className="separator" />
      {activeTab === 'PRODUCTS' ? (
        <div className="product-sections">
          <PrimeDealsSection />
          <AllProductsSection />
        </div>
      ) : (
        <RecentlyViewedProducts />
      )}
    </>
  )
}

export default Products
