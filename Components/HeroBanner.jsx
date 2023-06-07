import React from 'react'
import Link from 'next/link';

import { UrlFor } from '@/Utilities/Client';

const HeroBanner = ({ HeroBanner }) => {
    return (
        <div className="hero-banner-container">
            <div>
                <p className="beats-solo">{HeroBanner?.SmallText}</p>
                <h3>{HeroBanner?.MidText}</h3>
                <h1>{HeroBanner?.LargeText1}</h1>
                <img src={UrlFor(HeroBanner?.Image)} className="hero-banner-image" />
                <div>
                    <Link href={`/Product/${HeroBanner?.Product}`}>
                        <button type="button">{HeroBanner?.ButtonText}</button>
                    </Link>
                    <div className="desc">
                        <h5>Description</h5>
                        <p>{HeroBanner?.Desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner