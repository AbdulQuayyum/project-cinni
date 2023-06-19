import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Select from 'react-select'

import { Client } from '@/Utilities/Client';
import MainLayout from '@/Layout/Main.Layout';
import { AllCategories } from '@/Utilities/Data';

const Prices = [
    {
        name: '₦1 to ₦10',
        value: '1-10',
    },
    {
        name: '₦11 to ₦20',
        value: '11-20',
    },
    {
        name: '₦21 to ₦100',
        value: '21-100',
    },
];

const Ratings = [1, 2, 3, 4, 5];

export default function Search() {
    const router = useRouter()
    const { Category = 'all', Query = 'all', Price = 'all', Rating = 'all', Sort = 'default' } = router.query;
    const [state, setState] = useState({ Categories: [], Products: [], Error: '', Loading: true })

    const { Loading, Products, Error } = state;
    const [Categories, setCategories] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [selectedRating, setSelectedRating] = useState(null)

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

        const FetchData = async () => {
            try {
                let gQuery = '*[_type == "Product"';
                if (Category !== 'all') {
                    gQuery += ` && Category match "${Category}" `;
                }
                if (Query !== 'all') {
                    gQuery += ` && Name match "${Query}" `;
                }
                if (Price !== 'all') {
                    const minPrice = Number(Price.split('-')[0]);
                    const maxPrice = Number(Price.split('-')[1]);
                    gQuery += ` && Price >= ${minPrice} && Price <= ${maxPrice}`;
                }
                if (Rating !== 'all') {
                    gQuery += ` && Rating >= ${Number(Rating)} `;
                }
                let Order = '';
                if (Sort !== 'default') {
                    if (Sort === 'Lowest') Order = '| Order(Price asc)';
                    if (Sort === 'Highest') Order = '| Order(Price Desc)';
                    if (Sort === 'TopRated') Order = '| Order(Rating Desc)';
                }

                gQuery += `] ${Order}`;
                setState({ Loading: true });

                const Products = await Client.fetch(gQuery);
                setState({ Products, Loading: false });

            } catch (err) {
                setState({ Error: err.message, Loading: false });
            }
        }

        FetchData()
    }, [Category, Query, Price, Rating, Sort])

    const FilterSearch = ({ Category, Sort, SearchQuery, Price, Rating }) => {
        const path = router.pathname;
        const { query } = router;
        if (SearchQuery) query.SearchQuery = SearchQuery;
        if (Category) query.Category = Category;
        if (Sort) query.Sort = Sort;
        if (Price) query.Price = Price;
        if (Rating) query.Rating = Rating;

        router.push({
            pathname: path,
            query: query,
        });
    };
    const CategoryHandler = (Categories) => {
        FilterSearch({ Category: Categories.name });
    };
    const SortHandler = (e) => {
        FilterSearch({ Sort: e.target.value });
    };
    const PriceHandler = (selectedPrice) => {
        FilterSearch({ Price: selectedPrice.value });
    };
    const RatingHandler = (selectedRating) => {
        FilterSearch({ Rating: selectedRating });
    };

    const customStyles = {
        control: (provided) => ({
            ...provided,
            cursor: 'pointer',
            width: '100%',
            background: 'transparent',
            borderColor: "#aaa",
            borderRadius: "12px",
            minHeight: '48px',
            padding: "0px 10px"
        })
    };

    return (
        <MainLayout>
            <div className='grid grid-cols-3 mt-10'>
                <div className='flex flex-col px-10 gap-y-4'>
                    <div>
                        <span className='flex text-[#aaa] mb-2 font-extrabold'>Category</span>
                        <Select
                            value={Categories.find((option) => option.name === name)}
                            options={Categories}
                            getOptionLabel={(Categories) => Categories.name}
                            getOptionValue={(Categories) => Categories.name}
                            styles={customStyles}
                            id="categories"
                            instanceId="categories"
                            onChange={CategoryHandler}
                            className='w-full focus:bg-[#aaa]'
                            placeholder="Slect a category"
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 0,
                                colors: {
                                    ...theme.colors,
                                    primary25: '#D3D3D3',
                                    primary: '#aaa',
                                },
                            })}
                        />
                    </div>
                    <div>
                        <span className='flex text-[#aaa] mb-2 font-extrabold'>Prices</span>
                        <Select
                            value={Prices.find((option) => option.value === selectedPrice)}
                            options={Prices}
                            getOptionLabel={(Prices) => Prices.name}
                            getOptionValue={(Prices) => Prices.value}
                            styles={customStyles}
                            id="Prices"
                            instanceId="Prices"
                            onChange={PriceHandler}
                            className='w-full focus:bg-[#aaa]'
                            placeholder="Slect a price range"
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 0,
                                colors: {
                                    ...theme.colors,
                                    primary25: '#D3D3D3',
                                    primary: '#aaa',
                                },
                            })}
                        />
                    </div>
                    <div>
                        <span className='flex text-[#aaa] mb-2 font-extrabold'>Ratings</span>
                        <Select
                            value={Ratings.find((option) => option)}
                            options={Ratings}
                            // getOptionLabel={(Ratings) => Ratings.name}
                            // getOptionValue={(Ratings) => Ratings.name}
                            styles={customStyles}
                            id="Ratings"
                            instanceId="Ratings"
                            onChange={RatingHandler}
                            className='w-full focus:bg-[#aaa]'
                            placeholder="Slect a rating value"
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 0,
                                colors: {
                                    ...theme.colors,
                                    primary25: '#D3D3D3',
                                    primary: '#aaa',
                                },
                            })}
                        />
                    </div>
                </div>
                <div className='col-span-2'>

                </div>
            </div>
        </MainLayout>
    )
}
