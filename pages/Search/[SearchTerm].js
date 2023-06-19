import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import MainLayout from '@/Layout/Main.Layout';
import { AllCategories } from '@/Utilities/Data';

export default function SearchTerm() {
    const router = useRouter()
    const { Category = 'all', Query = 'all', Price = 'all', Rating = 'all', Sort = 'default' } = router.query;
    const [state, setState] = useState({ Categories: [], Products: [], Error: '', Loading: true })

    const { Loading, Products, Error } = state;
    const [Categories, setCategories] = useState([]);

    useEffect(() => {
        const FetchCategories = () => {
            try {
                const data = AllCategories;
                setCategories(data);
            } catch (err) {
                console.log(err.message);
            }
        }
        FetchCategories()

        const FetchData = async () => { }

        FetchData()
    }, [Category, Query, Price, Rating, Sort])

    return (
        <MainLayout>SearchTerm</MainLayout>
    )
}
