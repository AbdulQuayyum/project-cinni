import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const HeroBanner = ({ HeroBanner }) => {
    return (
        <div className="hero-banner-container">
            <div>
                <p className="beats-solo">{HeroBanner?.smallText || "blah blah blah"}</p>
                <h3>{HeroBanner?.midText || "blah blah blah"}</h3>
                <h1>{HeroBanner?.largeText1 || "blah blah blah"}</h1>
                {/* <img src={urlFor(HeroBanner?.image) || "blah blah blah"} alt="image" className="hero-banner-image" /> */}
                <img src={"/Data/dummy.png"} alt="image" className="hero-banner-image" />
                {/* <Image width={450} height={450} src="/Data/dummy.png" alt="image" className="hero-banner-image" /> */}

                <div>
                    <Link href={`/Product/${HeroBanner?.product || "blah blah blah"}`}>
                        <button type="button">{HeroBanner?.buttonText || "blah blah blah"}</button>
                    </Link>
                    <div className="desc">
                        <h5>Description</h5>
                        <p>{HeroBanner?.desc || "blah blah blah"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner