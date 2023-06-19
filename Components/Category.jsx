import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { AllCategories } from '@/Utilities/Data'

const Category = () => {
    const router = useRouter()
    const { query } = router;
    const { PCategory } = query;

    const activeCategoryStyle = 'border-2 hover:bg-primary border-black px-3 py-2 rounded-full flex items-center gap-2 justify-center cursor-pointer text-black'
    const categoryStyle = 'border-2 hover:bg-primary border-gray-300 px-3 py-2 rounded-full flex items-center gap-2 justify-center cursor-pointer text-black'

    const GoodsCategories = AllCategories.filter((item) => item?.form === 'Goods');
    const ServicesCategories = AllCategories.filter((item) => item?.form === 'Services');

    return (
        <div>
            <div className="products-heading">
                <h2>Most Searched Categories</h2>
                <p>Category that most our Customers search.</p>
            </div>
            <div className="flex justify-center flex-col items-center gap-3 flex-wrap">
                <div className="flex justify-center flex-col items-center gap-3 flex-wrap">
                    <span className='price'>Goods</span>
                    <div className="flex justify-center gap-3 flex-wrap">
                        {GoodsCategories?.map((item) => (
                            <Link href={`/?PCategory=${item?.name}`} key={item?.name}>
                                <div
                                    className={PCategory === item?.name ? activeCategoryStyle : categoryStyle}
                                >
                                    <div className="font-bold text-2xl xl:text-md ">
                                        {item?.icon}
                                    </div>
                                    <span className={`font-medium flex text-center text-md capitalize`}  >
                                        {item?.name}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center flex-col items-center gap-3 flex-wrap">
                    <span className='price'>Services</span>
                    <div className="flex justify-center gap-3 flex-wrap">
                        {ServicesCategories?.map((item) => (
                            <Link href={`/?PCategory=${item?.name}`} key={item?.name}>
                                <div
                                    className={PCategory === item?.name ? activeCategoryStyle : categoryStyle}
                                >
                                    <div className="font-bold text-2xl xl:text-md ">
                                        {item?.icon}
                                    </div>
                                    <span className={`font-medium flex text-center text-md capitalize`}  >
                                        {item?.name}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category