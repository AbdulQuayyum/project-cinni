import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function SearchTerm() {
    const router = useRouter()
    const { Category = 'all', Query = 'all', Price = 'all', Rating = 'all', Sort = 'default' } = router.query;
    const [state, setState] = useState({ Categories: [], Products: [], Error: '', Loading: true })

    const { Loading, Products, Error } = state;
    const [Categories, setCategories] = useState([]);

    return (
        <div>SearchTerm</div>
    )
}
