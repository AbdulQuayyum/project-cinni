import React from "react";
import dynamic from 'next/dynamic';

import MainLayout from '@/Layout/Main.Layout'

function TrackOrderDetail({ params }) {
    const { id: OrderID } = params

    return (
        <MainLayout Title={'Tracking ' + OrderID + ' Page'}>
            <span className='price flex justify-center text-center mx-4 !mt-10 mb-4'>Tracking Order {OrderID}</span>
            <div className='flex flex-col gap-x-8 md:flex-row justify-around items-center md:items-start w-full'>
                Tracking Order {OrderID}
            </div>

        </MainLayout>
    )

}
export function getServerSideProps({ params }) {
    return { props: { params } };
}

export default dynamic(() => Promise.resolve(TrackOrderDetail), { ssr: false });