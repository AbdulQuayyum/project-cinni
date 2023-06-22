import React from 'react';

import { Client } from '@/Utilities/Client';
import MainLayout from '@/Layout/Main.Layout';
import { Product } from '@/Components/Index';

const Products = ({ products }) => {
    return (
        <MainLayout Title='All Products'>
            <div className='mt-36 lg:mt-24'>
                <div className="products-heading">
                    <h2>Here are all of our Products</h2>
                </div>
                <div className="products-container">
                    {products?.map((product) =>
                        <Product key={product._id} product={product} />)}
                </div>
            </div>
        </MainLayout>
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "Product"]';
    const products = await Client.fetch(query);

    return {
        props: { products }
    }
}

export default Products