import React from 'react';

import { Client } from '@/Utilities/Client';
import { FooterBanner, HeroBanner } from '@/Components/Index';
import Product from './Product';

const Home = ({ Products, BannerData }) => {
  return (
    <>
      <HeroBanner HeroBanner={BannerData.length && BannerData[0]} />
      <div className="products-heading">
        <h2>Best Seller Goods</h2>
        <p>Goods that most our Customers buy.</p>
      </div>
      <div className="products-container">
        {Products?.map((product) => product.Name)}
      </div>
      <FooterBanner />
    </>
  )
}

export const getServerSideProps = async () => {
  const Query = '*[_type == "Product"]';
  const Products = await Client.fetch(Query);

  const BannerQuery = '*[_type == "Banner"]';
  const BannerData = await Client.fetch(BannerQuery);

  return {
    props: { Products, BannerData }
  }
}

export default Home