import React from 'react';

import { Client } from '@/Utilities/Client';
import { FooterBanner, HeroBanner } from '@/Components/Index';
import Product from './Product';

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner HeroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Seller Goods</h2>
        <p>Goods that most our Customers buy.</p>
      </div>
      <div className="products-container">
        {products?.map((product) =>
          <Product key={product._id} product={product} />)}
      </div>
      <FooterBanner FooterBanner={bannerData && bannerData[0]} />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "Product"]';
  const products = await Client.fetch(query);

  const BannerQuery = `*[_type == "Banner"]`;
  const bannerData = await Client.fetch(BannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home