import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext()

export const StateContext = ({ children }) => {
    const [ShowCart, setShowCart] = useState(false);
    const [CartItems, setCartItems] = useState([]);
    const [TotalPrice, TetTotalPrice] = useState(0);
    const [TotalQuantities, setTotalQuantities] = useState(0);
    const [Qty, setQty] = useState(1);

    let FoundProduct;
    let Index;

    const OnAdd = (Product, Quantity) => { }

    const OnRemove = (Product) => { }

    const ToggleCartItemQuantity = (ID, Value) => { }

    const IncreaseQuantity = () => { }

    const DecreaseQuantity = () => { }

    return (
        <Context.Provider
            value={{
                ShowCart,
                setShowCart,
                CartItems,
                setCartItems,
                TotalPrice,
                TetTotalPrice,
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