import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { Client, UrlFor } from '@/Utilities/Client';
import { Product } from "../Product"

const ProductDetails = ({ Product, Products }) => {
    const { Image, Name, Details, Price } = Product
    const [index, setIndex] = useState(0)

    return (
        <div>ProductDetails</div>
    )
}

export const getStaticPaths = async () => {
    const Query = `*[_type == "Product"] {
      Slug {
        current
      }
    }
    `;

    const Products = await Client.fetch(Query);

    const paths = Products.map((product) => ({
        params: {
            Slug: product.Slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { Slug } }) => {
    const Query = `*[_type == "Product" && Slug.current == '${Slug}'][0]`;
    const ProductsQuery = '*[_type == "Product"]'

    const Product = await Client.fetch(Query);
    const Products = await Client.fetch(ProductsQuery);

    console.log(Product);

    return {
        props: { Products, Product }
    }
}

export default ProductDetails