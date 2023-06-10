import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { setCookie, getCookie } from 'cookies-next';

const Context = createContext()

export const StateContext = ({ children }) => {
    const [ShowCart, setShowCart] = useState(false);
    const [CartItems, setCartItems] = useState(getCookie('CartItems') ? JSON.parse(getCookie('CartItems')) : []);
    const [TotalPrice, setTotalPrice] = useState(getCookie('TotalPrice') ? getCookie('TotalPrice') : 0);
    const [TotalQuantities, setTotalQuantities] = useState(getCookie('TotalQuantities') ? getCookie('TotalQuantities') : 0);
    // const [CartItems, setCartItems] = useState([]);
    // const [TotalPrice, setTotalPrice] = useState(0);
    // const [TotalQuantities, setTotalQuantities] = useState(0);
    const [Qty, setQty] = useState(1);

    const options = {
        maxAge: 60 * 60 * 24 * 7, // Expires in 7 days
        secure: true, // Only send the cookie over HTTPS
        path: '/', // Set the cookie for the entire domain
        sameSite: 'strict', // Restrict the cookie to same-site requests
    };

    // useEffect(() => {
    //     const StoredCartItems = getCookie('CartItems', options);

    //     const parsedStoredCartItems =
    //         StoredCartItems !== null ? (JSON.parse(StoredCartItems)) : []

    //     setCartItems(parsedStoredCartItems)
    // }, [])

    // useEffect(() => {
    //     const StoredTotalPrice = getCookie('TotalPrice', options);

    //     const parsedStoredTotalPrice =
    //         StoredTotalPrice !== null ? (parseFloat(StoredTotalPrice)) : []

    //     setTotalPrice(parsedStoredTotalPrice)
    // }, [])

    // useEffect(() => {
    //     const StoredTotalQuantities = getCookie('TotalQuantities', options);

    //     const parsedStoredTotalQuantities =
    //         StoredTotalQuantities !== null ? (parseInt(StoredTotalQuantities)) : []

    //     setTotalPrice(parsedStoredTotalQuantities)
    // }, [])

    // Load data from storage on initial component mount
    useEffect(() => {
        const StoredCartItems = getCookie('CartItems', options);
        const StoredTotalPrice = getCookie('TotalPrice', options);
        const StoredTotalQuantities = getCookie('TotalQuantities', options);


        // const [CartItems, setCartItems] = useState(getCookie('CartItems') ? JSON.parse(getCookie('CartItems')) : []);
        // const [TotalPrice, setTotalPrice] = useState(getCookie('TotalPrice') ? getCookie('TotalPrice') : 0);
        // const [TotalQuantities, setTotalQuantities] = useState(getCookie('TotalQuantities') ? getCookie('TotalQuantities') : 0);
        // const CartItems = StoredCartItems ? JSON.parse(StoredCartItems) : [];
        // const TotalPrice = StoredTotalPrice ? parseFloat(StoredTotalPrice) : 0;
        // const TotalQuantities = StoredTotalQuantities ? parseInt(StoredTotalQuantities) : 0;
        // const StoredCartItems = getCookie('CartItems') ? JSON.parse(getCookie('CartItems')) : [];
        // const StoredTotalPrice = getCookie('TotalPrice') ? getCookie('TotalPrice') : '';
        // const StoredTotalQuantities = getCookie('TotalQuantities') ? getCookie('TotalQuantities') : '';

        if (StoredCartItems) {
            setCartItems(JSON.parse(StoredCartItems));
        }

        if (StoredTotalPrice) {
            setTotalPrice(parseFloat(StoredTotalPrice));
        }

        if (StoredTotalQuantities) {
            setTotalQuantities(parseInt(StoredTotalQuantities));
        }
    }, [])

    // Update storage whenever the cart items, total price, or total quantities change
    useEffect(() => {
        setCookie('CartItems', JSON.stringify(CartItems), options);
    }, [CartItems]);

    useEffect(() => {
        setCookie('TotalPrice', TotalPrice.toString(), options);
    }, [TotalPrice]);

    useEffect(() => {
        setCookie('TotalQuantities', TotalQuantities.toString(), options);
    }, [TotalQuantities]);

    let FoundProduct;
    let Index;

    const OnAdd = (Product, Quantity) => {
        const CheckProductInCart = CartItems.find((Item) => Item._id === Product._id);

        setTotalPrice((PreviousTotalPrice) => PreviousTotalPrice + Product.Price * Quantity);
        setTotalQuantities((PreviousTotalQuantities) => PreviousTotalQuantities + Quantity);

        if (CheckProductInCart) {
            const UpdatedCartItems = CartItems.map((CartProduct) => {
                if (CartProduct._id === Product._id) return {
                    ...CartProduct,
                    Quantity: CartProduct.Quantity + Quantity
                }
            })

            setCartItems(UpdatedCartItems);
        } else {
            Product.Quantity = Quantity;

            setCartItems([...CartItems, { ...Product }]);
        }

        toast.success(`${Qty} ${Product.Name} added to your cart.`);
        console.log(TotalPrice)
    }

    const OnRemove = (Product) => {
        FoundProduct = CartItems.find((Item) => Item._id === Product._id);
        const NewCartItems = CartItems.filter((Item) => Item._id !== Product._id);

        setTotalPrice((PreviousTotalPrice) => PreviousTotalPrice - FoundProduct.Price * FoundProduct.Quantity);
        setTotalQuantities(PreviousTotalQuantities => PreviousTotalQuantities - FoundProduct.Quantity);
        setCartItems(NewCartItems);
    }

    const ToggleCartItemQuantity = (ID, Value) => {

        FoundProduct = CartItems.find((Item) => Item._id === ID)
        Index = CartItems.findIndex((Product) => Product._id === ID);
        const NewCartItems = CartItems.filter((Item) => Item._id !== ID)

        if (Value === 'increase') {
            setCartItems([...NewCartItems, { ...FoundProduct, Quantity: FoundProduct.Quantity + 1 }]);
            setTotalPrice((PreviousTotalPrice) => PreviousTotalPrice + FoundProduct.Price)
            setTotalQuantities(PreviousTotalQuantities => PreviousTotalQuantities + 1)
        } else if (Value === 'decrease') {
            if (FoundProduct.Quantity > 1) {
                setCartItems([...NewCartItems, { ...FoundProduct, Quantity: FoundProduct.Quantity - 1 }]);
                setTotalPrice((PreviousTotalPrice) => PreviousTotalPrice - FoundProduct.Price)
                setTotalQuantities(PreviousTotalQuantities => PreviousTotalQuantities - 1)
            }
        }
    }

    const IncreaseQuantity = () => {
        setQty((PreviousQuantity) => PreviousQuantity + 1)
    }

    const DecreaseQuantity = () => {
        setQty((PreviousQuantity) => {
            if (PreviousQuantity - 1 < 1) return 1;
            return PreviousQuantity - 1
        })
    }

    return (
        <Context.Provider
            value={{
                ShowCart,
                setShowCart,
                CartItems,
                setCartItems,
                TotalPrice,
                setTotalPrice,
                TotalQuantities,
                setTotalQuantities,
                Qty,
                setQty,
                OnAdd,
                OnRemove,
                ToggleCartItemQuantity,
                IncreaseQuantity,
                DecreaseQuantity
            }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);