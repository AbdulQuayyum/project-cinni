import React from 'react'
import Link from 'next/link';

import { UrlFor } from '@/Utilities/Client';

const HeroBanner = ({ HeroBanner }) => {
    return (
        <div className="hero-banner-container">
            <div>
                <p className="beats-solo">{HeroBanner?.SmallText || "blah blah blah"}</p>
                <h3>{HeroBanner?.MidText || "blah blah blah"}</h3>
                <h1>{HeroBanner?.LargeText1 || "blah blah blah"}</h1>
                <img src={UrlFor(HeroBanner?.Image)} alt="image" className="hero-banner-image" />
                <div>
                    <Link href={`/Product/${HeroBanner?.Product || "blah blah blah"}`}>
                        <button type="button">{HeroBanner?.ButtonText || "blah blah blah"}</button>
                    </Link>
                    <div className="desc">
                        <h5>Description</h5>
                        <p>{HeroBanner?.Desc || "blah blah blah"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner