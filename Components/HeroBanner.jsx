import React from 'react'
import Link from 'next/link';

import { UrlFor } from '@/Utilities/Client';

const HeroBanner = ({ HeroBanner }) => {
    return (
        <div className="hero-banner-container">
            <div className='flex flex-col'>
                <p className="smalltext">{HeroBanner?.SmallText}</p>
                <h3 className='midtext'>{HeroBanner?.MidText}</h3>
                <h1 className='largetext1'>{HeroBanner?.LargeText1}</h1>
                <Link href={`/Product/${HeroBanner?.Product}`}>
                    <button type="button">{HeroBanner?.ButtonText}</button>
                </Link>
            </div>
            <div>
                <img src={UrlFor(HeroBanner?.Image)} className="hero-banner-image" />
            </div>
            <div className='flex'>
                <div className="desc">
                    <h5 className='desc-h5'>Description</h5>
                    <p className='desc-p'>{HeroBanner?.Desc}</p>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner