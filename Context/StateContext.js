import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext()

export const StateContext = ({ children }) => {
    const [ShowCart, setShowCart] = useState(false);
    const [CartItems, setCartItems] = useState([]);
    const [TotalPrice, setTotalPrice] = useState(0);
    const [TotalQuantities, setTotalQuantities] = useState(0);
    const [Qty, setQty] = useState(1);

    let FoundProduct;
    let Index;

    const OnAdd = (Product, Quantity) => {
        const CheckProductInCart = CartItems.find((Item) => Item._id === Product._id);

        setTotalPrice((PreviousTotalPrice) => PreviousTotalPrice + Product.price * Quantity);
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