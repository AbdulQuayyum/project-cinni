import React from 'react'
import { useRouter } from 'next/router'

import { Categories } from '@/Utilities/Data'

const Category = () => {
    const router = useRouter()
    const { NewCategories } = router.query
    return (
        <div>
            <div className="products-heading">
                <h2>Most Searched Categories</h2>
                <p>Category that most our Customers search.</p>
            </div>
            <div>
                {Categories?.map((item) => {

                })}
            </div>
        </div>
    )
}

export default Category