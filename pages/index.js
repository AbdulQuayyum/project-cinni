import React from 'react';

import MainLayout from '@/Layout/Main.Layout';
import { Client } from '@/Utilities/Client';
import { Category, Features, FooterBanner, HeroBanner, Product } from '@/Components/Index';

const Home = ({ products, bannerData }) => {
  return (
    <MainLayout Title='Home Page'>
      <HeroBanner HeroBanner={bannerData.length && bannerData[0]} />
      <Category />
      <Features />
      <div className="products-heading">
        <h2>Best Seller</h2>
        <p>Goods and Services that most our Customers seek.</p>
      </div>
      <div className="products-container">
        {products?.map((product) =>
          <Product key={product._id} product={product} />)}
      </div>
      <FooterBanner FooterBanner={bannerData && bannerData[0]} />
    </MainLayout>
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