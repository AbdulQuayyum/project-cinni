import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Select from 'react-select'
import { MdClear } from 'react-icons/md'

import { Spinner, NoResults } from "@/Components/Index"
import Product from './Product';
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

const Forms = [
    {
        name: "Goods",
        value: "Goods"
    },
    {
        name: "Services",
        value: "Services"
    }
]

const SortList = [
    {
        name: "Default",
        value: "Default"
    },
    {
        name: "Price: Lowest to Highest",
        value: "Lowest"
    },
    {
        name: "Price: Highest to Lowest",
        value: "Highest"
    }
]

export default function Search() {
    const router = useRouter()
    const { Category = 'all', Query = 'all', Price = 'all', Form = 'all', Sort = 'default' } = router.query;
    const [state, setState] = useState({ Categories: [], Products: [], Error: '', Loading: true })

    const { Loading, Products, Error } = state;
    const [Categories, setCategories] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [selectedForm, setSelectedForm] = useState([])
    const [selectedSort, setSelectedSort] = useState('')

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
                if (Form !== 'all') {
                    gQuery += ` && Form match "${Form}" `;
                }
                if (Query !== 'all') {
                    gQuery += ` && Name match "${Query}" `;
                }
                if (Price !== 'all') {
                    const minPrice = Number(Price.split('-')[0]);
                    const maxPrice = Number(Price.split('-')[1]);
                    gQuery += ` && Price >= ${minPrice} && Price <= ${maxPrice}`;
                }
                let Order = '';
                if (Sort !== 'default') {
                    if (Sort === 'Lowest') Order = '| order(Price asc)';
                    if (Sort === 'Highest') Order = '| order(Price desc)';
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
    }, [Category, Query, Price, Form, Sort])

    const FilterSearch = ({ Category, Sort, SearchQuery, Price, Form }) => {
        const path = router.pathname;
        const { query } = router;
        if (SearchQuery) query.SearchQuery = SearchQuery;
        if (Category) query.Category = Category;
        if (Sort) query.Sort = Sort;
        if (Price) query.Price = Price;
        if (Form) query.Form = Form;

        router.push({
            pathname: path,
            query: query,
        });
    };
    const CategoryHandler = (Categories) => {
        FilterSearch({ Category: Categories.name });
    };
    const SortHandler = (selectedSort) => {
        FilterSearch({ Sort: selectedSort.value });
    };
    const PriceHandler = (selectedPrice) => {
        FilterSearch({ Price: selectedPrice.value });
    };
    const FormHandler = (selectedForm) => {
        FilterSearch({ Form: selectedForm.value });
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
                        <span className='flex text-[#aaa] mb-2 font-extrabold'>Form of Product</span>
                        <Select
                            value={Forms.find((option) => option.value === selectedForm)}
                            options={Forms}
                            getOptionLabel={(Forms) => Forms.name}
                            getOptionValue={(Forms) => Forms.value}
                            styles={customStyles}
                            id="Forms"
                            instanceId="Forms"
                            onChange={FormHandler}
                            className='w-full focus:bg-[#aaa]'
                            placeholder="Select a form of product"
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
                            placeholder="Select a category"
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
                            placeholder="Select a price range"
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
                    <div className='flex justify-between'>
                        <div className='flex items-start gap-x-4'>
                            {Products && Products.length !== 0 ? `${Products.length} Found` : <NoResults text={`No results found`} />}{' '}
                            {Query !== 'all' && Query !== '' && ' : ' + Query}
                            {Price !== 'all' && ' : Price ' + Price}
                            {(Query !== 'all' && Query !== '') ||
                                Price !== 'all' ? (
                                <button onClick={() => router.push('/Search')}>< MdClear size={24} /></button>
                            ) : null}
                        </div>
                        <div className=''>
                            <span className='flex text-[#aaa] mb-2 font-extrabold'>Sort By</span>
                            <Select
                                value={SortList.find((option) => option.value === selectedSort)}
                                options={SortList}
                                getOptionLabel={(SortList) => SortList.name}
                                getOptionValue={(SortList) => SortList.value}
                                styles={customStyles}
                                id="SortList"
                                instanceId="SortList"
                                onChange={SortHandler}
                                className='w-full max-w-xs focus:bg-[#aaa]'
                                placeholder="Select a method to sort by"
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
                    <div>
                        {Loading ? (
                            <Spinner message={'Loading...'} />
                        ) : (
                            <div className='products-container'>
                                {Products && Products.map((product) => (
                                    <Product key={product._id} product={product} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
