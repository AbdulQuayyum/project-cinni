import React from 'react'
import Link from 'next/link';

import { UrlFor } from '@/Utilities/Client';

const FooterBanner = ({ FooterBanner: { Discount, LargeText1, LargeText2, SaleTime, SmallText, MidText, Desc, Product, ButtonText, Image } }) => {
    return (
        <div className="footer-banner-container">
            <div className="banner-desc">
                <div className="left">
                    <p>{Discount}</p>
                    <h3>{LargeText1}</h3>
                    <h3>{LargeText2}</h3>
                    <p>{SaleTime}</p>
                </div>
                <div className="right">
                    <p>{SmallText}</p>
                    <h3>{MidText}</h3>
                    <p>{Desc}</p>
                    <Link href={`/Product/${Product}`}>
                        <button type="button">{ButtonText}</button>
                    </Link>
                </div>

                <img
                    src={UrlFor(Image)} className="footer-banner-image"
                />
            </div>
        </div>
    )
}

export default FooterBanner