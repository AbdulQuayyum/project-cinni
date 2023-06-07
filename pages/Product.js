import React from 'react'
import Link from 'next/link';

import { UrlFor } from '@/Utilities/Client';

const Product = ({ product: { Image, Name, Slug, Price } }) => {
    return (
        <div>
            <Link href={`/Product/${Slug.current}`}>
                <div className="product-card">
                    <img
                        src={UrlFor(Image && Image[0])}
                        width={250}
                        height={250}
                        className="product-image"
                    />
                    <p className="product-name">{Name}</p>
                    <p className="product-price">${Price}</p>
                </div>
            </Link>
        </div>
    )
}

export default Product