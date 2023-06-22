import React, { useEffect } from 'react';
import Link from 'next/link';
import { RiShoppingBag3Line } from 'react-icons/ri';

import { RunFireworks } from '@/Utilities/RunFireworks';
import MainLayout from '@/Layout/Main.Layout';

const Success = () => {

    useEffect(() => {
        RunFireworks();
    }, []);

    return (
        <MainLayout>
            <div className="success-wrapper mt-36 lg:mt-44">
                <div className="success">
                    <p className="icon">
                        <RiShoppingBag3Line />
                    </p>
                    <h2>Thank you for your order!</h2>
                    <p className="email-msg">Check your email inbox for the receipt.</p>
                    <p className="description">
                        If you have any questions, please email
                        <a className="email" href="mailto:order@example.com">
                            order@example.com
                        </a>
                    </p>
                    <Link href="/">
                        <button type="button" width="300px" className="btn">
                            Continue Shopping
                        </button>
                    </Link>
                </div>
            </div>
        </MainLayout>
    )
}

export default Success