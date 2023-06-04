import React from 'react';

import { FooterBanner, HeroBanner } from '@/Components/Index';
import Product from './Product';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Seller Goods</h2>
        <p>Goods that most our Customers buy.</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product 2", "Product 12"]?.map((product) => product)}
      </div>
      <FooterBanner />
    </>
  )
}
export default Home