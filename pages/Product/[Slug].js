import React, { useState } from 'react';
import { TbMinus, TbPlus, TbStar, TbStarFilled } from 'react-icons/tb'

import MainLayout from '@/Layout/Main.Layout';
import { Client, UrlFor } from '@/Utilities/Client';
import Product from '../Product';
import { useStateContext } from '@/Context/StateContext';

const ProductDetails = ({ product, products }) => {
    const { Image, Name, Details, Price, NumReviews, Rating, Category } = product;
    // console.log(product)
    const [index, setIndex] = useState(0)
    const { DecreaseQuantity, IncreaseQuantity, OnAdd, Qty, setShowCart } = useStateContext()

    const HandleBuyNow = () => {
        OnAdd(product, Qty)

        setShowCart(true)
    }

    return (
        <MainLayout>
            <div className="product-detail-container">
                <div className='product-detail-image-container'>
                    <div className="image-container">
                        <img src={UrlFor(Image && Image[index])} className="product-detail-image" />
                    </div>
                    <div className="small-images-container">
                        {Image?.map((item, i) => (
                            <img
                                key={i}
                                src={UrlFor(item)}
                                className={i === index ? 'small-image selected-image' : 'small-image'}
                                onMouseEnter={() => setIndex(i)}
                            />
                        ))}
                    </div>
                </div>

                <div className="product-detail-desc">
                    <h1 className='product-detail-desc-h1'>{Name}</h1>
                    <h1 className='price'> Category: {Category}</h1>
                    <p className="price">Price: ₦{Price}</p>
                    <div className="reviews">
                        {
                            Rating ?
                                <>
                                    {Array.from({ length: Rating }).map((item, index) => (
                                        <div key={index}> <TbStarFilled /> </div>
                                    ))}
                                    {Array.from({ length: 5 - Rating }).map((item, index) => (
                                        <div key={index}> <TbStar /> </div>
                                    ))}
                                    <p>
                                        {NumReviews} Reviews
                                    </p>
                                </>
                                : "No Rating Available"
                        }
                    </div>
                    <h4 className='product-detail-desc-h4'>Details: </h4>
                    <p>{Details}</p>
                    <div className="quantity">
                        <h3 className='product-detail-desc-h1'>Quantity:</h3>
                        <p className="quantity-desc">
                            <span className="minus" onClick={DecreaseQuantity}><TbMinus /></span>
                            <span className="num">{Qty}</span>
                            <span className="plus" onClick={IncreaseQuantity}><TbPlus /></span>
                        </p>
                    </div>
                    <div className="buttons">
                        <button type="button" className="add-to-cart" onClick={() => OnAdd(product, Qty)}>Add to Cart</button>
                        <button type="button" className="buy-now" onClick={HandleBuyNow}>Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="maylike-products-wrapper">
                <h2>You may also like</h2>
                <div className="marquee">
                    <div className="maylike-products-container track">
                        {products.map((item) => (
                            <Product key={item._id} product={item} />
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export const getStaticPaths = async () => {
    const Query = `*[_type == "Product"] {
      Slug {
        current
      }
    }`

    const products = await Client.fetch(Query);
    const paths = products.map((product) => ({
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
    const query = `*[_type == "Product" && Slug.current == '${Slug}'][0]`;
    const productsQuery = `*[_type == "Product"]`;

    const product = await Client.fetch(query);
    const products = await Client.fetch(productsQuery);
    // console.log(product)
    // console.log(products)

    return {
        props: { products, product }
    }
}

export default ProductDetails